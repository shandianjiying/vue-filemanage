const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {Object} express instanse
 * @param {String} prefix 路由的前缀，默认是文件目录和文件名组成路由
 * @param {String} routerDir 路由文件位置 默认./routes
 * @param {Array} filterDir ['api']将只会读取api文件夹其他文件夹忽略，默认读取所有文件夹
 */
module.exports = function (app, config) {
    let {
        prefix,
        routerDir,
        filterDir,
        belongToIndexJs=false
    } = config;
    let routerCollections = [];
    let curPath = path.join(__dirname, '../../', './routes');
    //设置路由目录
    if (routerDir) {
        curPath = path.join(__dirname, '../../', routerDir);
    }

    fs
        .readdirSync(curPath)
        .filter((item) => {
            if (filterDir && filterDir.length) {
                let len = filterDir.filter((a) => {
                    if (a === item) {
                        return true;
                    }
                });
                if (len.length) {
                    return true
                }
            } else {
                return true;
            }
        })
        .forEach((item) => {
            if (item.indexOf('.') !== 0 && item !== 'index.js') {
                let routerPath = `${curPath}/${item}`;
                fs.readdirSync(routerPath).forEach((file) => {
                    /// 路由配置在index 中
                    if (file === 'index.js' && belongToIndexJs === true) {
                        let filePath = `${routerPath}/${file}`;
                        if (fs.existsSync(filePath)) {
                            routerCollections.push({
                                prefix: `${prefix}/` || `/${item}/${path.parse(file).name}/`,
                                routing: require(filePath)
                            });
                        }
                    } else if (file.indexOf('.') !== 0 && file !== 'index.js' && belongToIndexJs === false) {
                        let filePath = `${routerPath}/${file}`;
                        if (fs.existsSync(filePath)) {
                            routerCollections.push({
                                prefix: `${prefix}/${path.parse(file).name}/` || `/${item}/${path.parse(file).name}/`,
                                routing: require(filePath)
                            });
                        }
                    }
                });

            }
        });

    routerCollections.forEach((item) => {
        app.use(item.prefix, item.routing);
    });
};