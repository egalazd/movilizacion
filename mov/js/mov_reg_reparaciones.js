dojo.require("dijit.form.TextBox");
dojo.require("dijit.form.Textarea");
dojo.require("dijit.form.NumberTextBox");
dojo.require("dijit.form.DateTextBox");
dojo.require("dijit.form.TimeTextBox");
dojo.require("dojo.data.ItemFileReadStore");
dojo.require('dijit.form.FilteringSelect');
dojo.require("dojox.form.BusyButton");
dojo.require('dojox.layout.TableContainer');

var origen = document.getElementById('origen').value;

dojo.addOnLoad(function() {
      
   var id_vehiculo = new dijit.form.TextBox({
            id: "id_vehiculo",
            label: "Vehiculo",
            name: "id_vehiculo",
            style: "width:100px;",
            readOnly:true
    });
    
   var mantencion = new dijit.form.TextBox({
            id: "mantencion",
            label: "Mantencion",
            name: "mantencion",
            style: "width:200px;",
            readOnly:true
    });
    
    var tcReparacion = new dojox.layout.TableContainer({
        id: "tcReparacion",
        cols: 3,
        style: "width: 95%;margin-left:auto;margin-right:auto",
        customClass: "labelsAndValues","labelWidth": "150px"
    }, "apRepVeh"); 
    
    var tcidVehiculo = new dojox.layout.TableContainer({
        id: "tcidVehiculo",
        cols: 1,
        style: "width: 95%;margin-left:auto;margin-right:auto",
        customClass: "labelsAndValues"
    }, "id_vehiculo"); 
    
    var tcobservacion= new dojox.layout.TableContainer({
        id: "tcobservacion",
        cols: 1,
        style: "width: 95%;margin-left:auto;margin-right:auto",
        customClass: "labelsAndValues"
    }, "observacion"); 
    
    tcidVehiculo.addChild(id_vehiculo);
    if(origen=='M'){
        tcidVehiculo.addChild(mantencion);
    }
    tcidVehiculo.startup();
    
    var dateInVe = new dijit.form.DateTextBox({
        id: "dateIngVe",
        name: "dateIngVe",
        label:"Fecha Inicio",
        style: "width:150px;",
        constraints:{datePattern:'dd/MM/yyyy'},
        colspan:1,
        value: new Date()
    });
    
    var horaInVe = new dijit.form.TimeTextBox({
        id: "horaIngVe",
        name: "horaIngVe",
        label:"Hora",
        style: "width:150px;",
        constraints:{datePattern:'HH:mm'},
        colspan:2,
        value: new Date()
    });
    
   var km_vehiculo= new dijit.form.TextBox({
            id: "vehiculo",
            label: "KM",
            name: "vehiculo",
            style: "width:100px;"
    });
    
    // TODO :  Datos temporales solo para layout, cambiar una vez seteados en BD
    var dataVeh = {identifier: 'ID', label: 'GLOSA', items:[{"ID":1,"GLOSA":"Kaufman"},{"ID":2,"GLOSA":"Toyota"},{"ID":3,"GLOSA":"ByD"},{"ID":4,"GLOSA":"Automotora Alameda"}]};

    var provStore = new dojo.data.ItemFileReadStore({data:dataVeh});
    
    var proveedor = new dijit.form.FilteringSelect({
        store:provStore,
        searchAttr:"GLOSA",
        name: "proveedor",
        id: "proveedor",
        style: "width:150px;margin-right: auto;margin-left:auto",
        colspan:2
    });
    
    var factura= new dijit.form.TextBox({
            id: "factura",
            label: "Factura",
            name: "factura",
            style: "width:100px;"
    });

    var memo= new dijit.form.TextBox({
            id: "memo",
            label: "Memo",
            name: "memo",
            style: "width:100px;"
    });

    var oc= new dijit.form.TextBox({
            id: "oc",
            label: "OC",
            name: "oc",
            style: "width:100px;"
    });

    var reparacion= new dijit.form.Textarea({
            id: "reparacion",
            label: "Reparación",
            name: "reparacion",
            style: "width:80%;",
            colspan:3
    });
    
    var dateFinVe = new dijit.form.DateTextBox({
        id: "datefinVe",
        name: "datefinVe",
        label:"Fecha Fin",
        style: "width:150px;",
        constraints:{datePattern:'dd/MM/yyyy'},
        colspan:1,
        value: new Date()
    });
    
    var horaFinVe = new dijit.form.TimeTextBox({
        id: "horafinVe",
        name: "horafinVe",
        label:"Hora Fin",
        style: "width:150px;",
        constraints:{datePattern:'HH:mm'},
        colspan:2,
        value: new Date()
    });
    
var monto= new dijit.form.NumberTextBox({
        name: 'monto',
        id: 'monto',
        label: "Monto $",
        constraints:{
            pattern: "###.###.###"
        },
        style: "width: 100px"
    });
    
    tcReparacion.addChild(dateInVe);
    tcReparacion.addChild(horaInVe);
    tcReparacion.addChild(km_vehiculo);
    tcReparacion.addChild(proveedor);
    tcReparacion.addChild(factura);
    tcReparacion.addChild(memo);
    tcReparacion.addChild(oc);
    tcReparacion.addChild(reparacion);
    tcReparacion.addChild(dateFinVe);
    tcReparacion.addChild(horaFinVe);
    tcReparacion.addChild(monto);
    tcReparacion.startup();
    
    var observacion= new dijit.form.Textarea({
            id: "observacion",
            label: "Observación",
            name: "observacion",
            style: "width:95%;"
    });
    
    tcobservacion.addChild(observacion);
    tcobservacion.startup();
    
     var aplicaBtn = new dojox.form.BusyButton({
        id: "aplicaBtn",
        busyLabel: "Guardando datos",
        label: "Aplica",
        timeout: 500,
        style: "width:100px",
        onClick: function(){
            console.warn('onClick');
        }
    }, "btnAplica" );

    var noaplicaBtn = new dojox.form.BusyButton({
        id: "noaplicaBtn",
        busyLabel: "Guardando datos",
        label: "No Aplica",
        timeout: 500,
        style: "width:100px",
        onClick: function(){
            console.warn('onClick no aplica');
        }
    }, "btnNoaplica" );
    
        
        
});