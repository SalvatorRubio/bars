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
  //Получение фамилий, имен и оценок, получение дат обучения, абсолютную успеваемость и качество знаний
  // public function selectDatesAndMarks($procedure, $teacher_id, $group_id, $discipline_id, $lesson_type, $date_from, $date_to) {
  //   $stmt = $this->dbh->prepare('CALL '.$procedure.'(?,?,?,?,?,?)');
  //   $stmt->bindParam(1, $teacher_id, PDO::PARAM_STR, 4000);
  //   $stmt->bindParam(2, $group_id, PDO::PARAM_STR, 4000);
  //   $stmt->bindParam(3, $discipline_id, PDO::PARAM_STR, 4000);
  //   $stmt->bindParam(4, $lesson_type, PDO::PARAM_STR, 4000);
  //   $stmt->bindParam(5, $date_from, PDO::PARAM_STR, 4000);
  //   $stmt->bindParam(6, $date_to, PDO::PARAM_STR, 4000);
  //   $stmt->execute();
  //   $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
  //   return $query;
  // }

  // public function selectMiddleMarksByTypes($teacher_id, $group_id, $discipline_id, $lesson_type) {
  //   $stmt = $this->dbh->prepare('CALL selectMiddleMarksByTypes(?,?,?,?)');
  //   $stmt->bindParam(1, $teacher_id, PDO::PARAM_STR, 4000);
  //   $stmt->bindParam(2, $group_id, PDO::PARAM_STR, 4000);
  //   $stmt->bindParam(3, $discipline_id, PDO::PARAM_STR, 4000);
  //   $stmt->bindParam(4, $lesson_type, PDO::PARAM_STR, 4000);
  //   $stmt->execute();
  //   $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
  //   return $query;
  // }






  public function selectMiddleMarks($student, $start_date, $end_date)
  {
    $stmt = $this->dbh->prepare('CALL selectMiddleMarksForClassroomTeacher(?,?,?)');
    $stmt->bindParam(1, $student, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $start_date, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $end_date, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }
}

$classroom_teacher = new ClassroomTeacher('root','', 'localhost', 'journal');