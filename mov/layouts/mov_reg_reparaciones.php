<?php
$origen = $_GET['origen'];
$origen = 'M';
?>
<HTML dir="ltr">
<HEAD>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script type="text/javascript" src="../../static/dojo/dojo.js" djConfig="parseOnLoad: true"></script>
    <link rel="stylesheet" type="text/css" href="../../static/dijit/themes/claro/claro.css"/>
        <style type="text/css">
            @import "../../static/dojox/grid/resources/Grid.css";
            @import "../../static/dijit/themes/claro/document.css";
            @import "../../static/dojox/grid/resources/claroGrid.css";
            @import "../../static/dojox/widget/Toaster/Toaster.css";
    </style>
    <link rel="STYLESHEET" type="text/css" href="movilizacion.css"/>
<script>
        dojo.require("dijit.form.Form");
        dojo.require("dijit.TitlePane");
</script>

<TITLE>Registro Reparaci&oacute;n Vehiculo</TITLE>
</HEAD>
<body class="claro">
    <input id="origen" type="hidden" value="<?php echo $origen;?>"/>
    <FORM dojoType="dijit.form.Form" id="formregReparacion" jsId="formregReparacion" encType="multipart/form-data" name="formregReparacion"  method="post" region="center">
        <br>
        <div id="id_vehiculo"></div><br>
        <div id="apReparacion" dojoType="dijit.TitlePane" title="Aplicación Reparación" open="true" splitter="true"  style="width:95%;margin-left: auto;margin-right: auto">
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
        
    <script type="text/javascript" src="../js/mov_reg_reparaciones.js"></script>
</body>
</HTML>