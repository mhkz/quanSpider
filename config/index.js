const NODE_ENV = process.env.NODE_ENV;
const config  = require('./' + NODE_ENV);
module.exports = config;