<?php
require_once './User.php';

class Admin extends User {
  // СДЕЛАТЬ ПРОВЕРКУ НА КОЛИЧЕСТВО ЧАСОВ УРОКА, ЕСЛИ СУММА ЧАСОВ МЕНЬШЕ ОБЩЕГО КОЛИЧЕСТВА ТО УРОКИ НЕ ДОБАВЛЯЮТСЯ
  // СДЕЛАТЬ УДАЛЕНИЕ ЧЕГО?
  // УЧИТЕЛЕЙ ОСТАВЛЯТЬ, ЕСЛИ УВОЛИЛИСЬ?
  // СДЕЛАТЬ МЕТОДЫ ОБНОВЛЕНИЯ КУРСА И ОТЧИСЛЕНИЯ СТУДЕНТА
  // ПОМЕНЯТЬ ТИП КУРСА И НАЗВАНИЕ EDU_YEAR

  //ВЫВОД УЧИТЕЛЕЙ, СТУДЕНТОВ и прочее.
  // Нужно ли выводить учеников, если только для удаления или перевода?
  public function select($procedure)
  {
    $stmt = $this->dbh->prepare('CALL'.$procedure.'()');
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  // ЗАПИСАТЬ ДАННЫЕ В ТАБЛИЦЫ УЧИТЕЛЬ, УЧЕНИК И ПРОЧЕЕ
  public function insert($procedure, $string)
  {
    $stmt = $this->dbh->prepare('CALL'.$procedure.'(?)');
    $stmt->bindParam(1, $string, PDO::PARAM_STR, 4000);
    $stmt->execute();
  }

  // Получение данных из таблицы teacher_group_dics для записи урока
  public function selectTeachGroupDisc($teacher, $discipline, $group)
  {
    $stmt = $this->dbh->prepare('CALL selectTeachGroupDisc(?,?,?)');
    $stmt->bindParam(1, $teacher, PDO::PARAM_INT, 4000);
    $stmt->bindParam(2, $discipline, PDO::PARAM_INT, 4000);
    $stmt->bindParam(3, $group, PDO::PARAM_INT, 4000);
    $stmt->execute();
    $query = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $query;
  }

  // УДАЛЕНИЕ ДАННЫХ
  public function delete($procedure, $name)
  {
    $stmt = $this->dbh->prepare('CALL '.$procedure.'(?)');
    $stmt->bindParam(1, $name, PDO::PARAM_INT, 4000);
    $stmt->execute();
  }
}

$admin = new Admin('root','', 'localhost', 'journal');