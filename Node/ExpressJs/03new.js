var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/getform', function(req, res) {
    res.sendFile(__dirname + "/" + "04get_form.html");
})