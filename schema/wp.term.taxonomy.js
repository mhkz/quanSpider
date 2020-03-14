module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpTermTaxonomy', {
        termTaxonomyId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "term_taxonomy_id"
        },
        termId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "term_id"
        },
        taxonomy: {
            type: DataTypes.STRING(32),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "taxonomy"
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "description"
        },
        parent: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "parent"
        },
        count: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "count"
        }
    }, {
        tableName: 'wp_term_taxonomy',
        timestamps: false
    });
};