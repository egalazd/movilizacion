<!DOCTYPE html>
<html >
<head>

    <link rel="stylesheet" href="../static/dijit/themes/claro/claro.css">
    <style type="text/css">@import "../static/dojo/resources/dojo.css";
@import "../static/dijit/themes/claro/claro.css";
@import "../static/dijit/themes/claro/document.css";
@import "../static/dojox/grid/enhanced/resources/claro/EnhancedGrid.css";
@import "../static/dojox/grid/enhanced/resources/EnhancedGrid_rtl.css";</style>
<script src='../static/dojo/dojo.js' data-dojo-config='parseOnLoad: true'></script><script>dojo.require("dojo.data.ItemFileWriteStore");
dojo.require("dojox.grid.EnhancedGrid");
dojo.require("dojox.grid.enhanced.plugins.Filter");

var data = {
    identifier: 'id',
    label: 'id',
    items: []
};
var data_list = [
    {"Heard": true, "Checked": "True", "Genre":"Easy Listening", "Artist":"Bette Midler", "Year":2003, "Album":"Bette Midler Sings the Rosemary Clooney Songbook", "Name":"Hey There", "Length":"03:31", "Track":4, "Composer":"Ross, Jerry 1926-1956 -w Adler, Richard 1921-", "Download Date":"1923/4/9", "Last Played":"04:32:49"},
    {"Heard": true, "Checked": "True", "Genre":"Classic Rock", "Artist":"Jimi Hendrix", "Year":1993, "Album":"Are You Experienced", "Name":"Love Or Confusion", "Length":"03:15", "Track":4, "Composer":"Jimi Hendrix", "Download Date":"1947/12/6", "Last Played":"03:47:49"},
    {"Heard": true, "Checked": "True", "Genre":"Jazz", "Artist":"Andy Narell", "Year":1992, "Album":"Down the Road", "Name":"Sugar Street", "Length":"07:00", "Track":8, "Composer":"Andy Narell", "Download Date":"1906/3/22", "Last Played":"21:56:15"},
    {"Heard": true, "Checked": "True", "Genre":"Progressive Rock", "Artist":"Emerson, Lake & Palmer", "Year":1992, "Album":"The Atlantic Years", "Name":"Tarkus", "Length":"20:40", "Track":5, "Composer":"Greg Lake/Keith Emerson", "Download Date":"1994/11/29", "Last Played":"03:25:19"},
    {"Heard": true, "Checked": "True", "Genre":"Rock", "Artist":"Blood, Sweat & Tears", "Year":1968, "Album":"Child Is Father To The Man", "Name":"Somethin' Goin' On", "Length":"08:00", "Track":9, "Composer":"", "Download Date":"1973/9/11", "Last Played":"19:49:41"},
    {"Heard": true, "Checked": "True", "Genre":"Jazz", "Artist":"Andy Narell", "Year":1989, "Album":"Little Secrets", "Name":"Armchair Psychology", "Length":"08:20", "Track":5, "Composer":"Andy Narell", "Download Date":"2010/4/15", "Last Played":"01:13:08"},
    {"Heard": true, "Checked": "True", "Genre":"Easy Listening", "Artist":"Frank Sinatra", "Year":1991, "Album":"Sinatra Reprise: The Very Good Years", "Name":"Luck Be A Lady", "Length":"05:16", "Track":4, "Composer":"F. Loesser", "Download Date":"2035/4/12", "Last Played":"06:16:53"},
    {"Heard": true, "Checked": "True", "Genre":"Progressive Rock", "Artist":"Dixie dregs", "Year":1977, "Album":"Free Fall", "Name":"Sleep", "Length":"01:58", "Track":6, "Composer":"Steve Morse", "Download Date":"2032/11/21", "Last Played":"08:23:26"},
    {"Heard": true, "Checked": "True", "Genre":"Classic Rock", "Artist":"Black Sabbath", "Year":2004, "Album":"Master of Reality", "Name":"Sweet Leaf", "Length":"05:04", "Track":1, "Composer":"Bill Ward/Geezer Butler/Ozzy Osbourne/Tony Iommi", "Download Date":"2036/5/26", "Last Played":"22:10:19"},
    {"Heard": true, "Checked": "True", "Genre":"Blues", "Artist":"Buddy Guy", "Year":1991, "Album":"Damn Right, I've Got The Blues", "Name":"Five Long Years", "Length":"08:27", "Track":3, "Composer":"Eddie Boyd/John Lee Hooker", "Download Date":"1904/4/4", "Last Played":"18:28:08"},
    {"Heard": true, "Checked": "True", "Genre":"Easy Listening", "Artist":"Frank Sinatra", "Year":1991, "Album":"Sinatra Reprise: The Very Good Years", "Name":"The Way You Look Tonight", "Length":"03:23", "Track":5, "Composer":"D. Fields/J. Kern", "Download Date":"1902/10/12", "Last Played":"23:09:23"},
    {"Heard": true, "Checked": "True", "Genre":"World", "Artist":"Andy Statman & David Grisman", "Year":1995, "Album":"Songs Of Our Fathers", "Name":"Chassidic Medley: Adir Hu / Moshe Emes", "Length":"04:14", "Track":2, "Composer":"Shlomo Carlebach; Trad.", "Download Date":"2035/2/9", "Last Played":"00:11:15"},
    {"Heard": true, "Checked": "True", "Genre":"Classic Rock", "Artist":"Jimi Hendrix", "Year":1968, "Album":"Electric Ladyland", "Name":"Long Hot Summer Night", "Length":"03:27", "Track":6, "Composer":"Jimi Hendrix", "Download Date":"1902/4/7", "Last Played":"16:58:08"},
    {"Heard": true, "Checked": "True", "Genre":"Progressive Rock", "Artist":"Dixie dregs", "Year":1978, "Album":"What if", "Name":"What if", "Length":"05:02", "Track":3, "Composer":"Steve Morse", "Download Date":"1992/3/28", "Last Played":"00:22:30"}
];

var i, len;
for(i=0, len = data_list.length; i < len; ++i){
    data.items.push(dojo.mixin({'id': i + 1 }, data_list[i % len]));
}

var layout = [
    { field: "id", datatype:"number"},
    { field: "Genre", datatype:"string"},
    { field: "Artist", datatype:"string",
        // Declare that we need the ComboBox for suggestions (autoComplete by default)
        autoComplete: true
    },
    { field: "Album", datatype:"string",
        // Declare that we need the ComboBox for suggestions
        autoComplete: true,
        // Configure the ComboBox, so that it does not auto-complete our input
        dataTypeArgs: {
            autoComplete: false
        }
    },
    { field: "Name", datatype:"string",
        // Declare that we do not need the following conditions for this column
        disabledConditions: ["contains", "notcontains"]
    },
    { field: "Track", datatype:"number"},
    { field: "Download Date", datatype:"date",
        // Declare how the data in store should be parsed to a Date object.
        dataTypeArgs: {
            datePattern: "yyyy/M/d"
        }
    },
    { field: "Last Played", datatype:"time",
        // Declare how the data in store should be parsed to a Date object.
        dataTypeArgs: {
            timePattern: "HH:mm:ss"
        }
    }
];

// In case you've close the filter bar, here's a way to bring it up.
function showFilterBar(){
    dijit.byId('grid').showFilterBar(true);
}

dojo.ready(function(){

    var store = new dojo.data.ItemFileWriteStore({data: data});

    var grid = new dojox.grid.EnhancedGrid({
        id: 'grid',
        store: store,
        structure: layout,
        plugins: {
            filter: {
                // Show the closeFilterbarButton at the filter bar
                closeFilterbarButton: true,
                // Set the maximum rule count to 5
                ruleCount: 5,
                // Set the name of the items
                itemsName: "songs"
            }
        }
    });
    grid.placeAt('gridContainer');
    grid.startup();
});</script>
</head>
<body class="claro">
    <div id="gridContainer" style="width: 100%; height: 400px;"></div>
<!-- <button onclick='showFilterBar()'>Show Filter Bar</button> -->
</body>
</html>