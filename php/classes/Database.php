<?php
abstract class Db {
  protected $user;
  protected $password_db;
  protected $dbname;
  protected $host;
  protected $dbh;

  public function __construct($user, $password_db, $host,$dbname)
  {
    $this->user = $user;
    $this->password_db = $password_db;
    $this->host = $host;
    $this->dbname = $dbname;
    $this->dbh = new PDO('mysql:host='.$this->host.';dbname='.$this->dbname.';', $this->user, $this->password);
  }
}