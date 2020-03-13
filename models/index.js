
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

export let WpActivation = sequelize.import(join(__dirname, './wp.activation'));
export let WpBook = sequelize.import(join(__dirname, './wp.book'));
export let WpCommentmeta = sequelize.import(join(__dirname, './wp.commentmeta'));
export let WpComments = sequelize.import(join(__dirname, './wp.comments'));
export let WpJinBbsLike = sequelize.import(join(__dirname, './wp.jin.bbs.like'));
export let WpJinBbsVisitPass = sequelize.import(join(__dirname, './wp.jin.bbs.visit.pass'));
export let WpJinCase = sequelize.import(join(__dirname, './wp.jin.case'));
export let WpJinCash = sequelize.import(join(__dirname, './wp.jin.cash'));
export let WpJinCode = sequelize.import(join(__dirname, './wp.jin.code'));
export let WpJinCommentUp = sequelize.import(join(__dirname, './wp.jin.comment.up'));
export let WpJinCreditNote = sequelize.import(join(__dirname, './wp.jin.credit.note'));
export let WpJinExpNote = sequelize.import(join(__dirname, './wp.jin.exp.note'));
export let WpJinFollow = sequelize.import(join(__dirname, './wp.jin.follow'));
export let WpJinGift = sequelize.import(join(__dirname, './wp.jin.gift'));
export let WpJinInviteCode = sequelize.import(join(__dirname, './wp.jin.invite.code'));
export let WpJinKey = sequelize.import(join(__dirname, './wp.jin.key'));
export let WpJinLike = sequelize.import(join(__dirname, './wp.jin.like'));
export let WpJinLuckDraw = sequelize.import(join(__dirname, './wp.jin.luck.draw'));
export let WpJinMessage = sequelize.import(join(__dirname, './wp.jin.message'));
export let WpJinMessageGroup = sequelize.import(join(__dirname, './wp.jin.message.group'));
export let WpJinNotice = sequelize.import(join(__dirname, './wp.jin.notice'));
export let WpJinNow = sequelize.import(join(__dirname, './wp.jin.now'));
export let WpJinOrder = sequelize.import(join(__dirname, './wp.jin.order'));
export let WpJinPassword = sequelize.import(join(__dirname, './wp.jin.password'));
export let WpJinPay = sequelize.import(join(__dirname, './wp.jin.pay'));
export let WpJinRedbag = sequelize.import(join(__dirname, './wp.jin.redbag'));
export let WpJinReferralLink = sequelize.import(join(__dirname, './wp.jin.referral.link'));
export let WpJinSearchNote = sequelize.import(join(__dirname, './wp.jin.search.note'));
export let WpJinTask = sequelize.import(join(__dirname, './wp.jin.task'));
export let WpJinTopicLike = sequelize.import(join(__dirname, './wp.jin.topic.like'));
export let WpJinVisitor = sequelize.import(join(__dirname, './wp.jin.visitor'));
export let WpJinVote = sequelize.import(join(__dirname, './wp.jin.vote'));
export let WpLinks = sequelize.import(join(__dirname, './wp.links'));
export let WpOptions = sequelize.import(join(__dirname, './wp.options'));
export let WpPostmeta = sequelize.import(join(__dirname, './wp.postmeta'));
export let WpPosts = sequelize.import(join(__dirname, './wp.posts'));
export let WpTermRelationships = sequelize.import(join(__dirname, './wp.term.relationships'));
export let WpTermTaxonomy = sequelize.import(join(__dirname, './wp.term.taxonomy'));
export let WpTermmeta = sequelize.import(join(__dirname, './wp.termmeta'));
export let WpTerms = sequelize.import(join(__dirname, './wp.terms'));
export let WpUsermeta = sequelize.import(join(__dirname, './wp.usermeta'));
export let WpUsers = sequelize.import(join(__dirname, './wp.users'));