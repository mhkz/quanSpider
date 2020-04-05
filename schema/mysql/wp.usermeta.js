module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpUsermeta', {
        umetaId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "umeta_id"
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "user_id"
        },
        metaKey: {
            type: DataTypes.STRING(255),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "meta_key"
        },
        metaValue: {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "meta_value"
        }
    }, {
        tableName: 'wp_usermeta',
        timestamps: false
    });
};