<?php 

// Conectando y seleccionado la base de datos  
$dbconn = pg_connect("host=localhost dbname=movilizacion user=postgres password=postgres")
    or die('No se ha podido conectar: ' . pg_last_error());

// Realizando una consulta SQL
$query = 'select patente as id, patente as nombre from "Vehiculo"';
$result = pg_query($query) or die('La consulta fallo: ' . pg_last_error());

// Imprimiendo los resultados en HTML
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
		$filas[]=$line;
 }

$inicio= " identifier: 'id', items: ";
 	if(empty($filas)){
    		echo "{ identifier: 'id', nombre,items: []}";
     }else{
         echo "{".$inicio."".json_encode($filas)."}";
     }



// Liberando el conjunto de resultados
pg_free_result($result);

// Cerrando la conexión
pg_close($dbconn);

?>