module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpLinks', {
        linkId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "link_id"
        },
        linkUrl: {
            type: DataTypes.STRING(255),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "link_url"
        },
        linkName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "link_name"
        },
        linkImage: {
            type: DataTypes.STRING(255),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "link_image"
        },
        linkTarget: {
            type: DataTypes.STRING(25),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "link_target"
        },
        linkDescription: {
            type: DataTypes.STRING(255),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "link_description"
        },
        linkVisible: {
            type: DataTypes.STRING(20),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: Y,
            field: "link_visible"
        },
        linkOwner: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 1,
            field: "link_owner"
        },
        linkRating: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "link_rating"
        },
        linkUpdated: {
            type: DataTypes.DATE,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0000-00-00 00:00:00,
            field: "link_updated"
        },
        linkRel: {
            type: DataTypes.STRING(255),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "link_rel"
        },
        linkNotes: {
            type: DataTypes.TEXT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "link_notes"
        },
        linkRss: {
            type: DataTypes.STRING(255),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "link_rss"
        }
    }, {
        tableName: 'wp_links',
        timestamps: false
    });
};