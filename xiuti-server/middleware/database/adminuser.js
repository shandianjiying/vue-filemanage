/**
 * Created by shanjun on 17/5/22.
 */
module.exports = function (sequelize, DataTypes) {
    var AdminUser = sequelize.define('AdminUser', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true, unique : true},
        username: {type : DataTypes.STRING, allowNull : false},
        password: {type : DataTypes.STRING},
        wechatId:{type : DataTypes.STRING},
        type:{type:DataTypes.BOOLEAN,comment:'1:普通员工,0:管理员'},
        lastLogin:{type:DataTypes.DATE},
        qrcode_key:{type : DataTypes.STRING}
    });
    return AdminUser;
}