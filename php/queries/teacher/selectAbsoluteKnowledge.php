<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");

require_once $_SERVER['DOCUMENT_ROOT'].'/php/classes/Teacher.php';


$data = json_decode(file_get_contents('php://input'), true);
if(strlen($data['lessonType']) === 0) {
  $lesson_type = 'lesson_type';
} else {
  $lesson_type = $data['lessonType'];
}

print json_encode($teacher->selectKnowledge('selectAbsoluteKnowledge', $data['startDate'], $data['endDate'],$data['discipline'], $data['group'], $lesson_type));