const mongoose = require("mongoose");
const { Int32 } = require("mongodb");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    isim :
    {
        type : String,
        required : true ,
    },
    soyisim : 
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
        type : Int32,
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
    },aliciFirması:
    {
        type:String,
        required:true,
    },aliciFirması2:
    {
        type:String,
        require:true,
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
    }



})


module.exports = requestsModel = mongoose.model(
    "konteyner",
    RequestSchema,
    "konteyner"
);