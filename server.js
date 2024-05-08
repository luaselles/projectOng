//server.js
const express = require('express')
const expressEjsLayout = require('express-ejs-layouts');
let homeRoute = require("./routes/homeRoute");
const animalRoute = require('./routes/animalRoute');
const empresaParceiraRoutes = require('./routes/empresaParceiraRoute');
const voluntarioRoutes = require('./routes/voluntarioRoute');
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.set("layout", "./layout");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"))
app.use(expressEjsLayout);

app.use("/", homeRoute);
app.use('/', animalRoute);
app.use('/empresas-parceiras', empresaParceiraRoutes);
app.use('/', voluntarioRoutes);

app.listen(5000, function() {
    console.log("App rodando na porta 5000 - http://localhost:5000")
})



