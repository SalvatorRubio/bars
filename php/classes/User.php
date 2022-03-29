<?php
require_once  $_SERVER['DOCUMENT_ROOT'].'/php/classes/Database.php';
abstract class User extends Db {

  public function updatePassword($table, $password, $id)
  {
    $stmt = $this->dbh->prepare('CALL хранимая процедура(?,?,?)');
    $stmt->bindParam(1, $table, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $password, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $id, PDO::PARAM_INT, 4000);
    $stmt->execute();
  }
  // Доделать при авторизации получение роли

  public function authorization($name, $password)
  {
    $stmt = $this->dbh->prepare('CALL authorization(?,?)');
    $stmt->bindParam(1, $name, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $password, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }
}
