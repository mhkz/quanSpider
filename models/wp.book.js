module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WpBook', {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "id"
        },
        type: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 1,
            field: "type"
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "name"
        },
        author: {
            type: DataTypes.STRING(50),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "author"
        },
        cover: {
            type: DataTypes.STRING(255),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "cover"
        },
        detailImg: {
            type: DataTypes.STRING(255),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "detail_img"
        },
        summary: {
            type: DataTypes.STRING(500),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "summary"
        },
        sortNum: {
            type: DataTypes.INTEGER(8).UNSIGNED,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "sort_num"
        },
        area: {
            type: DataTypes.STRING(255),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "area"
        },
        category: {
            type: DataTypes.STRING(255),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "category"
        },
        freeType: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 2,
            field: "free_type"
        },
        newType: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 1,
            field: "new_type"
        },
        longType: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 1,
            field: "long_type"
        },
        genderType: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 1,
            field: "gender_type"
        },
        overType: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 1,
            field: "over_type"
        },
        isHot: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "is_hot"
        },
        isShow: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 1,
            field: "is_show"
        },
        freeChapter: {
            type: DataTypes.INTEGER(5).UNSIGNED,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "free_chapter"
        },
        money: {
            type: DataTypes.INTEGER(8).UNSIGNED,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "money"
        },
        hotNum: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "hot_num"
        },
        shareTitle: {
            type: DataTypes.STRING(100),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "share_title"
        },
        shareDesc: {
            type: DataTypes.STRING(500),
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "share_desc"
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 1,
            field: "status"
        },
        createTime: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "create_time"
        }
    }, {
        tableName: 'wp_book',
        timestamps: false
    });
};