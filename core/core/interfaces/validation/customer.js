const define = require('node-constants')(exports),
    Joi = require('joi')

define({
    "v1.customer_login": Joi.object().keys({
        username: Joi.string().max(101).required(),
        password: Joi.string().max(101).required()
    }).unknown(),
    "v1.customer_logout": Joi.object().keys({}).unknown(),
    "v1.customer_token": Joi.object().keys({}).unknown()
})