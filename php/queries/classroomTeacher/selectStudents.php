<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");

require_once $_SERVER['DOCUMENT_ROOT'].'/php/classes/ClassroomTeacher.php';

$data = json_decode(file_get_contents('php://input'), true);

print json_encode($classroom_teacher->select('selectStudentsForClassroomTeacher',$data['id']));