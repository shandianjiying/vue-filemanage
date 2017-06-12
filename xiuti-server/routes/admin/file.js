const express = require('express');
const router = express.Router();
const models = require('../../middleware/database')
const path = require('path');
const fs = require('fs');
const formidable = require('formidable')
const util = require('util')
/* GET home page. */

// 获取文件夹
router.get('/files', function(req, res, next) {
    if(req.query.id){
        models.FilePath.findAll({
            where:{parentFile:req.query.id}
        }).then(function(result){
            res.send(result);
        })
    }else {
        models.FilePath.findAll().then(function(result){
            res.send(result);
        })
    }
  
});

// 新建文件夹
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

// 上传文件
router.post('/upload',(req,res)=>{
    var userDirPath = path.join(__dirname, '../../public/cache/');
    if (!fs.existsSync(path.join(__dirname, '../../public/cache/'))) {
        fs.mkdirSync(path.join(__dirname, '../../public/cache/'));
    }
    var form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8'; //设置编辑
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 20 * 1024 * 1024; //文件大小
    form.type = true;
    form.uploadDir = userDirPath
    var displayUrl;
    form.parse(req, function(err, fields, files) {
        if (err) {
            res.send(err);
            return;
        }
        var extName = ''; //后缀名
        switch (files.file.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if (extName.length === 0) {
            res.send({
                code: 202,
                msg: '只支持png和jpg格式图片'
            });
            return;
        } else {
            var avatarName = '/' + Date.now() + '.' + extName;
            var newPath = path.join(__dirname, '../../system/' + fields.parentDir + avatarName) ;
            fs.renameSync(files.file.path, newPath); //重命名
            models.Picture.create({
                picName:avatarName,
                direction:fields.parentDir+avatarName,
                status:true
            })
            res.send({
                code: 200,
            });
        }
    });
})

module.exports = router;