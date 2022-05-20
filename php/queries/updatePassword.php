<?php
  header("Access-Control-Allow-Origin: http://localhost:3000");
  header("Access-Control-Allow-Headers: Content-Type");

  require_once $_SERVER['DOCUMENT_ROOT'].'/php/classes/Student.php';


  $data = json_decode(file_get_contents('php://input'), true);

  $table = '';
  if($data['role'] == 1) {
    $table = 'admin';
  } elseif ($data['role'] == 2) {
    $table = 'teacher';
  } elseif ($data['role'] == 3) {
    $table = 'student';
  } elseif ($data['role'] == 4) {
    $table = 'teacher';
  }

  print json_encode($student->updatePassword($table, $data['newPassword'], $data['id'], $data['oldPassword']));