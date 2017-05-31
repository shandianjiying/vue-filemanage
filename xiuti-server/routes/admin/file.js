var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/files', function(req, res, next) {
  var files = [{
                  name: '第一期',
                  size: 2000
              },
              {
                  name: '第二期',
                  size: 2000
              },
              {
                  name: '第三期',
                  size: 2000
              },
              {
                  name: '第4期',
                  size: 2000
              },
              {
                  name: '第5期',
                  size: 2000
              },
              {
                  name: '第6期',
                  size: 2000
              },
              {
                  name: '第7期',
                  size: 2000
              },
              {
                  name: '第8期',
                  size: 2000
              },
              {
                  name: '第9期',
                  size: 2000
              }
          ]
  res.send(files);
  console.log('files');
});

module.exports = router;