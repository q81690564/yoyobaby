var express = require('express');
var app = express();

app.use(express.static(__dirname + '/main'))
var port =process.env.PORT || 8000;

// app.listen(1386)
app.listen(port)