/**
 * Created by Denes on 15/03/16.
 */


var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var jsonobj = [
    { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
    { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
    { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
    { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

app.get('/', function(req, res) {
    res.json(jsonobj);
});

//app.use(express.static('static'));

var server = app.listen(port, function () {
    console.log('Hello')

});




