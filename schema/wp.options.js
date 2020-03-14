module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpOptions', {
        optionId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "option_id"
        },
        optionName: {
            type: DataTypes.STRING(191),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "option_name"
        },
        optionValue: {
            type: DataTypes.TEXT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "option_value"
        },
        autoload: {
            type: DataTypes.STRING(20),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: "yes",
            field: "autoload"
        }
    }, {
        tableName: 'wp_options',
        timestamps: false
    });
};