<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<style type="text/css">
			@import "static/dojo/resources/dojo.css";
			@import "static/dijit/themes/dijit.css";
			@import "static/dijit/themes/soria/soria.css";
		</style>
		<title>Sistema de Movilizacion</title>

		<script type="text/javascript" 
			src="static/dojo/dojo.js" djConfig="parseOnLoad:true">
		</script>
		<script type="text/javascript">
			dojo.require("dijit.Dialog");
			dojo.require("dojo.parser");
			dojo.require("dijit.layout.BorderContainer");
			dojo.require("dojox.layout.ContentPane");
            dojo.require("dijit.form.Form");
		</script>
	</head>

<body class="soria">
    
		<div dojoType="dijit.Dialog" id="loginDialog" style="display: none; width:400px; " 
					title="Ingreso al Sistema">
                    <div dojoType="dojox.layout.ContentPane">
                        <form dojoType="dijit.form.Form" id="logear" jsId="logear" encType="multipart/form-data" name="logear" method="post">
                                    <div id="login" ></div>
                        </form>
                                    <div id="IngresarBtn" ></div>
                    </div>
		</div>
    
</body>
    <script type="text/javascript" src="show_dialog_login.js"></script>
</html>