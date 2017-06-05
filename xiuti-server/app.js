const pc = require('./bin/admin.js');
const api = require('./bin/api.js');
const http = require('http');
const config = require('config');
const models = require('./middleware/database')
//管理
pc.set('port', config.get('managePort') || 9999);
//移动端API
api.set('port', config.get('apiPort') || 8899);


models.sequelize.sync({force:false}).then(function(){
    let adminServer = pc.listen(pc.get('port'), function () {
        console.log('Xiuti admin server listening on port ' + adminServer.address().port);
    });

    let apiServer = api.listen(api.get('port'), function () {
        console.log('Xiuti api server listening on port ' + apiServer.address().port);
    });

    process.on('uncaughtException', (err) => {
        let error = {
            message: err.message,
            content: err.stack
        }

        // if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'test') {
        //     //生产环境 记录错误，并发送短信给管理
        //     _sys.create(error);
        //     require('./middleware/schedule/log').getLogger('error_log').error(error);
        // } else {
            console.error(error);
        // }
    });
})
