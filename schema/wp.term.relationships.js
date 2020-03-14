module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpTermRelationships', {
        objectId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            defaultValue: 0,
            field: "object_id"
        },
        termTaxonomyId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            defaultValue: 0,
            field: "term_taxonomy_id"
        },
        termOrder: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "term_order"
        }
    }, {
        tableName: 'wp_term_relationships',
        timestamps: false
    });
};