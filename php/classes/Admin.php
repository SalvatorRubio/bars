<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/php/classes/User.php';
class Admin extends User {
  public function select($procedure)
  {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'()');
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function updateSemester()
  {
    $stmt = $this->dbh->prepare('CALL updateSemester()');
    $stmt->execute();
  }

  public function selectOneTeacher($teacher) {
    $stmt = $this->dbh->prepare('CALL selectOneTeacherForAdmin(?)');
    $stmt->bindParam(1, $teacher, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  // ЗАПИСАТЬ ДАННЫЕ В ТАБЛИЦЫ УЧИТЕЛЬ, УЧЕНИК И ПРОЧЕЕ
  public function insert($procedure, $string)
  {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'(?)');
    $stmt->bindParam(1, $string, PDO::PARAM_STR, 4000);
    $stmt->execute();
  }

  public function watchTheShedule($discipline, $group)
  {
    $stmt = $this->dbh->prepare('CALL watchTheShedule(?,?)');
    $stmt->bindParam(1, $discipline, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $group, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectDisciplinesSpeciality($speciality) {
    $stmt = $this->dbh->prepare("CALL selectDisciplinesSpeciality(?)");
    $stmt->bindParam(1, $speciality, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectAllInfoDiscipline($discipline) {
    $stmt = $this->dbh->prepare("CALL selectAllInfoDiscipline(?)");
    $stmt->bindParam(1, $discipline, PDO::PARAM_STR, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  // Получение данных из таблицы teacher_group_dics для записи урока
  public function selectDisciplinesAndStudents($name, $group)
  {
    $stmt = $this->dbh->prepare('CALL '.$name.'(?)');
    $stmt->bindParam(1, $group, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  public function selectTeachGroupDisc($group, $discipline) {
    $stmt = $this->dbh->prepare('CALL selectTeachGroupDisc(?,?)');
    $stmt->bindParam(1, $group, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $discipline, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query[0];
  }

  public function updateStudent($student, $group) {
    $stmt = $this->dbh->prepare('CALL updateStudent(?,?)');
    $stmt->bindParam(1, $student, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $group, PDO::PARAM_INT, 4000);
    $stmt->execute();
  }

  public function deleteStudent($student, $text)
  {
    $stmt = $this->dbh->prepare('CALL deleteStudent(?,?)');
    $stmt->bindParam(1, $student, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $text, PDO::PARAM_INT, 4000);
    $stmt->execute();
  }

  public function delete($procedure, $name)
  {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'(?)');
    $stmt->bindParam(1, $name, PDO::PARAM_INT, 4000);
    $stmt->execute();
  }

  public function updateGroup($group, $teacher, $num) {
    $stmt = $this->dbh->prepare('CALL updateGroup(?,?,?)');
    $stmt->bindParam(1, $teacher, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $group, PDO::PARAM_INT, 4000);
    $stmt->bindParam(3, $num, PDO::PARAM_INT, 4000);
    $stmt->execute();
  }

  public function updateDiscipline($id, $name, $semester, $lections, $practice, $lab_work, $exam, $offset, $homework, $course_work, $hours) {
    $stmt = $this->dbh->prepare('CALL updateDiscipline(?,?,?,?,?,?,?,?,?,?,?)');
    $stmt->bindParam(1, $id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $name, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $semester, PDO::PARAM_INT, 4000);
    $stmt->bindParam(4, $lections, PDO::PARAM_INT, 4000);
    $stmt->bindParam(5, $practice, PDO::PARAM_INT, 4000);
    $stmt->bindParam(6, $lab_work, PDO::PARAM_INT, 4000);
    $stmt->bindParam(7, $exam, PDO::PARAM_INT, 4000);
    $stmt->bindParam(8, $offset, PDO::PARAM_INT, 4000);
    $stmt->bindParam(9, $homework, PDO::PARAM_INT, 4000);
    $stmt->bindParam(10, $course_work, PDO::PARAM_INT, 4000);
    $stmt->bindParam(11, $hours, PDO::PARAM_INT, 4000);
    $stmt->execute();
  }

  public function updateTeacher($id, $surname, $name, $father_name, $category, $email, $phone, $login, $pass) {
    $stmt = $this->dbh->prepare('CALL updateTeacher(?,?,?,?,?,?,?,?,?)');
    $stmt->bindParam(1, $id, PDO::PARAM_STR, 4000);
    $stmt->bindParam(2, $surname, PDO::PARAM_STR, 4000);
    $stmt->bindParam(3, $name, PDO::PARAM_STR, 4000);
    $stmt->bindParam(4, $father_name, PDO::PARAM_STR, 4000);
    $stmt->bindParam(5, $category, PDO::PARAM_STR, 4000);
    $stmt->bindParam(6, $email, PDO::PARAM_STR, 4000);
    $stmt->bindParam(7, $phone, PDO::PARAM_STR, 4000);
    $stmt->bindParam(8, $login, PDO::PARAM_STR, 4000);
    $stmt->bindParam(9, $pass, PDO::PARAM_STR, 4000);
    $stmt->execute();
  }
}

$admin = new Admin('root','', 'localhost', 'journal');