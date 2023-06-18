require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressFileUpload = require("express-fileupload");
var cors = require('cors');
const path = require('path');
const passsport = require('passport');
const exphbs = require('express-handlebars');
const routes = require('./src/routes/index');

const port = process.env.APP_PORT || 4000
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressFileUpload({}));
app.use(express.json());
app.use(passsport.initialize());
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/', routes);
app.use(function(req, res, next) {
    res.status(404).send("Oops! The page you're looking for does not exist.");
    next();
});

// require('./middleware/passport')(passsport)

const start = async () => {
    try {
        // connect mongodb database
        mongoose.set("strictQuery", false);
        await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@restaurant.ukiljgv.mongodb.net/${process.env.DATABASE_NAME}`)
        .then(() => console.log("DATABASE CONNECTED |> MONGODB"))
        // start rest api
        app.listen(port, () => {
            console.log(`SERVER STARTED ${process.env.APP_HOST} PORT: ${port}`);
        })
    }
    catch(e){
        console.error(`SERVER| ${e}`);
    }
}

start();