<?php 
$origen=$_POST['origen'];

// Conectando y seleccionado la base de datos  
$dbconn = pg_connect("host=localhost dbname=movilizacion user=postgres password=postgres")
    or die('No se ha podido conectar: ' . pg_last_error());

//-----------DATOS RECIBIDOS-----------
$vehiculo 			=$_POST['vehiculo'];
$pauta_mantencion	=$_POST['pauta_mantencion'];
$dateIngVe			=$_POST['dateIngVe'];
$horaIngVe			=$_POST['horaIngVe'];
$km_vehiculo		=$_POST['km_vehiculo'];
$proveedor 			=$_POST['proveedor'];
$factura 			=$_POST['factura'];
$memo 				=$_POST['memo'];
$oc 				=$_POST['oc'];
$descripcion		=$_POST['descripcion'];
$datefinVe			=$_POST['datefinVe'];
$horafinVe			=$_POST['horafinVe'];
$monto				=$_POST['monto'];
$observacion		=$_POST['observacion'];

if (empty($factura)){$factura='null';}
if (empty($memo)){$memo='null';}
if (empty($oc)){$oc='null';}
if (empty($monto)){$monto='null';}



$fecha_registro=date('Y-m-d H:m:s');

switch ($origen) {
	case 'M':
		//----INGRESA UNA MANTENCION-------
		$query = 'INSERT INTO "Mantencion"(
				            vehiculo_id,pauta_id, fecha_hora, fecha_hora_ini, fecha_hora_fin, 
				            km, proveedor_id, factura, memo, oc,detalle , monto, observacion, 
				            estado, establecimiento_id, usuario_id)
				    VALUES ( \''.$vehiculo.'\','.$pauta_mantencion.', \''.$fecha_registro.'\',
				    		 \''.$dateIngVe.' '.$horaIngVe.'\', 
				    		\''.$datefinVe.' '.$horafinVe.'\', 
				            '.$km_vehiculo.', \''.$proveedor.'\', '.$factura.', '.$memo.',
				            '.$oc.',\''.$descripcion.'\','.$monto.',\''.$observacion.'\', 
				            1,104,\'1\');';
		break;
	case 'R':
		//----INGRESA UNA REPARACION-------
		$query = 'INSERT INTO "Reparacion"(
            				vehiculo_id, fecha_hora, fecha_hora_ini, fecha_hora_fin, 
            				km, proveedor_id, factura, memo, oc, detalle, monto, observacion, 
            				estado, establecimiento_id, usuario_id)
				    VALUES ( \''.$vehiculo.'\', \''.$fecha_registro.'\', 
				    		\''.$dateIngVe.' '.$horaIngVe.'\', 
				    		\''.$datefinVe.' '.$horafinVe.'\', 
				            '.$km_vehiculo.', \''.$proveedor.'\', '.$factura.', '.$memo.',
				             '.$oc.', \''.$descripcion.'\', '.$monto.', \''.$observacion.'\', 
				            1,104,\'1\');';
		break;
}
// Realizando una consulta SQL
// echo $query;
$result = pg_query($query) or die('La consulta fallo: ' . pg_last_error());
?>