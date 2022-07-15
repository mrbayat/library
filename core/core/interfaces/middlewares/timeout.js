module.exports = (req, res, next) => {
  if (!req.timedout) {
    next()
  } else {
    res.send({
      settings: {
        success: 0,
        message: MESSAGE.default_message.error,
      }, data: [],
    })
  }
}
