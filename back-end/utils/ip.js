const internalIp = require('internal-ip');
const host = process.env.NODE_ENV === 'production'
  ?
  process.env.HOST
  :
  `http://${internalIp.v4.sync()}:5000`;


module.exports = {
  getHost: function () {
    return host;
  }
};