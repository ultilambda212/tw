var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var fs = require('fs');
var path = require('path');

router.post('/', function(req, res, next) {
  var users = req.app.locals.db.collection("users");
  var user = req.body;
  var pass = user.pass;
  bcrypt.hash(pass, 10, function(err, hash) {
    user.pass = null;
    user.hashed_pass = hash;
    users.insertOne(user, function (err, savedUser) {
      res.status(200).send(JSON.stringify({result: "ok"}));
    });
  });
});

router.get('/contacts', function(req, res, next) {
  fs.readFile(path.join(__dirname, "..", 'data', "data.json"), function(err, buffer){
    res.status(200).send(buffer);
  })
});

module.exports = router;
