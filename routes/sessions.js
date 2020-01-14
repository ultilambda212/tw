var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var debug = require('debug')('sessions')

router.post('/', function(req, res, next) {
  var users = req.app.locals.db.collection("users");
  var credentials = req.body;
  users.findOne({ username: credentials.username }, function(err, user){
    if(err) throw err;
    if(user) {
      bcrypt.compare(credentials.password, user.hashed_pass, function(err, ok) {
        if(ok) {
          res.status(200).send(JSON.stringify({result: "ok"}));
        } else {
          res.status(404).send(JSON.stringify({result: "fail"}));
        }
      });
    } else {
      res.status(404).send(JSON.stringify({result: "fail"}));
    }
  });
});

module.exports = router;
