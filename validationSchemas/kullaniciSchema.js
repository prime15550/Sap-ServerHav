const Joi = require("@hapi/joi");

const kullaniciSchema = Joi.object({

    _isim : Joi.string().required(),
    _soyisim :Joi.string().required(),
    _firma :Joi.string().required(),
    _email: Joi.string().required(),
    _sifre: Joi.string().required(),
    _telefon:Joi.string().required(),
});

module.exports =kullaniciSchema;