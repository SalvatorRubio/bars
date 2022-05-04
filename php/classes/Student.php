<?php
require_once  $_SERVER['DOCUMENT_ROOT'].'/php/classes/User.php';

class Student extends User {

  // Просмотреть расписание на день
  public function selectShedule($date, $id)
  {
    $stmt = $this->dbh->prepare('CALL selectShedule(?,?)');
    $stmt->bindParam(1, $id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $date, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectDates($first_date, $second_date) {
    $stmt = $this->dbh->prepare('CALL selectDatesForStudent(?,?)');
    $stmt->bindParam(1, $first_date, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $second_date, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }


  // Просмотреть оценки за определенную дату
  public function selectMarks($student, $date_from, $date_to, $discipline)
  {
    $stmt = $this->dbh->prepare('CALL selectMarksForStudents(?,?,?,?)');
    $stmt->bindParam(1, $student, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $date_from, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $date_to, PDO::PARAM_STR, 4000);
    $stmt->bindParam(4, $discipline, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectDiscipline($group)
  {
    $stmt = $this->dbh->prepare('CALL selectDisciplinesForAdmin(?)');
    $stmt->bindParam(1, $group, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectMiddleMarks($student, $date_from, $date_to) {
    $stmt = $this->dbh->prepare('CALL selectMiddleMarksForStudent(?,?,?)');
    $stmt->bindParam(1, $student, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $date_from, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $date_to, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }
}

$student = new Student('root','', 'localhost', 'journal');
