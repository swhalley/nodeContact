var http = require('http');
var url = require('url');
var express = require('express');
var config = require('./config')();


var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    console.log('main Index Page');
    response.sendFile('index.html');
});

app.get('/data', function(request, response) {
    console.log('data request');

    var parts = url.parse(request.url, true);
    var name = parts.query.Name;

    if(!name) {
        var error = { isError : true };
        response.send(JSON.stringify(error));
        return;
    }

    var filteredContacts = contacts.filter(function(item) {
        return (item.Name.toLowerCase().indexOf(name.toLowerCase()) != -1);
    });

    response.send(JSON.stringify(filteredContacts));
});

app.listen(config.port);





//Data For the Server. Not Node Code
var contacts = [
    { Name : 'Bob Sanders', Age: 12, Address : {
        StreetAddress : '123 Home St',
        City: 'Charlottetown'
    }},
    { Name : 'Roger MacDonald', Age: 45, Address : {
        StreetAddress : '17 Another Ave',
        City: 'Charlottetown'
    }},
    { Name : 'Susan Node', Age: 73, Address : {
        StreetAddress : '930 Test Blvd',
        City: 'Cornwall'
    }},
    { Name : 'Marsha Brady', Age: 16, Address : {
        StreetAddress : 'Homeless',
        City: 'Stratford'
    }}
];