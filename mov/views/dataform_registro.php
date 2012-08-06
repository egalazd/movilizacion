<?php 

// Conectando y seleccionado la base de datos  
$dbconn = pg_connect("host=localhost dbname=movilizacion user=postgres password=postgres")
    or die('No se ha podido conectar: ' . pg_last_error());

$id_registro=$_GET['id_registro'];

// Realizando una consulta SQL
$query = 'SELECT r.id,r.vehiculo_id, r.fecha_hora, 
                  r.fecha_hora_ini,   r.fecha_hora_fin, 
                  r.km, r.proveedor_id, r.factura, r.memo, r.oc, 
                  r.detalle, r.monto, r.observacion, r.estado, r.usuario_id
          FROM  "Reparacion" r
          WHERE r.id='.$id_registro;
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

$inicio= " identifier: 'id',label:'vehiculo_id', items: ";
echo "{".$inicio."".json_encode($filas)."}";

?>