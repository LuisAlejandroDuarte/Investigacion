<?php
  set_time_limit(0);
  require_once("database.php");  
  $data= json_decode(file_get_contents("php://input"),TRUE); 

  $Accion = $data['accion'];  
    
    if ($Accion=="login")
    {
        $SQL="SELECT i.inv_codi FROM sgi_user As u INNER JOIN sgi_inve As i on u.use_codi=i.inv_codi_usua WHERE u.USE_USUA = '" . $data['use_usua'] . "' AND u.USE_CLAV='" . $data['use_clav'] . "'";

        $execute = new  DataBase();
        $result= $execute->executeSql($SQL);
        
        echo json_encode($result);      
    }

    if ($Accion=='listTipoDocumento')
    {
      $SQL ="SELECT * from sgi_tipo_docu";
      $execute = new  DataBase();
        $result= $execute->executeSql($SQL);
        
        echo json_encode($result);      
    }

    if ($Accion=="GET")
    {
        $SQL="SELECT * FROM  sgi_inve   WHERE inv_codi = " . $data['INV_CODI'] ;

        $execute = new  DataBase();
        $result= $execute->executeSql($SQL);
        
        echo json_encode($result);      
    }

 ?>
