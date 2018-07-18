// importar
var express = require('express');
 
// instanciar
var app = express(); 
app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('js'));
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
// escuchar
app.listen(9000);
 
console.log("Servidor Express escuchando en modo %s", app.settings.env);
