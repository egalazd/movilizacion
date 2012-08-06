<?php
$origen = $_GET['origen'];
$tipo_vista= $_GET['tipo_vista'];
$id_registro=$_GET['id_registro'];
// $origen = 'M';
if($origen=='M'){
    $title="Mantenci&oacute;n";
}else{
    $title="Reparaci&oacute;n";
}

?>
<HTML dir="ltr">
<HEAD>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script type="text/javascript" src="../static/dojo/dojo.js" djConfig="parseOnLoad: true"></script>
    <link rel="stylesheet" type="text/css" href="../static/dijit/themes/claro/claro.css"/>
        <style type="text/css">
            @import "../static/dojox/grid/resources/Grid.css";
            @import "../static/dijit/themes/claro/document.css";
            @import "../static/dojox/grid/resources/claroGrid.css";
            @import "../static/dojox/widget/Toaster/Toaster.css";
    </style>
    <link rel="STYLESHEET" type="text/css" href="movilizacion.css"/>
<script>
        dojo.require("dijit.form.Form");
        dojo.require("dijit.TitlePane");
</script>

<TITLE>Registro <?php echo $title;?> Vehiculo</TITLE>
</HEAD>
<body class="claro">
    <input id="origen" type="hidden" value="<?php echo $origen;?>"/>
    <input id="tipo_vista" type="hidden" value="<?php echo $tipo_vista;?>"/>
    <input id="id_registro" type="hidden" value="<?php echo $id_registro;?>"/>
    <FORM dojoType="dijit.form.Form" id="formRegistro" jsId="formRegistro" encType="multipart/form-data" name="formRegistro"  method="post" region="center">
        <br>
        <div id="id_vehiculo"></div><br>
        <div id="apReparacion" dojoType="dijit.TitlePane" title="Aplicación <?php echo $title;?>" open="true" splitter="true"  style="width:95%;margin-left: auto;margin-right: auto">
            <div id="apRepVeh"></div>
        </div>
        <br>
        <div id="observacion"></div>
        <div id="centerEnviarBtn" class="centerBtn" style="width: 30%">
            <br>
                <div id="btnAplica"></div><div id="btnNoaplica"></div>
                <div id="response" class="respuesta"></div>
        </div>                            
    </FORM> 
        
    <script type="text/javascript" src="../js/mov_registro.js"></script>
</body>
</HTML>