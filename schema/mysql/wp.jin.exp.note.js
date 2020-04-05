module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpJinExpNote', {
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
        type: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "type"
        },
        number: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "number"
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "content"
        },
        time: {
            type: DataTypes.DATE,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "time"
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
        tableName: 'wp_jin_exp_note',
        timestamps: false
    });
};