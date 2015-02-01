var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();

var options = {
  key: fs.readFileSync('keys/server.pem'),
  cert: fs.readFileSync('keys/server.crt')
};

app.get('/', function(req, res){
  fs.readFile('amazon_login.html',function (err, data){
      res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
      res.write(data);
      res.end();
  });
});

app.get('/profile', function(req, res){
  fs.readFile('amazon_profile.html',function (err, data){
      res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
      res.write(data);
      res.end();
  });
});

app.get('/helloworld', function(req, res){
  res.send('hello world');
});


https.createServer(options, app).listen(1337);

console.log('Server running at https://127.0.0.1:1337/');
