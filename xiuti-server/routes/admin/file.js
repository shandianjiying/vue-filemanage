const express = require('express');
const router = express.Router();
const models = require('../../middleware/database')
const path = require('path');
const fs = require('fs');
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

router.post('/files',(req,res)=>{
  var file = req.body;
  if(fs.existsSync(__dirname+'/system'+file.name)){
      res.send('已经有此文件夹！');
  }else{
      fs.mkdirSync(__dirname+'/system'+file.name);
      var result = models.FilePath.create(file);
      res.send(result);
  }
})  

module.exports = router;