/**
 * Created by shanjun on 17/6/1.
 */
module.exports = function (sequelize, DataTypes) {
    var FilePath = sequelize.define('FilePath', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true, unique : true},
        filename: {type : DataTypes.STRING, allowNull : false},
        direction: {type : DataTypes.STRING},
        status: {type : DataTypes.BOOLEAN,comment:'1:使用中,2:删除'},
        parentFile: {type: DataTypes.STRING,comment:'父级文件夹ID'},
        hasChild: {type: DataTypes.BOOLEAN,comment:'是否有子文件夹 1:是, 0:否'},
        isNew: {type: DataTypes.BOOLEAN,comment:'是否是new 1:是, 0:否'},
        visitCount: {type: DataTypes.INTEGER,comment:'访问次数'}
    },{
        classMethods: {
            associate: function (models) {
                FilePath.hasMany(models.Picture);
                return;
            }
        }
    });
    return FilePath;
}