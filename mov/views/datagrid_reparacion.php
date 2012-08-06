<?php 

// Conectando y seleccionado la base de datos  
$dbconn = pg_connect("host=localhost dbname=movilizacion user=postgres password=postgres")
    or die('No se ha podido conectar: ' . pg_last_error());

// Realizando una consulta SQL
$query = 'SELECT r.id,r.fecha_hora,r.vehiculo_id,c.imagen,c.nombre as carro,r.km
				,r.fecha_hora_ini,r.fecha_hora_fin, r.monto, r.factura,p.nombre as proveedor, 
				r.estado,
       			u.username     
 				FROM "Reparacion" r,auth_user u, "Proveedor" p, "Vehiculo" v , "Carroceria" c
				WHERE u.id=r.usuario_id and p.rut_proveedor=r.proveedor_id and c.id=v.tipo_carroceria_id  
				and v.patente=r.vehiculo_id order by r.id desc';
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