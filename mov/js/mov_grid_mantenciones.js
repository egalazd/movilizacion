dojo.require("dojo.data.ItemFileReadStore");
dojo.require('dijit.form.FilteringSelect');
dojo.require('dojox.layout.TableContainer');
dojo.require("dijit.form.DateTextBox");
dojo.require("dijit.form.Button");
dojo.require("dojox.grid.EnhancedGrid");
dojo.require("dojox.grid.enhanced.plugins.Filter");

function newMantencion(){

}



dojo.addOnLoad(function() {
    
    /* <----           TABLA filtra datos para busqueda --- > */
    var tcEstado= new dojox.layout.TableContainer({
        id: "tcEstado",
        cols: 3,
        style: "width: 95%;margin-left:auto;margin-right:auto",
        customClass: "labelsAndValues","labelWidth": "150px"
    }, "filter_vehic"); 
    
     var dataVeh = {identifier: 'ID', label: 'GLOSA', items:[{"ID":1,"GLOSA":"BZ 4556"},{"ID":2,"GLOSA":"CC 3233"},{"ID":3,"GLOSA":"AR 3322"},{"ID":4,"GLOSA":"UT 3366"}]};

    var vehStore = new dojo.data.ItemFileReadStore({data:dataVeh});
    
    var vehiculos= new dijit.form.FilteringSelect({
        store:vehStore,
        searchAttr:"GLOSA",
        name: "vehiculo",
        id: "vehiculos",
        label: "Vehiculo",
        style: "width:150px;margin-right: auto;margin-left:auto",
        colspan:1
    });
    
     var estadoVeh = {identifier: 'ID', label: 'GLOSA', items:[{"ID":1,"GLOSA":"Aplicado"},{"ID":2,"GLOSA":"Aplicando"}]};

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
    
     var dataProv = {identifier: 'ID', label: 'GLOSA', 
                items:[{"ID":1,"GLOSA":"Kaufman"},{"ID":2,"GLOSA":"Toyota"},{"ID":3,"GLOSA":"ByD"},{"ID":4,"GLOSA":"Automotora Alameda"}]};

    var provStore = new dojo.data.ItemFileReadStore({data:dataProv});
    
    var proveedor = new dijit.form.FilteringSelect({
        store:provStore,
        searchAttr:"GLOSA",
        name: "proveedor",
        id: "proveedor",
        label: "Proveedor",
        style: "width:150px;margin-right: auto;margin-left:auto",
        colspan:2
    });
    
    tcEstado.addChild(vehiculos);
    tcEstado.addChild(dateDesVe);
    tcEstado.addChild(dateHasVe);
    tcEstado.addChild(estado);
    tcEstado.addChild(proveedor);
    tcEstado.startup();
    
        var addBtn = new dijit.form.Button({
        id: "addBtn",
        label: "Nueva Mantencion",
        iconClass:"add",
        style: "position:absolute;top:46px;left:86%",
        onClick:function(){
                newMantencion();
            }
        },"btn");
    /* ---------------------------   ------------------------------ */
    /* ----------Grilla de datos filtrados------------------------------ */
            var listLayout = [
        {field: 'FECHA',              name: 'Fecha',        width: '5%'},
        {field: 'VEHICULO',              name: 'Vehiculo',        width: '8%'},
        {field: 'PAUTA',       name: 'Pauta',        width: '5%'},
        {field: 'KM',         name: 'Km',       width: '7%'},
        {field: 'INICIO',       name: 'F. Inicio',        width: '5%'},
        {field: 'TERMINO', name: 'F. Termino',width: '5%'},
        {field: 'MONTO',        name: 'Monto',       width: '5%'},
        {field: 'DOCUMENTO',        name: 'Documento',       width: '5%'},
        {field: 'ESTADO',        name: 'Estado',       width: '5%'},
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


