module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpJinCode', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "ID"
        },
        codeMain: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "code_main"
        },
        codeNumber: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "code_number"
        },
        codeIp: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "code_ip"
        },
        codeType: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "code_type"
        },
        codeTime: {
            type: DataTypes.DATE,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "code_time"
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
        tableName: 'wp_jin_code',
        timestamps: false
    });
};