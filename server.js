const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var dotenv = require('dotenv');
dotenv.config();
var url = process.env.MONGOLAB_URI;
var createError = require("http-errors");

const app = express();

/* MODEL IMPORTS */
const kullaniciModel = require("./models/kullanici.js");
const konteynerModel = require("./models/konteyner.js");
const sepetModel = require("./models/sepet.js")
const basketModel = require("./models/basket.js")



/* MIDDLEWARES */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* INIT DB */
mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error: ", err));

const konteynerSchema = require("./validationSchemas/konteynerSchema");
const konteyner = require("./models/konteyner.js");
const sepetSchema = require("./validationSchemas/sepetSchema");
const sepet = require("./models/sepet.js");

const sepet = require("./models/basket.js");
const basketSchema = require("./validationSchemas/basketSchema");
/* ROUTES */
app.get("/", (req, res) => {
    res.send("root");
});

app.get("/genelVeri", async (req, res, next) => {
    try {
        Promise.all([
           kullaniciModel.find({}).select({ _id: 0 })
        ]).then(([users]) => {
           console.log(users);
            res.json({
                users,
            });
        });
    } catch (err) {
        next(err);
    }
});
app.post("/konteyner", async (req, res, next) => {
    try {
        const { error } = konteynerSchema.validate(req.body);
        if (error) {
            throw createError(400, error);
        }

        const yeniTalep = new konteynerModel(req.body);

        await yeniTalep.save();

        res.send(`kaydedildi.`);
    } catch (err) {
        next(err);
    }
});
app.delete("/konteyner", async(req, res, next)=> {
    try{
        konteynerModel.remove({
        }, function(err){
            if (err) {
                console.log(err)
            }
            else {
                res.send("Removed");
            }
        });

       
    } catch (err) {
        next(err);
    }
});
app.get("/konteyner", async (req, res, next) => {
    try {
        const requests = await konteynerModel.find({}).select({ _id: 0 });
        res.json(requests);
    } catch (err) {
        next(err);
    }
});

app.post("/sepet", async (req, res, next) => {
    try {
        const { error } = sepetSchema.validate(req.body);
        if (error) {
            throw createError(400, error);
        }

        const yeniTalep = new sepetModel(req.body);

        await yeniTalep.save();

        res.send(`kaydedildi.`);
    } catch (err) {
        next(err);
    }
});
app.delete("/sepet", async(req, res, next)=> {
    try{
        sepetModel.remove({
        }, function(err){
            if (err) {
                console.log(err)
            }
            else {
                res.send("Removed");
            }
        });

       
    } catch (err) {
        next(err);
    }
});
app.get("/sepet", async (req, res, next) => {
    try {
        const requests = await sepetModel.find({}).select({ _id: 0 });
        res.json(requests);
    } catch (err) {
        next(err);
    }
});




app.post("/basket", async (req, res, next) => {
    try {
        const { error } = basketSchema.validate(req.body);
        if (error) {
            throw createError(400, error);
        }

        const yeniTalep = new basketModel(req.body);

        await yeniTalep.save();

        res.send(`kaydedildi.`);
    } catch (err) {
        next(err);
    }
});
app.delete("/basket", async(req, res, next)=> {
    try{
        basketModel.remove({
        }, function(err){
            if (err) {
                console.log(err)
            }
            else {
                res.send("Removed");
            }
        });

       
    } catch (err) {
        next(err);
    }
});
app.get("/basket", async (req, res, next) => {
    try {
        const requests = await basketModel.find({}).select({ _id: 0 });
        res.json(requests);
    } catch (err) {
        next(err);
    }
});
/* ERROR HANDLER */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message });
});

/* 404 HANDLER */
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});

/* SERVER RUNNER */
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
