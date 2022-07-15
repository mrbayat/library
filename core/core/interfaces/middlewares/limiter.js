var RateLimiter = require('limiter').RateLimiter

const limiter = new RateLimiter({
    tokensPerInterval: process.env.TOKEN_PER_INTERVAL,
    interval: "minute",
    fireImmediately: true
});

module.exports = async (req, res, next) => {
    const remainingRequests = await limiter.removeTokens(1)
    if (remainingRequests < 0) {
        next()
    } else
        next()
}

