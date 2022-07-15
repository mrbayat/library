
exports.setglobal = () => {
  global.MESSAGE = require('../../infrastructure/constants/message')
  global.CONSTANT = require('../../infrastructure/constants/constants')

  global.Api404Error = require('../httpResponse/api404Error')
  global.Api403Error = require('../httpResponse/api403Error')
  global.Api500Error = require('../httpResponse/api500Error')
  global.Api400Error = require('../httpResponse/api400Error')
  global.Api200 = require('../httpResponse/api200')
  global.httpResponse = require('../httpResponse')
  
  global.serviceLocator =  require('../../infrastructure/config/service-locator')
}
