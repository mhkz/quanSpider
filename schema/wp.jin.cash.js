module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpJinCash', {
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
        credit: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "credit"
        },
        rmb: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "rmb"
        },
        status: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "status"
        },
        type: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "type"
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "name"
        },
        phoneEmail: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "phone_email"
        },
        cashTime: {
            type: DataTypes.DATE,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "cash_time"
        },
        mark: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "mark"
        }
    }, {
        tableName: 'wp_jin_cash',
        timestamps: false
    });
};