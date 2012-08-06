<?php

/*
 * Author: Jonathan Fernandez
 * Date: 14/04/2012
 * Description: Formulario que muestra el estado de las reparaciones de los vehiculos ingresados en el sistema.
 * V:1.0
 * Vars:
 * 
 */
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
        dojo.require("dijit.TitlePane");
</script>

<TITLE>Estado Reparaci&oacute;n Vehiculo</TITLE>
</HEAD>
<body class="claro">
        <br>
        <div id="filtMant" dojoType="dijit.TitlePane" title="Filtro Vehiculos en Mantenci&oacute;n" open="true" splitter="true"  style="width:95%;margin-left: auto;margin-right: auto">
            <div id="filter_vehic"></div>
            <div id="btn" ></div>
        </div>
        <br>
        <div id="grid_vehic"></div>
    <script type="text/javascript" src="../js/mov_estado_reparaciones.js"></script>
</body>
</HTML>