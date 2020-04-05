
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

exports. WpActivation = sequelize.import( './wp.activation');
// exports. WpBook = sequelize.import( './wp.book');
// exports. WpCommentmeta = sequelize.import( './wp.commentmeta');
// exports. WpComments = sequelize.import( './wp.comments');
// exports. WpJinBbsLike = sequelize.import( './wp.jin.bbs.like');
// exports. WpJinBbsVisitPass = sequelize.import( './wp.jin.bbs.visit.pass');
// exports. WpJinCase = sequelize.import( './wp.jin.case');
// exports. WpJinCash = sequelize.import( './wp.jin.cash');
// exports. WpJinCode = sequelize.import( './wp.jin.code');
// exports. WpJinCommentUp = sequelize.import( './wp.jin.comment.up');
// exports. WpJinCreditNote = sequelize.import( './wp.jin.credit.note');
// exports. WpJinExpNote = sequelize.import( './wp.jin.exp.note');
// exports. WpJinFollow = sequelize.import( './wp.jin.follow');
// exports. WpJinGift = sequelize.import( './wp.jin.gift');
// exports. WpJinInviteCode = sequelize.import( './wp.jin.invite.code');
// exports. WpJinKey = sequelize.import( './wp.jin.key');
// exports. WpJinLike = sequelize.import( './wp.jin.like');
// exports. WpJinLuckDraw = sequelize.import( './wp.jin.luck.draw');
// exports. WpJinMessage = sequelize.import( './wp.jin.message');
// exports. WpJinMessageGroup = sequelize.import( './wp.jin.message.group');
// exports. WpJinNotice = sequelize.import( './wp.jin.notice');
// exports. WpJinNow = sequelize.import( './wp.jin.now');
// exports. WpJinOrder = sequelize.import( './wp.jin.order');
// exports. WpJinPassword = sequelize.import( './wp.jin.password');
// exports. WpJinPay = sequelize.import( './wp.jin.pay');
// exports. WpJinRedbag = sequelize.import( './wp.jin.redbag');
// exports. WpJinReferralLink = sequelize.import( './wp.jin.referral.link');
// exports. WpJinSearchNote = sequelize.import( './wp.jin.search.note');
// exports. WpJinTask = sequelize.import( './wp.jin.task');
// exports. WpJinTopicLike = sequelize.import( './wp.jin.topic.like');
// exports. WpJinVisitor = sequelize.import( './wp.jin.visitor');
// exports. WpJinVote = sequelize.import( './wp.jin.vote');
// exports. WpLinks = sequelize.import( './wp.links');
// exports. WpOptions = sequelize.import( './wp.options');
// exports. WpPostmeta = sequelize.import( './wp.postmeta');
// exports. WpPosts = sequelize.import( './wp.posts');
// exports. WpTermRelationships = sequelize.import( './wp.term.relationships');
// exports. WpTermTaxonomy = sequelize.import( './wp.term.taxonomy');
// exports. WpTermmeta = sequelize.import( './wp.termmeta');
// exports. WpTerms = sequelize.import( './wp.terms');
// exports. WpUsermeta = sequelize.import( './wp.usermeta');
exports. WpUsers = sequelize.import( './wp.users');