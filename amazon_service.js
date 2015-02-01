var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();

app.set('views', './views');
app.engine('html', require('ejs').renderFile);


var options = {
  key: fs.readFileSync('keys/server.pem'),
  cert: fs.readFileSync('keys/server.crt')
};

app.get('/', function(req, res){
  res.render('amazon_login.html');
});

app.get('/profile', function(req, res){
  var scope = req.param("profile");
  var exprIn = req.param("expires_in");
  var token = req.param("access_token");

  console.log('token: ' + token);
  res.render('amazon_profile.html');
});

app.get('/helloworld', function(req, res){
  res.send('hello world');
});


https.createServer(options, app).listen(1337);

console.log('Server running at https://127.0.0.1:1337/');
