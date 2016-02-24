var port 		= process.env.PORT || 3000;
var express 	= require('express');
var app 		= express();
var http 		= require('http');
var server 		= http.Server(app);
//Tell the server to listen for incoming connections
server.listen(port, function() {
    console.log('Server started!');
});

//By default, we forward the / path to index.html automatically.
///This handler will listen for requests on /*, any file from the root of our server.
app.get('/', function(req, res) {
    //This is the current file they have requested
    res.sendFile(__dirname + '/public/index.html');
}); //app.get *

app.use(express.static(__dirname + '/public'));