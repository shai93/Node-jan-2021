const http  = require('http');


http.createServer(function(req, res){
    res.end("hi from server")

}).listen(8080)
