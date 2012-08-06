dojo.require("dijit.form.TextBox");
dojo.require("dijit.form.Textarea");
dojo.require("dijit.form.NumberTextBox");
dojo.require("dijit.form.DateTextBox");
dojo.require("dijit.form.TimeTextBox");
dojo.require("dojo.data.ItemFileReadStore");
dojo.require('dijit.form.FilteringSelect');
dojo.require("dojox.form.BusyButton");
dojo.require('dojox.layout.TableContainer');

//---ORIGEN REPRESENTA SI VIENE PARA REPARACION O MANTENCION
var origen = document.getElementById('origen').value;
var tipo_vista = document.getElementById('tipo_vista').value;
var id_registro = document.getElementById('id_registro').value;
var readonly=false;

if(tipo_vista=='O'){
    readonly=true;
}

function saveRegistro() {
    // Graba detalle de la orde de examen
        var myForm = dijit.byId("formRegistro");
        var xhrArgs = {
            form: dojo.byId("formRegistro"),
            content: {'origen':origen},
            handleAs: "text",
            url: "../layouts/mov_save_registro.php",
            error: function(error) {
                // dojo.publish("respUrgAdmMessage",[{message:"No se pudo guardar el formulario."+error, type: 'error'}]);
            },
            load: function(data) {
                //obtengo el correlativo del registro de admisión a urgencias.
                // if(data>0){
                //     dijit.byId("urgadmcorre").set('value',data);
                //     dojo.publish("respUrgAdmMessage",[{message:"Los datos fueron Guardados", type: "message"}]);
                // }else if(data==""){
                //     dojo.publish("respUrgAdmMessage",[{message:"Se a producido un error!", type: "error"}]);
                // }


            }
        }

        if(myForm.validate()){
            //Llamada al xhrPost asincrono
            console.warn('guardando');
            var deferred = dojo.xhrPost(xhrArgs);
        }
}

dojo.addOnLoad(function() {
    
    var registroStore = new dojo.data.ItemFileReadStore({
        url: "../views/dataform_registro.php?origen=R&id_registro="+id_registro
    });

    registroStore.fetch({
        onItem: function(item) {
            dijit.byId('vehiculo').set('value',registroStore.getValue(item,"vehiculo_id"));
            dijit.byId('km_vehiculo').set('value',registroStore.getValue(item,"km"));
            dijit.byId('proveedor').set('value',registroStore.getValue(item,"proveedor_id"));
            dijit.byId('factura').set('value',registroStore.getValue(item,"factura"));
            dijit.byId('memo').set('value',registroStore.getValue(item,"memo"));
            dijit.byId('oc').set('value',registroStore.getValue(item,"oc"));
            dijit.byId('descripcion').set('value',registroStore.getValue(item,"detalle"));
            dijit.byId('monto').set('value',registroStore.getValue(item,"monto"));
            dijit.byId('observacion').set('value',registroStore.getValue(item,"observacion"));
        }
    });


    var vehiculoStore = new dojo.data.ItemFileReadStore({
        url: "../views/datacombo.php?tabla=Vehiculo&cols=patente as ID,patente || '-' || dv as NOMBRE"
    });
    
    var id_vehiculo = new dijit.form.FilteringSelect({
        store:vehiculoStore,
        searchAttr:"nombre",
        name: "vehiculo",
        id: "vehiculo",
        require:true,
        readOnly: readonly,
        label: 'Vehiculo',
        style: "width:150px;margin-right: auto;margin-left:auto",
        colspan:2,
        onChange: function(valor){
            console.warn('valor'+valor);
            var newManStore = new dojo.data.ItemFileReadStore({
                url: "../views/datacombo_pautasvehiculo.php?vehiculo="+valor
            });        

            dijit.byId(pauta_mantencion).set('store',newManStore);
        }
    });

    
    var mantencionStore = new dojo.data.ItemFileReadStore({
        url:''
    });
    
    var pauta_mantencion = new dijit.form.FilteringSelect({
        store:mantencionStore,
        searchAttr:"nombre",
        name: "pauta_mantencion",
        id: "pauta_mantencion",
        require: true,
        readOnly: readonly,
        label: 'Pauta Mantencion',
        style: "width:150px;margin-right: auto;margin-left:auto",
        colspan:2
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
         tcidVehiculo.addChild(pauta_mantencion);
    }
    tcidVehiculo.startup();
    
    var dateInVe = new dijit.form.DateTextBox({
        id: "dateIngVe",
        name: "dateIngVe",
        require:true,
        label:"Fecha Inicio",
        readOnly: readonly,
        style: "width:150px;",
        constraints:{datePattern:'dd/MM/yyyy'},
        colspan:1,
        value: new Date()
    });
    
    var horaInVe = new dijit.form.TimeTextBox({
        id: "horaIngVe",
        name: "horaIngVe",
        label:"Hora",
        require: true,
        readOnly: readonly,
        style: "width:150px;",
        constraints:{datePattern:'HH:mm'},
        colspan:2,
        value: new Date()
    });
    
   var km_vehiculo= new dijit.form.NumberTextBox({
            id: "km_vehiculo",
            label: "KM",
            readOnly: readonly,
            require: true,
            name: "km_vehiculo",
            style: "width:100px;"
    });
    
    // TODO :  Datos temporales solo para layout, cambiar una vez seteados en BD
    var provStore = new dojo.data.ItemFileReadStore({
        url: "../views/datacombo.php?tabla=Proveedor&cols=rut_proveedor as ID,nombre"
    });
    
    var proveedor = new dijit.form.FilteringSelect({
        store:provStore,
        searchAttr:"nombre",
        name: "proveedor",
        id: "proveedor",
        require: true,
        readOnly: readonly,
        label: 'Proveedor',
        style: "width:250px;margin-right: auto;margin-left:auto",
        colspan:2
    });
    
    var factura= new dijit.form.TextBox({
            id: "factura",
            label: "Factura",
            name: "factura",
            readOnly: readonly,
            style: "width:100px;"
    });

    var memo= new dijit.form.TextBox({
            id: "memo",
            label: "Memo",
            name: "memo",
            readOnly: readonly,
            style: "width:100px;"
    });

    var oc= new dijit.form.TextBox({
            id: "oc",
            label: "OC",
            name: "oc",
            readOnly: readonly,
            style: "width:100px;"
    });

    var descripcion= new dijit.form.Textarea({
            id: "descripcion",
            label: "Descripcion",
            name: "descripcion",
            style: "width:80%;",
            readOnly: readonly,
            colspan:3
    });
    
    var dateFinVe = new dijit.form.DateTextBox({
        id: "datefinVe",
        name: "datefinVe",
        label:"Fecha Fin",
        require: true,
        readOnly: readonly,
        style: "width:150px;",
        constraints:{datePattern:'dd/MM/yyyy'},
        colspan:1,
        value: new Date()
    });
    
    var horaFinVe = new dijit.form.TimeTextBox({
        id: "horafinVe",
        name: "horafinVe",
        label:"Hora Fin",
        require: true,
        readOnly: readonly,
        style: "width:150px;",
        constraints:{datePattern:'HH:mm'},
        colspan:2,
        value: new Date()
    });
    
var monto= new dijit.form.NumberTextBox({
        name: 'monto',
        id: 'monto',
        readOnly: readonly,
        label: "Monto $",
        // constraints:{
        //     pattern: "###.###.###"
        // },
        style: "width: 100px"
    });
    
    tcReparacion.addChild(dateInVe);
    tcReparacion.addChild(horaInVe);
    tcReparacion.addChild(km_vehiculo);
    tcReparacion.addChild(proveedor);
    tcReparacion.addChild(factura);
    tcReparacion.addChild(memo);
    tcReparacion.addChild(oc);
    tcReparacion.addChild(descripcion);
    tcReparacion.addChild(dateFinVe);
    tcReparacion.addChild(horaFinVe);
    tcReparacion.addChild(monto);
    tcReparacion.startup();
    
    var observacion= new dijit.form.Textarea({
            id: "observacion",
            label: "Observación",
            name: "observacion",
            readOnly: readonly,
            style: "width:95%;"
    });
    
    tcobservacion.addChild(observacion);
    tcobservacion.startup();
    
     var aplicaBtn = new dojox.form.BusyButton({
        id: "aplicaBtn",
        busyLabel: "Guardando datos",
        label: "Aplica",
        timeout: 500,
        disabled: readonly,
        iconClass: "dijitCommonIcon dijitIconSave",
        style: "width:100px",
        onClick: function(){
            saveRegistro();
        }
    }, "btnAplica" );

    var noaplicaBtn = new dojox.form.BusyButton({
        id: "noaplicaBtn",
        busyLabel: "Guardando datos",
        label: "No Aplica",
        timeout: 500,
        disabled: readonly,
        style: "width:100px",
        onClick: function(){
            console.warn('onClick no aplica');
        }
    }, "btnNoaplica" );
    
        
        
});