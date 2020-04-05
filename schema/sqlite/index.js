const Sequelize = require('sequelize');
const path = require('path');
const config = require('../../service/config');

const POS_CONFIG = config.sqlite.pos;

const POS_CLIENT = new Sequelize(POS_CONFIG.database, POS_CONFIG.user, POS_CONFIG.password, {
    host: path.resolve() + "/" + POS_CONFIG.database,
    port: POS_CONFIG.port,
    dialect: 'sqlite',
    pool: {
        max: 100,
        min: 0,
        idle: 100000
    },
    logging: false,
    // logging: console.log,
    queueLimit: 0,
    waitForConnection: true,
    dialectOptions: {
        charset: 'utf8'
    }
});

const user = require('./user');
const spider = require('./spider');


user.define(POS_CLIENT);
spider.define(POS_CLIENT);

exports.client = POS_CLIENT;
exports.Sequelize = POS_CLIENT;
