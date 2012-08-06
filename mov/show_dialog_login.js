dojo.require("dijit.form.ValidationTextBox");
dojo.require("dijit.form.Button");
dojo.require("dojox.layout.TableContainer");
dojo.addOnLoad(function() {
  dijit.byId("loginDialog").show();

  var login = new dojox.layout.TableContainer({
      id:"login",
      name:"login",
      cols:2,
      showLabels:true
  },"login");

  var usuario = new dijit.form.ValidationTextBox({
      id: "usuario",
      name: "usuario",
      required:true,
      colspan:2,
      label: "Usuario:",
      placeHolder: "Ingresar Rut"
  }, "usuario");    

  var clave = new dijit.form.ValidationTextBox({
      id: "clave",
      required:true,
      name: "clave",
      colspan:2,
      type: 'password',
      label: "clave:",
      placeHolder: "clave"
  }, "clave"); 

  var ingresar = new dijit.form.Button({
         id: "BtnIngresa",
         name: "BtnIngresa",
         label: "Ingresar",
         style: "width:100px",
         onClick: function(){
          var myForm  = dijit.byId("logear");
          var xhrArgs = {
              form: dojo.byId("logear"),
              handleAs: "text",
              url: "logear.php?tipo=admi",
              error: function(error) {
                  //console.warn('Error en generar ficha automatica');
              },
              load: function(data) {
                if(data=="admi"){
                    window.location='index_1.php';
                }else{
                    window.location='index.php';
                }
              }
          }

          if(myForm.validate()){
                      var deferred = dojo.xhrPost(xhrArgs);
          }
         }
     },'IngresarBtn');

  login.addChild(usuario);
  login.addChild(clave);
  login.startup();
});