module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpPostmeta', {
        metaId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "meta_id"
        },
        postId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "post_id"
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
        tableName: 'wp_postmeta',
        timestamps: false
    });
};