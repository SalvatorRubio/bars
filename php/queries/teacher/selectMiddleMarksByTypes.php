<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");

require_once $_SERVER['DOCUMENT_ROOT'].'/php/classes/Teacher.php';


$data = json_decode(file_get_contents('php://input'), true);

print json_encode($teacher->selectMiddleMarksByTypes($data['teacher'], $data['group'], $data['discipline'], $data['types']));