var http = require('http')
http.createServer(function(req, res) {
    res.write("Hello from NodeJs Server");
    res.end();
}).listen(5050)