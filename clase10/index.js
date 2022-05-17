const express = require("express");
const app = express();
const main = require ('./rutas.js');
const path = require ('path');



app.use(express.urlencoded({ extended: true }));


//motor de plantilla

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use("/", main);
app.use(express.static("./views"));



const PORT = 8090;

const server = app.listen(PORT, ()=>{
         console.log("Servidor corriendo en el puerto ", PORT);
})


// const express = require("express");
// const app = express();

// const routesProductos = require('../clase8conClase/rutas');

// //app.use(express.static(__dirname+"/public"));

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use('/api/productos', routesProductos);

// //handlebars
// const fs = require('fs')
// const handlebars = require("express-handlebars")
// app.set('views', './views')
// app.set('view engine', 'hbs')
// app.engine('hbs', handlebars.engine({
//     extname: ".hbs",
//     defaultLayout:"index.hbs", 
//     layoutsDir:__dirname+"views/layouts",
//     partialsDir:__dirname+"views/partials",
// })
// )
// const productos = [];

// app.get('/', (req,res)=>{
//     res.render("main", {productos})
// })
// //


// const PORT = 8090;

// const server = app.listen(PORT, ()=>{
//     console.log("Servidor corriendo en el puerto ", PORT);
// })
//const ejs = require ('ejs')
//const routesProductos = require('./rutas');
//app.use("/public", express.static(path.join(__dirname, "./public")));
//app.use('/api/productos', routesProductos);

