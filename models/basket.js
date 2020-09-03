const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const basketSchema = new Schema({
    isim :
    {
        type : String,
        required : true ,
    },
    soyad : 
    {
        type : String,
        required : true,
    },
    siparisNo :
    {
        type : String,
        required : true,
    },
    sektör:
    {
        type:String,
        required:true,
    },
    ürün:
    {
        type : String,
        required : true,
    },
    teslimSekli : 
    {
        type : String,
        required: true,
    },
    paketleme1 : 
    {
        type : String,
        required:true,
    },
    paketleme2:
    {
        type : String,
        required : true,
    },
    paketleme3:
    {
        type: String,
        required:true,
    },
    paketleme4:
    {
        type:String,
        required:true,
    },
    MiktarKonteyner:
    {
        type : String,
        required:true,
    },
    konteynerTürü:
    {
        type: String,
        required:true,
    },
    bosaltmaYeri:
    {
        type:String,
        required:true,
    }, bosaltmaYeri2:
    {
        type:String,
        required:true,
    },kons:
    {
        type:String,
        required:true,
    },faturaFirması:
    {
        type:String,
        required:true,
    },aliciFirması:
    {
        type:String,
        required:true,
    },ekacıklama:
    {
        type:String,
        required:false,
    },tasimaSekli:
    {
        type:String,
        required:true,
    },
    ödemesekil :
    {
        type:String,
        required:true,
    },paraBirimi:
    {
        type:String,
        required:true,
    },aralik1:
    {
        type :String,
        required:true,
    },aralik2:
    {
        type :String,
        required:true
    },
    userEmail:
    {
        type:String,
        require:true,
    },
    aciklamaasil:{
        type:String,
        require :false,
    }, markalama  :{
        type:String,
        require:true,
    },
    ilaclama   :{
        type:String,
        require:true,
    },
    gozetmen   :{
        type:String,
        require:true,
    },
    ekaciklama :
    {
        type:String,
        require:false,
    },durum:
    {
        type :String,
        require : true ,
    },
    firmaIhbar1:
    {
        type:String,
        require:true,
    }, firmaIhbar2 :  {
        type:String,
        require:true,
    }, refaransNo :
    {
        type : String,
        require :true,
    },
    basket:
    {
        type : String,
        require:true,
    }
   
})

basketSchema.pre("save", async function (next) {
    const doc = this;   
    next();
});

module.exports = basketModel = mongoose.model("basket", basketSchema,"basket");