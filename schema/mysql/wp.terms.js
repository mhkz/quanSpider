module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpTerms', {
        termId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "term_id"
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "name"
        },
        slug: {
            type: DataTypes.STRING(200),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "slug"
        },
        termGroup: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "term_group"
        }
    }, {
        tableName: 'wp_terms',
        timestamps: false
    });
};