/*Author:Jonathan Fernandez
 *   Date:14/04/2012
 *   Description: Widgets de la página mov_estado_reparaciones.php
 *   V:1.0
 *   Vars:  */

dojo.require("dojo.data.ItemFileReadStore");
dojo.require('dijit.form.FilteringSelect');
dojo.require('dojox.layout.TableContainer');
dojo.require("dijit.form.DateTextBox");
dojo.require("dijit.form.Button");
dojo.require("dojox.grid.EnhancedGrid");

dojo.addOnLoad(function() {
    
    /* <----           TABLA filtra datos para busqueda --- > */
    var tcEstado= new dojox.layout.TableContainer({
        id: "tcEstado",
        cols: 5,
        style: "width: 95%;margin-left:auto;margin-right:auto",
        customClass: "labelsAndValues","labelWidth": "150px"
    }, "filter_vehic"); 
    
     var dataVeh = {identifier: 'ID', label: 'GLOSA', items:[{"ID":1,"GLOSA":"BZ 4556"},{"ID":2,"GLOSA":"CC 3233"},{"ID":3,"GLOSA":"AR 3322"},{"ID":4,"GLOSA":"UT 3366"}]};

    var vehStore = new dojo.data.ItemFileReadStore({
        url:"../views/dataVehiculos.php"
    });
    
    var vehiculos= new dijit.form.FilteringSelect({
        store:vehStore,
        searchAttr:"nombre",
        name: "vehiculo",
        id: "vehiculos",
        label: "Vehiculo",
        style: "width:150px;margin-right: auto;margin-left:auto",
        colspan:1
    });
    
     var estadoVeh = {identifier: 'ID', label: 'GLOSA', items:[{"ID":1,"GLOSA":"Pendiente"},{"ID":2,"GLOSA":"Aplicado"},{"ID":3,"GLOSA":"Aplicando"},{"ID":4,"GLOSA":"No Aplicado"}]};

    var estadoStore = new dojo.data.ItemFileReadStore({data:estadoVeh});
    
    var estado= new dijit.form.FilteringSelect({
        store:estadoStore,
        searchAttr:"GLOSA",
        name: "estado",
        id: "estado",
        label: "Estado",
        style: "width:150px;margin-right: auto;margin-left:auto",
        colspan:1
    });
    
     var dateDesVe = new dijit.form.DateTextBox({
        id: "dateDesVe",
        name: "dateDesVe",
        label:"Desde",
        style: "width:150px;",
        onChange: function(){
            dijit.byId('dateHasVe').constraints.min = arguments[0];
        },
        constraints:{datePattern:'dd/MM/yyyy'},
        colspan:1,
        value: new Date()
    });

    var dateHasVe = new dijit.form.DateTextBox({
        id: "dateHasVe",
        name: "dateHasVe",
        label:"Hasta",
        style: "width:150px;",
        onChange: function(){
            dijit.byId('dateDesVe').constraints.max = arguments[0];
        },
        constraints:{datePattern:'dd/MM/yyyy'},
        colspan:1,
        value: new Date()
    });
    
    tcEstado.addChild(vehiculos);
    tcEstado.addChild(estado);
    tcEstado.addChild(dateDesVe);
    tcEstado.addChild(dateHasVe);
    tcEstado.startup();
    
        var buscarBtn = new dijit.form.Button({
        id: "buscarBtn",
        label: "Buscar",
        style: "position:absolute;top:46px;left:90%",
        onClick:function(){
            console.warn("alo¿?");
            }
        },"btn");
    /* ---------------------------   ------------------------------ */
    /* ----------Grilla de datos filtrados------------------------------ */
            var listLayout = [
        {field: 'FECHA',              name: 'FECHA',        width: '5%'},
        {field: 'VEHICULO',              name: 'VEHICULO',        width: '8%'},
        {field: 'PAUTA_MANTENCION',       name: 'PAUTA MANTENCION',        width: '5%'},
        {field: 'KM',       name: 'KM',        width: '5%'},
        {field: 'FECHA_MANT',         name: 'FECHA MANTENCION',       width: '7%'},
        {field: 'KM_EJE',        name: 'KM EJE',       width: '5%'},
        {field: 'MONTO',        name: 'MONTO',       width: '5%'},
        {field: 'DOCUMENTO',        name: 'DOCUMENTO',       width: '5%'},
        {field: 'ESTADO',        name: 'ESTADO',       width: '5%'},
    ];
    
    
    var vehGrid = new dojox.grid.EnhancedGrid({
        id :"vehGrid",
        structure: listLayout,
        style:"width:90%; height:320px; margin-left: auto;margin-right: auto; top:20px",
        noDataMessage:"<span class=\"dojoxGridNoData\">No hay Datos</span>",
        loadingMessage:'Cargando datos. Por favor espere.',
        errorMessage:'No existen datos para esta busqueda.'
    }, "grid_vehic");

     vehGrid.startup();
    
});