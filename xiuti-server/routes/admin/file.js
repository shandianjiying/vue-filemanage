const express = require('express');
const router = express.Router();
const models = require('../../middleware/database')
const path = require('path');
const fs = require('fs');
const formidable = require('formidable')
const util = require('util')
/* GET home page. */
router.get('/files', function(req, res, next) {
  models.FilePath.findAll().then(function(result){
      res.send(result);
  })
});

router.post('/files',(req,res)=>{
  var file = req.body;
  if(fs.existsSync(path.join(__dirname, '../../system/'+file.filename))){
      res.send('已经有此文件夹！');
  }else{
      fs.mkdirSync(path.join(__dirname, '../../system/'+file.filename));
      var result = models.FilePath.create(file);
      res.send(result);
  }
})  

router.post('/upload',(req,res)=>{
    let form = new formidable.IncomingForm();
    let files = [];
    let fields = [];
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.maxFieldSize = 20 * 1024 * 1024;
    form.uploadDir = 'system/我的文件夹/';

    form
      .on('field', function(field, value) {
        console.log(field, value);
        fields.push([field, value]);
      })
      .on('file', function(field, file) {
        console.log(field, file);
        files.push([field, file]);
      })
      .on('end', function() {
        console.log('-> upload done');
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received fields:\n\n '+util.inspect(fields));
        res.write('\n\n');
        res.end('received files:\n\n '+util.inspect(files));
      });
    form.parse(req);
})

module.exports = router;