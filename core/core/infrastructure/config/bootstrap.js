'use strict';

require('dotenv').config()
const constants = require('../constants/constants')

module.exports = {
  async init() {
    switch (process.env.SUPPORTED_DATABASE) {
      case constants.db.mysql:
        require('../orm/sequelize')
        break;
      case constants.db.mongo:
        require('../orm/mongoose')
        break;
      default:
        require('../orm/mongoose')
        break;
    }
  }
};
