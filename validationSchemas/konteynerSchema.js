const Joi = require("@hapi/joi");

const konteynerSchema = Joi.object({

    isim : Joi.string().required(),
    soyad : Joi.string().required(),
    siparisNo : Joi.string().required(),
    sektör : Joi.string().optional(),
   teslimSekli:Joi.string().required(),
   paketleme1 :Joi.string().required(),
   paketleme2 :Joi.string().required(),
   paketleme3 :Joi.string().required(),
   paketleme4 :Joi.string().required(),
   MiktarKonteyner :Joi.string().required(),
   konteynerTürü:Joi.string().required(),
   bosaltmaYeri :Joi.string().required(),
   bosaltmaYeri2:Joi.string().required(),
   kons   :Joi.string().required(),
   aralik1:Joi.date().required(),
   aralik2:Joi.date().required(),
   ürün:Joi.string().required(),
   faturaFirması:Joi.string().required(),
   aliciFirması :Joi.string().required(),
   firmaIhbar1  :Joi.string().required(),
   firmaIhbar2  :Joi.string().required(),
   ekaciklama   :Joi.string().optional(),
   aciklamaasil : Joi.string().optional(),
   userEmail :Joi.string().required(),
   tasimaSekli:Joi.string().required(),
   ödemesekil :Joi.string().required(),
   paraBirimi :Joi.string().required(),
});

module.exports =konteynerSchema;