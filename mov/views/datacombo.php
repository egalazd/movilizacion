<?php
// session_start();

$dbconn = pg_connect("host=localhost dbname=movilizacion user=postgres password=postgres")
    or die('No se ha podido conectar: ' . pg_last_error());


$tabla=$_GET['tabla'];
$id=$_GET['id'];

$cols=trim(stripslashes($_GET['cols']),"'");
$cond=trim(stripslashes($_GET['cond']),"'");

$sql= 'SELECT '.$cols.' FROM "'.$tabla.'" ' ;

if($id<>NULL){
    $sql .= " WHERE id= ".$id ;

    if($cond<>NULL){
        $sql .= " AND ".$cond;
    }
}
else {

    if($cond<>NULL){
        $sql .= " WHERE ".$cond;
    }
}


$sql .= " ORDER BY nombre ASC ";
 // echo $sql."<br>";
$result = pg_query($sql) or die('La consulta fallo: ' . pg_last_error());


while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    $filas[]=$line;
}

if(empty($filas)){
    foreach ($cols as $key) {
      $filas["'".$key."'"]='';  
    }
}

$inicio= " identifier: 'id', label: 'nombre', items: ";
echo "{".$inicio."".json_encode($filas)."}";




?>
