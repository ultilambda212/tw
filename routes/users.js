var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log(req.params);
  res.status(200).send('ok');
});

module.exports = router;
