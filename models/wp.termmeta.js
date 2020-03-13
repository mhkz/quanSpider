module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpTermmeta', {
        metaId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "meta_id"
        },
        termId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "term_id"
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
        tableName: 'wp_termmeta',
        timestamps: false
    });
};