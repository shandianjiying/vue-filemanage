/**
 * Created by shanjun on 17/6/1.
 */
module.exports = function (sequelize, DataTypes) {
    var Picture = sequelize.define('Picture', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true, unique : true},
        picName: {type : DataTypes.STRING, allowNull : false},
        direction: {type : DataTypes.STRING},
        status: {type : DataTypes.BOOLEAN,comment:'1:使用中,2:删除'},
    },{
        classMethods: {
            associate: function (models) {
                Picture.belongsTo(models.FilePath);
                return;
            }
        }
    });
    return Picture;
}