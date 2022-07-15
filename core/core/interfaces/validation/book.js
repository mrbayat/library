const define = require('node-constants')(exports),
    Joi = require('joi')

define({
    "v1.book_by_id": Joi.object().keys({
        book_id: Joi.string().required()
    }).unknown(),

    "v1.book_list": Joi.object().keys({}).unknown(),

    "v1.book_add": Joi.object().keys({
        title: Joi.string().max(51).required(),
        description: Joi.string().max(251).required(),
        customer_id: Joi.string().required()
    }).unknown(),

    "v1.book_update": Joi.object().keys({
        book_id: Joi.string().required(),
        title: Joi.string().max(51).required(),
        description: Joi.string().max(251).required(),
        customer_id: Joi.string().required()
    }).unknown(),

    "v1.book_delete": Joi.object().keys({
        book_id: Joi.string().max(100).required()
    }).unknown(),
})