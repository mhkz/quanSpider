module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpUsers', {
        ID: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "ID"
        },
        userLogin: {
            type: DataTypes.STRING(60),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "user_login"
        },
        userPass: {
            type: DataTypes.STRING(255),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "user_pass"
        },
        userNicename: {
            type: DataTypes.STRING(50),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "user_nicename"
        },
        userEmail: {
            type: DataTypes.STRING(100),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "user_email"
        },
        userUrl: {
            type: DataTypes.STRING(100),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "user_url"
        },
        userRegistered: {
            type: DataTypes.DATE,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: "0000-00-00 00:00:00",
            field: "user_registered"
        },
        userActivationKey: {
            type: DataTypes.STRING(255),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "user_activation_key"
        },
        userStatus: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "user_status"
        },
        displayName: {
            type: DataTypes.STRING(250),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "display_name"
        }
    }, {
        tableName: 'wp_users',
        timestamps: false
    });
};