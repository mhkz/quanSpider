module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpComments', {
        commentID: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "comment_ID"
        },
        commentPostID: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "comment_post_ID"
        },
        commentAuthor: {
            type: DataTypes.TEXT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "comment_author"
        },
        commentAuthorEmail: {
            type: DataTypes.STRING(100),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "comment_author_email"
        },
        commentAuthorUrl: {
            type: DataTypes.STRING(200),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "comment_author_url"
        },
        commentAuthorIP: {
            type: DataTypes.STRING(100),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "comment_author_IP"
        },
        commentDate: {
            type: DataTypes.DATE,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: "0000-00-00 00:00:00",
            field: "comment_date"
        },
        commentDateGmt: {
            type: DataTypes.DATE,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: "0000-00-00 00:00:00",
            field: "comment_date_gmt"
        },
        commentContent: {
            type: DataTypes.TEXT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "comment_content"
        },
        commentKarma: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "comment_karma"
        },
        commentApproved: {
            type: DataTypes.STRING(20),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 1,
            field: "comment_approved"
        },
        commentAgent: {
            type: DataTypes.STRING(255),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "comment_agent"
        },
        commentType: {
            type: DataTypes.STRING(20),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "comment_type"
        },
        commentParent: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "comment_parent"
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "user_id"
        }
    }, {
        tableName: 'wp_comments',
        timestamps: false
    });
};