var express = require('express');
var app = express();

//app.set('view engine', 'ejs');

//Serve static before session
app.use(express.static('public'));


/**
 * Let's creat the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];
    console.log("Hello")
    return next();
});


/**
 * Standard error handler
 */



app.get('/', function(req,res){
    res.json({foo:'bar'})
})

app.use(function (err, req, res, next) {
    res.status(500).send('Houston, we have a problem!');

    //Flush out the stack to the console
    console.error(err.stack);
});

var server = app.listen(3000, function () {
    console.log('Hello :3000');
});/**
 * Created by Denes on 07/04/16.
 */
