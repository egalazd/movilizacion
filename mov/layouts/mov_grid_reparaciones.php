<HTML dir="ltr">
<HEAD>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script type="text/javascript" src="../static/dojo/dojo.js" djConfig="parseOnLoad: true"></script>
        <style type="text/css">
            @import "../static/dojox/grid/resources/Grid.css";
            @import "../static/dijit/themes/claro/document.css";
            @import "../static/dojox/grid/resources/claroGrid.css";
            @import "../static/dojox/widget/Toaster/Toaster.css";
            @import "../static/dijit/themes/claro/claro.css";
            @import "../static/dojox/grid/enhanced/resources/claro/EnhancedGrid.css";
            @import "../static/dojox/grid/enhanced/resources/EnhancedGrid_rtl.css";
    </style>
     <link rel="STYLESHEET" type="text/css" href="movilizacion.css"/>
<script>
        dojo.require("dijit.TitlePane");
</script>

<TITLE>Reparaci&oacute;n Vehiculo</TITLE>
</HEAD>
<body class="claro">
        <br>
        <div id="filtMant" dojoType="dijit.TitlePane" title="Reparaci&oacute;n de Vehiculos" open="true" splitter="true"  style="width:95%;margin-left: auto;margin-right: auto">
            <div id="filter_vehic"></div>
        </div>
        <br>
        <div id="grid_vehic"></div>
        <!-- <button onclick='showFilterBar()'>Show Filter Bar</button> -->
        <div id="btn"></div>
    <script type="text/javascript" src="../js/mov_grid_reparaciones.js"></script>
</body>
</HTML>
