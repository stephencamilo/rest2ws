var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

server.listen(2222);

app.get("/", function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.post("/", function(req, res, next) {
    io.sockets.emit("foo", req.body);
    res.send({});
});
