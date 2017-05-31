var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/files', function(req, res, next) {
  res.send('fils');
  console.log('files');
});

module.exports = router;