const NodeMediaServer = require('node-media-server');

const config = {
logType: 3,
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();

var express = require('express');
var app = express();
const port = process.env.PORT || 5050;

app.use('/', express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})

var server = app.listen(port, function () {
   var host = server.address().address
   
   console.log("listening at http://%s:%s", host, port)
})