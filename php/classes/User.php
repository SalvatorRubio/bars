<?php
require_once  $_SERVER['DOCUMENT_ROOT'].'/php/classes/Database.php';
abstract class User extends Db {

  public function updatePassword($table, $new_password, $id, $old_password)
  {
    $stmt = $this->dbh->prepare('CALL updatePassword(?,?,?,?)');
    $stmt->bindParam(1, $new_password, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $id, PDO::PARAM_INT, 4000);
    $stmt->bindParam(3, $table, PDO::PARAM_STR, 4000);
    $stmt->bindParam(4, $old_password, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

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
