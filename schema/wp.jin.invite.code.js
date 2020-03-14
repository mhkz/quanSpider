module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpJinInviteCode', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "ID"
        },
        code: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "code"
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "user_id"
        },
        status: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "status"
        },
        useUserId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "use_user_id"
        },
        useTime: {
            type: DataTypes.DATE,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "use_time"
        },
        remark: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "remark"
        }
    }, {
        tableName: 'wp_jin_invite_code',
        timestamps: false
    });
};