var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

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

module.exports = router;
