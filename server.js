const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
var createError = require("http-errors");

const app = express();

/* MODEL IMPORTS */
const kullanciModel = require("./models/kullanici");


/* MIDDLEWARES */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* INIT DB */
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error: ", err));


    const talepSchema = require("./validationSchemas/konteynerSchema");
const konteynerSchema = require("./validationSchemas/konteynerSchema");

/* ROUTES */
 
app.get("/", (req, res) => {
    res.send("Eti Maden Projesi Root");
});
app.get("/genelVeri", async (req, res, next) => {
    try {
        Promise.all([
            kullanciModel.find({}).select({ _id: 0 }),
            
        ]).then(([kullanici]) => {
            res.json({
              kullanici
            });
        });
    } catch (err) {
        next(err);
    }
});

app.post("/tempkonteyner", async (req, res, next) => {
    try {
        const { error } = konteynerSchema.validate(req.body);
        if (error) {
            throw createError(400, error);
        }

        const yeniTalep = new requestsModel(req.body);

        await yeniTalep.save();

        res.send(`Talep No ${yeniTalep.toObject().TalepNo} kaydedildi.`);
    } catch (err) {
        next(err);
    }
});

app.get("/tempkonteyner", async (req, res, next) => {
    try {
        const requests = await requestsModel.find({}).select({ _id: 0 });
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
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
