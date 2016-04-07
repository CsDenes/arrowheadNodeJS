/**
 * Created by Denes on 15/03/16.
 */


var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var jsonobj = [{foo:'bar'}];



var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '152.66.245.167',
    user     : 'Szakdoga2',
    password : 'sch1716',
    database : 'core'
});

app.get('/', function(req, res) {


    connection.query('SELECT * from ArrowheadSystem', function(err, rows, fields) {
        connection.end();
        if (!err) {
            console.log('The solution is: ', rows);
            res.end(rows);
          //  jsonobj = JSON.parse(rows);
        }
        else
            console.log('Error while performing Query.');
    });

    res.json(jsonobj);

});

//app.use(express.static('static'));

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '152.66.245.167',
    user     : 'arrowhead',
    password : 'root',
    database : 'core'
});



connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }

});


var server = app.listen(port, function () {
    console.log('Hello')

});




