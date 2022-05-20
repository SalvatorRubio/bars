<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/php/classes/User.php';

class ClassroomTeacher extends User {
  // КЛАССНЫЙ РУКОВОДИТЕЛЬ

  // Select disciplines, groups, students
  public function select($procedure, $name) {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'(?)');
    $stmt->bindParam(1, $name, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectKnowledgeForAttestation($procedure, $start_date, $end_date, $group)
  {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'(?,?,?)');
    $stmt->bindParam(1, $start_date, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $end_date, PDO::PARAM_INT, 4000);
    $stmt->bindParam(3, $group, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectKnowledgeForSession($procedure,  $group)
  {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'(?)');
    $stmt->bindParam(1, $group, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectMiddleMarksAttestation($group, $start_date, $end_date)
  {
    $stmt = $this->dbh->prepare('CALL selectMiddleMarksAttestationForClassroomTeacher(?,?,?)');
    $stmt->bindParam(1, $group, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $start_date, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $end_date, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectСalculatedInfo($start_date, $end_date, $group)
  {
    $stmt = $this->dbh->prepare('CALL selectCalculatedInfoForClassroomTeacher(?,?,?)');
    $stmt->bindParam(1, $start_date, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $end_date, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $group, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectMiddleMarksSession($group)
  {
    $stmt = $this->dbh->prepare('CALL selectMiddleMarksSessionForClassroomTeacher(?)');
    $stmt->bindParam(1, $group, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }
}

$classroom_teacher = new ClassroomTeacher('root','', 'localhost', 'journal');