var data = { "name": "Team 9", "members": [{"name": "Glenn"},{"name": "Robin"}] };
var http = require('http');
var request = require('request');
var express = require('express');
var port = 4000;

var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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

app.listen(port,process.env.IP);