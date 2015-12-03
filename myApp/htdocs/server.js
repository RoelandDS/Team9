var data = { "name": "Team 9", "members": [{"name": "Glenn"},{"name": "Robin"}] };
var http = require('http');
var request = require('request');
var express = require('express');

var app = express();

// OPDRACHT 2
// request({
//     url: 'http://hackthefuture.herokuapp.com/dashboard/team', //URL to hit
//     method: 'PUT',
//     json: data 
// }, function(error, response, body){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(response.statusCode, body);
//         console.log("Team werd toegevoegd");
//     }
// });

app.get('/', function(req, res)
{
    res.type('json');
    res.send(data);
});

app.listen(process.env.PORT,process.env.IP);