<?php
  set_time_limit(0);
  require_once("../database.php");  
  $data= json_decode(file_get_contents("php://input"),TRUE); 

  $Accion = $data['accion'];  

    if ($Accion=='listPrograma')
    {
      $SQL ="SELECT * from sgi_prog_acad";
      $execute = new  DataBase();
      $result= $execute->executeSql($SQL);        
      echo json_encode($result);      
    }
 ?>