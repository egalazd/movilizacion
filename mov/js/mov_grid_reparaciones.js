dojo.require("dojo.data.ItemFileReadStore");
dojo.require('dijit.form.FilteringSelect');
dojo.require('dojox.layout.TableContainer');
dojo.require("dijit.form.DateTextBox");
dojo.require("dijit.form.Button");
dojo.require("dojox.grid.EnhancedGrid");
dojo.require("dojox.grid.enhanced.plugins.Filter");
dojo.require("dojox.grid.enhanced.plugins.Pagination");
dojo.require("dijit.form.Button");

function viewRegistro(id_registro){
    window.open("mov_registro.php?origen=R&tipo_vista=O&id_registro="+id_registro,target="medio","width=800,height=500,location=0,scrollbars=yes");
}

function makeCarroceria(url){
    //var id = estado.split("-");
    var carroceria = "<div dojoType=\"dijit.formButton\"><img src='../imagenes/"+url+"' style='width:30px;height:30px'/></div>";
    return carroceria;
    //return url;
}

function makeViewButton(id_registro){
    var viewButton = "<div dojoType=\"dijit.formButton\" title=\"Ver Registro.\"><img src=\"../imagenes/int_vista_on.png\" ";
        viewButton = viewButton + "onClick=\"viewRegistro("+id_registro+")\"></div>";
    return viewButton;
}

dojo.addOnLoad(function() {
    
    /* <----           TABLA filtra datos para busqueda --- > */
    var tcEstado= new dojox.layout.TableContainer({
        id: "tcEstado",
        cols: 4,
        style: "width: 95%;margin-left:auto;margin-right:auto",
        customClass: "labelsAndValues","labelWidth": "150px"
    }, "filter_vehic"); 

    var tcBuscar= new dojox.layout.TableContainer({
        id: "tcBuscar",
        cols: 1,
        showLabels:false,
        style: "width: 95%;margin-left:auto;margin-right:auto",
    }); 
    
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
    
     var dataProv = {identifier: 'ID', label: 'GLOSA', items:[{"ID":1,"GLOSA":"Kaufman"},{"ID":2,"GLOSA":"Toyota"},{"ID":3,"GLOSA":"ByD"},{"ID":4,"GLOSA":"Automotora Alameda"}]};

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

    var BuscarBtn = new dijit.form.Button({
        id: "BuscarBtn",
        name: "BuscarBtn",
        iconClass: "dijitCommonIcon dijitIconSearch",
        label: "Buscar",
        onClick:function(){
            console.warn("alo¿?");
            }
        });

    tcBuscar.addChild(BuscarBtn);
    tcBuscar.startup();
    tcEstado.addChild(vehiculos);
    tcEstado.addChild(dateDesVe);
    tcEstado.addChild(dateHasVe);
    tcEstado.addChild(tcBuscar);
    tcEstado.addChild(estado);
    tcEstado.addChild(proveedor);
    tcEstado.startup();
    
        var addBtn = new dijit.form.Button({
        id: "addBtn",
        label: "Nueva Reparacion",
        iconClass: "add",
        style: "position:absolute;padding-top:50px;left:86%",
        onClick:function(){
                window.open("mov_registro.php?origen=R",target="medio","width=800,height=500,location=0,scrollbars=yes");
            }
        },"btn");
    /* ---------------------------   ------------------------------ */
    /* ----------Grilla de datos filtrados------------------------------ */

    var reparacionesStore = new dojo.data.ItemFileReadStore({
        url: "../views/datagrid_reparacion.php"
    });

    var listLayout = [
        {field: 'fecha_hora',              name: 'Fecha',        width: '5%',datatype:"string"},
        {field: 'vehiculo_id',              name: 'Vehiculo',        width: '5%',datatype:"string",
            autoComplete: true
        },
        {field: 'imagen',         name: 'Carr',       width: '3%',formatter:makeCarroceria},
        //{field: 'carro',         name: 'Carr',       width: '5%',datatype:"string",
        //     autoComplete:true
        // },
        {field: 'km',         name: 'Km',       width: '5%',datatype:"number"},
        {field: 'fecha_hora_ini',       name: 'F. Inicio',        width: '5%',datatype:"date",
            dataTypeArgs: {
                datePattern: "d-M-yyyy"
            }
        },
        {field: 'fecha_hora_fin',        name: 'F. Termino',       width: '5%',datatype:"date",
            dataTypeArgs: {
                datePattern: "d-M-yyyy"
            }
        },
        {field: 'monto',        name: 'Monto',       width: '5%',datatype:"number"},
        {field: 'factura',        name: 'Factura',       width: '3%',datatype:"number",
            autoComplete: true,
            dataTypeArgs: {
                autoComplete: false
            }
        },
        {field: 'proveedor',        name: 'Proveedor',       width: '8%',datatype:"string",
            autoComplete: true
        },
        {field: 'estado',        name: 'Estado',       width: '3%'},
        {field: 'id',        name: 'Ver',       width: '3%', formatter:makeViewButton},
        {field: 'username',        name: 'Usuario',       width: '5%',datatype:"string",
            autoComplete: true
        }
    ];
    
    
    var vehGrid = new dojox.grid.EnhancedGrid({
        id :"vehGrid",
        name: "vehGrid",
        structure: listLayout,
        store: reparacionesStore,
        plugins: {
            filter: {
                // Show the closeFilterbarButton at the filter bar
                closeFilterbarButton: true,
                // Set the maximum rule count to 5
                ruleCount: 5,
                // Set the name of the items
                itemsName: "Reparaciones"
            },
            pagination: {
              pageSizes: ["25", "50", "100", "All"],
              description: true,
              sizeSwitch: true,
              pageStepper: true,
              gotoButton: true,
                      /*page step to be displayed*/
              maxPageStep: 4,
                      /*position of the pagination bar*/
              position: "bottom"
          }
        },
        style:"width:90%; height:300px; margin-left: auto;margin-right: auto; top:20px",
        noDataMessage:"<span class=\"dojoxGridNoData\">No hay Datos</span>",
        loadingMessage:'Cargando datos. Por favor espere.',
        errorMessage:'Error en listado'
    }, "grid_vehic");

     vehGrid.startup();
    
});


