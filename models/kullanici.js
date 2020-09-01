const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates ||Kullanci|| Schema

const kullanciSchema = new Schema({
    _email : String,
    _telefon : String,
    _firma : String,
    _isim : String, 
    _soyisim : String,
    _sifre : String 

})
module.exports = kullaniciModel = mongoose.model("users",kullanciSchema,"users")