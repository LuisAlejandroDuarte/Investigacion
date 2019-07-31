<?php
define('DB_SERVER','localhost');
define('DB_NAME','grupogua_investigador');
define('DB_USER','grupogua_jmedicru');
define('DB_PASS','MbCj199803#');

function connect()
{
  $connect = mysqli_connect(DB_SERVER ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}


?>