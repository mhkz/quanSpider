module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpJinBbsVisitPass', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "ID"
        },
        bbsId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "bbs_id"
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "user_id"
        }
    }, {
        tableName: 'wp_jin_bbs_visit_pass',
        timestamps: false
    });
};