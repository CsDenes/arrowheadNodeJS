/**
 * Created by Denes on 15/03/16.
 */


var express = require('express');
var app = express();
var port = process.env.PORT || 1337;


app.get('/', function(req,res){
    // res.json({foo:'bartest'})
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
})

//app.use(express.static('static'));

var server = app.listen(port, function () {
    console.log('Hello')

});




