
const Sequelize = require("sequelize");


const sequelize = new Sequelize('iquanku_com', 'iquanku_com', 'guofeng2020', {
    host: '103.42.29.140',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true,
        supportBigNumbers: true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    timezone: '+08:00',
    define: {
        underscored: true,
        underscoredAll: true
    }
});

exports.Op = Sequelize.Op;

exports. WpActivation = sequelize.import(join(__dirname, './wp.activation'));
exports. WpBook = sequelize.import(join(__dirname, './wp.book'));
exports. WpCommentmeta = sequelize.import(join(__dirname, './wp.commentmeta'));
exports. WpComments = sequelize.import(join(__dirname, './wp.comments'));
exports. WpJinBbsLike = sequelize.import(join(__dirname, './wp.jin.bbs.like'));
exports. WpJinBbsVisitPass = sequelize.import(join(__dirname, './wp.jin.bbs.visit.pass'));
exports. WpJinCase = sequelize.import(join(__dirname, './wp.jin.case'));
exports. WpJinCash = sequelize.import(join(__dirname, './wp.jin.cash'));
exports. WpJinCode = sequelize.import(join(__dirname, './wp.jin.code'));
exports. WpJinCommentUp = sequelize.import(join(__dirname, './wp.jin.comment.up'));
exports. WpJinCreditNote = sequelize.import(join(__dirname, './wp.jin.credit.note'));
exports. WpJinExpNote = sequelize.import(join(__dirname, './wp.jin.exp.note'));
exports. WpJinFollow = sequelize.import(join(__dirname, './wp.jin.follow'));
exports. WpJinGift = sequelize.import(join(__dirname, './wp.jin.gift'));
exports. WpJinInviteCode = sequelize.import(join(__dirname, './wp.jin.invite.code'));
exports. WpJinKey = sequelize.import(join(__dirname, './wp.jin.key'));
exports. WpJinLike = sequelize.import(join(__dirname, './wp.jin.like'));
exports. WpJinLuckDraw = sequelize.import(join(__dirname, './wp.jin.luck.draw'));
exports. WpJinMessage = sequelize.import(join(__dirname, './wp.jin.message'));
exports. WpJinMessageGroup = sequelize.import(join(__dirname, './wp.jin.message.group'));
exports. WpJinNotice = sequelize.import(join(__dirname, './wp.jin.notice'));
exports. WpJinNow = sequelize.import(join(__dirname, './wp.jin.now'));
exports. WpJinOrder = sequelize.import(join(__dirname, './wp.jin.order'));
exports. WpJinPassword = sequelize.import(join(__dirname, './wp.jin.password'));
exports. WpJinPay = sequelize.import(join(__dirname, './wp.jin.pay'));
exports. WpJinRedbag = sequelize.import(join(__dirname, './wp.jin.redbag'));
exports. WpJinReferralLink = sequelize.import(join(__dirname, './wp.jin.referral.link'));
exports. WpJinSearchNote = sequelize.import(join(__dirname, './wp.jin.search.note'));
exports. WpJinTask = sequelize.import(join(__dirname, './wp.jin.task'));
exports. WpJinTopicLike = sequelize.import(join(__dirname, './wp.jin.topic.like'));
exports. WpJinVisitor = sequelize.import(join(__dirname, './wp.jin.visitor'));
exports. WpJinVote = sequelize.import(join(__dirname, './wp.jin.vote'));
exports. WpLinks = sequelize.import(join(__dirname, './wp.links'));
exports. WpOptions = sequelize.import(join(__dirname, './wp.options'));
exports. WpPostmeta = sequelize.import(join(__dirname, './wp.postmeta'));
exports. WpPosts = sequelize.import(join(__dirname, './wp.posts'));
exports. WpTermRelationships = sequelize.import(join(__dirname, './wp.term.relationships'));
exports. WpTermTaxonomy = sequelize.import(join(__dirname, './wp.term.taxonomy'));
exports. WpTermmeta = sequelize.import(join(__dirname, './wp.termmeta'));
exports. WpTerms = sequelize.import(join(__dirname, './wp.terms'));
exports. WpUsermeta = sequelize.import(join(__dirname, './wp.usermeta'));
exports. WpUsers = sequelize.import(join(__dirname, './wp.users'));