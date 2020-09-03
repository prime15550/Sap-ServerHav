const mongoose = require("mongoose");
const { Int32 } = require("mongodb");

const Schema = mongoose.Schema;

//Creates ||Kullanci|| Schema

const kullanciSchema = new Schema({
    _email : String,
    _telefon : String,
    _firma : String,
    _isim : String, 
    _soyisim : String,
    _sifre : String,
    _orderCount:Int32,

})
module.exports = kullaniciModel = mongoose.model("users",kullanciSchema,"users")