const express = require("express");
const app = express();

const routesProductos = require('./clase8conClase/rutas');

app.use(express.static(__dirname+"/public"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/productos', routesProductos);

const PORT = 8090;

const server = app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto ", PORT);
})