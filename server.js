var express = require('express');
var app = express();
var rights = require('./rights');

var port = process.env.PORT || 3000;

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Content-Type", "application/json");
  next();
});

app.options('*', function (req, res) {
  res.send(200);
});

app.get('/rights', function (req, res) {
  rights.getRight(false, function(rights) {
    if (rights) {
      res.send(rights);
    } else {
      res.send(404);
    }
  });
});

app.get('/rights/:id', function (req, res) {
  rights.getRight(req.params.id, function(right) {
    if (right) {
      res.send(right);
    } else {
      res.send(404);
    }
     
  });
});

app.get('/sections', function (req, res) {
  rights.getSections(function(sections) {
    res.send(sections);
  });
})

app.listen(port);
console.log('Charter API running on http://localhost:' + port);
