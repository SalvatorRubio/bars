<?php
require_once  $_SERVER['DOCUMENT_ROOT'].'/php/classes/User.php';

class Student extends User {
  // Доделать вывод названия группы
  // Переделать ввод даты в хранимых процедурах
  // УДАЛИТЬ СТУДЕНТА ЕСЛИ Выпустился
  // SELECT discipline.name,GROUP_CONCAT(`mark`) as mark, GROUP_CONCAT(cur_date) as cur_date, GROUP_CONCAT(lesson_type) as lesson_type, AVG(mark) from shedule, journal, discipline WHERE student_id = 1 and cur_date >= "2022-03-26" and cur_date <= "2022-04-20" and discipline.discipline_id in (SELECT discipline_id from teach_group_disc where teach_group_disc.teach_group_disc_id = shedule.teach_group_disc_id) and journal.shedule_id = shedule.shedule_id GROUP BY discipline.name ORDER BY cur_date

  // Просмотреть расписание на день
  public function selectLessonsOnDay($procedure, $date, $id)
  {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'(?,?)');
    $stmt->bindParam(1, $date, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $id, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  // Просмотреть оценки за определенную дату
  public function selectMarks($student,  $date_from, $date_to)
  {
    $stmt = $this->dbh->prepare('CALL selectMarksForStudents(?,?,?)');
    $stmt->bindParam(1, $student, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $date_from, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $date_to, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectLessons($group) {
    $stmt = $this->dbh->prepare('CALL selectLessons(?)');
    $stmt->bindParam(1, $group, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }
}

$student = new Student('root','', 'localhost', 'journal');