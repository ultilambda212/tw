var express = require('express');
var router = express.Router();

router.get('/:page', function(req, res, next) {
  var page = req.params.page;
  var view = 'pages/' + page;
  var vars = {}
  if (req.cookies.username) {
    vars = {username: req.cookies.username};
  }
  res.render(view, vars);
});

module.exports = router;
