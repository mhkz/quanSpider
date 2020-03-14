module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpJinBbsLike', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "ID"
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "user_id"
        },
        bbsId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "bbs_id"
        }
    }, {
        tableName: 'wp_jin_bbs_like',
        timestamps: false
    });
};