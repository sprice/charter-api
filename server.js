var express = require('express');
var app = express();
var rights = require('./rights');

app.get('/rights', function (req, res){
  rights.getRight(false, function(rights){
    if (rights) {
      res.json(rights);
    } else {
      res.send(404);
    }
  });
});

app.get('/rights/:id', function (req, res){
  rights.getRight(req.params.id, function(right){
    if (right) {
      res.json(right);
    } else {
      res.send(404);
    }
     
  });
});

app.listen(process.env.PORT || 3000);
