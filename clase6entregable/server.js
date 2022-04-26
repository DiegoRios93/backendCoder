const Contenedor = require("../clase3/clase3.js")
let contenedor2 = new Contenedor("./clase3/productos.txt")

const express = require('express')

const app = express()
const PORT = 8081;
app.listen(8081)
console.log(`Servidor express escuchando en el puerto ${PORT}`)

app.get('/', (req, res)=>{
    res.send("En el /productos se verá, reflejados los productos y en /productoRandom uno de los productos elegido al azar")
});


app.get('/productos',async (req, res)=>{
    console.log("mostrando productos")
    const todos = await contenedor2.getAll()
    res.json(todos)
})

app.get('/productoRandom', async (req, res)=>{
    console.log("mostrando producto elegido al azar")
    const mostrarAzar = await contenedor2.rand()
    res.send(mostrarAzar)
})
