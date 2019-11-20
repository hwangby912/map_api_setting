var express = require('express');
var router = express.Router();

/* map page. */
router.get('/map', function(req, res, next) {
  res.render('map');
});

module.exports = router;
