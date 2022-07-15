const express = require('express')
  , router = express.Router()
  , morgan = require('morgan');

router.use(morgan('short'))

router.all('/', async (req, res, next) => {
  try {
    let data = {
      body: req.body,
      url: req.baseUrl
    }
    next()

  } catch (error) {
    httpResponse({ res, ...new Api500Error() })
  }
})
module.exports = router