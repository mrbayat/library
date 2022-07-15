module.exports = (req, res, next) => {
  httpResponse({ res, ... new Api404Error() })
}