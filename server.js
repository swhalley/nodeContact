var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {

    request.addListener('end', function() { //figure out all the events. End requires me to call resume() at the bottom, but what are the others. there is a 'data' and 'connection' i have seen

        var parts = url.parse(request.url, true);
        var name = parts.query.Name;

        if(!name) {
            response.writeHead(200, {
                'Content-Type' : 'text/plain'
            });

            response.write('Usage :: Pass the parameter Name');
            response.end();
        }

        var filteredContacts = contacts.filter(function(item) {
            return (item.Name.toLowerCase().indexOf(name.toLowerCase()) != -1);
        });

        response.writeHead(200, {
            'Content-Type' : 'application/json'
        });

        response.write(JSON.stringify(filteredContacts));
        response.end();
    });

    request.resume();
}).listen(8000);



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