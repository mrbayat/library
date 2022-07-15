const d = require('domain').create()

module.exports = (req, res, next) => {
  d.on('error', (er) => {
    httpResponse({ res, ...new Api500Error() })
  })
  d.run(() => {
    next()
  })
}
