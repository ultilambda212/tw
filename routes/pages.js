var express = require('express');
var router = express.Router();

router.get('/:page', function(req, res, next) {
  var page = req.params.page;
  var view = 'pages/' + page;
  res.render(view, {});
});

module.exports = router;
