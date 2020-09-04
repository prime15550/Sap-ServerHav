const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Creates ||Kullanci|| Schema

const kullanciSchema = new Schema({
    _email :{type : String,require:true,},
    _telefon :{type: String,require:true,},
    _firma :{type: String,require:true},
    _isim : {type:String, required:true,},
    _soyisim :{type: String,require:true,},
    _sifre :{type: String,require:true,}, 

})
module.exports = kullaniciModel = mongoose.model("users",kullanciSchema,"users")