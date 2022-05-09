<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/php/classes/User.php';

class Teacher extends User {
  // КЛАССНЫЙ РУКОВОДИТЕЛЬ

  // УЗНАТЬ ЧТО ДЕЛАТЬ С КЛАССНЫМ РУКОВОДИТЕЛЕМ, ВЕДЬ ЕСЛИ БЛОКИРОВАТЬ ТАБЛИЦУ НА ИЗМЕНЕНИЕ ОН МОЖЕТ ПРОВОДИТЬ КАКОЙ-ТО ПРЕДМЕТ
  // получение одним запросом группы и другим тип урока
  public function selectGroupsAndLessonType($procedure ,$id) {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'(?)');
    $stmt->bindParam(1, $id, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectDisciplines($teacher, $group) {
    $stmt = $this->dbh->prepare('CALL selectDisciplinesForTeacher(?,?)');
    $stmt->bindParam(1, $teacher, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $group, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  //Получение фамилий, имен и оценок, получение дат обучения, абсолютную успеваемость и качество знаний
  public function selectDatesAndMarks($procedure, $teacher_id, $group_id, $discipline_id, $lesson_type, $date_from, $date_to) {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'(?,?,?,?,?,?)');
    $stmt->bindParam(1, $teacher_id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $group_id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $discipline_id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(4, $lesson_type, PDO::PARAM_STR, 4000);
    $stmt->bindParam(5, $date_from, PDO::PARAM_STR, 4000);
    $stmt->bindParam(6, $date_to, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectMiddleMarksByTypes($teacher_id, $group_id, $discipline_id, $lesson_type) {
    $stmt = $this->dbh->prepare('CALL selectMiddleMarksByTypes(?,?,?,?)');
    $stmt->bindParam(1, $teacher_id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $group_id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $discipline_id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(4, $lesson_type, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }


  // Поставить оценку
  public function updateMark($student, $shedule, $mark)
  {
    $stmt = $this->dbh->prepare('CALL updateMark(?,?,?)');
    $stmt->bindParam(1, $student, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $shedule, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $mark, PDO::PARAM_STR, 4000);
    $stmt->execute();
  }

  // Ввести тему урока
  public function updateTopic($date, $lesson_type,$shedule, $teacher_id, $group_id, $topic)
  {
    $stmt = $this->dbh->prepare('CALL updateTopic(?,?,?,?,?,?)');
    $stmt->bindParam(1, $date, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $lesson_type, PDO::PARAM_INT, 4000);
    $stmt->bindParam(3, $shedule, PDO::PARAM_INT, 4000);
    $stmt->bindParam(4, $teacher_id, PDO::PARAM_INT, 4000);
    $stmt->bindParam(5, $group_id, PDO::PARAM_INT, 4000);
    $stmt->bindParam(6, $topic, PDO::PARAM_STR, 4000);
    $stmt->execute();
  }

  public function selectKnowledge($procedure, $start_date, $end_date, $discipline, $group, $type)
  {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'(?,?,?,?,?)');
    $stmt->bindParam(1, $start_date, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $end_date, PDO::PARAM_INT, 4000);
    $stmt->bindParam(3, $discipline, PDO::PARAM_INT, 4000);
    $stmt->bindParam(4, $group, PDO::PARAM_INT, 4000);
    $stmt->bindParam(5, $type, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }
}

$teacher = new Teacher('root','', 'localhost', 'journal');
