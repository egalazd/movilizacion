<?php 
$vehiculo=$_GET['vehiculo'];

// Conectando y seleccionado la base de datos  
$dbconn = pg_connect("host=localhost dbname=movilizacion user=postgres password=postgres")
    or die('No se ha podido conectar: ' . pg_last_error());

// Realizando una consulta SQL
$query = 'select pa.id,pa.nombre from "PautaVehiculo" p,"Pauta" pa where pa.id=p.pauta_id and p.vehiculo_id=\''.$vehiculo.'\'';
// echo $query;
$result = pg_query($query) or die('La consulta fallo: ' . pg_last_error());


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