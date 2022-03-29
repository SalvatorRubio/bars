<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/php/classes/User.php';

class Teacher extends User {
  // КЛАССНЫЙ РУКОВОДИТЕЛЬ

  // получение группы
  public function selectGroup($id) {
    $stmt = $this->dbh->prepare('CALL хранимая процедура(?)');
    $stmt->bindParam(1, $id, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  //Получение фамилий, имен и оценок
  public function selectStudentsAndMarks($teacher_id, $group_id, $discipline_id, $date_from, $date_to) {
    $stmt = $this->dbh->prepare('CALL selectStudentsAndMarksForTeacher(?,?,?,?,?)');
    $stmt->bindParam(1, $teacher_id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $group_id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $discipline_id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(4, $date_from, PDO::PARAM_STR, 4000);
    $stmt->bindParam(5, $date_to, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  // Поставить оценку
  public function updateMark($student, $shedule, $mark, $presence)
  {
    $stmt = $this->dbh->prepare('CALL хранимая процедура(?,?,?,?,?)');
    $stmt->bindParam(1, $student, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $shedule, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $mark, PDO::PARAM_STR, 4000);
    $stmt->bindParam(4, $presence, PDO::PARAM_STR, 4000);
    $stmt->execute();
  }

  // Ввести тему урока
  public function updateTopic($date, $number_pair, $teacher_id, $group_id, $topic)
  {
    $stmt = $this->dbh->prepare('CALL хранимая процедура(?,?)');
    $stmt->bindParam(1, $date, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $number_pair, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $teacher_id, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $group_id, PDO::PARAM_INT, 4000);
    $stmt->bindParam(3, $topic, PDO::PARAM_STR, 4000);
    $stmt->execute();
  }
}

$teacher = new Teacher('root','', 'localhost', 'journal');