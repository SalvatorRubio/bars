<?php
  header("Access-Control-Allow-Origin: http://localhost:3000");
  header("Access-Control-Allow-Headers: Content-Type");

  require_once $_SERVER['DOCUMENT_ROOT'].'/php/classes/Student.php';


  $data = json_decode(file_get_contents('php://input'), true);

  // $login = '';
  // $password = '';

  // if($data) {
  // $login = $data['login'];
  // $password = $data['password'];
  // }

  print json_encode($student->selectMarks(1, "2022-03-26", "2022-04-20"));