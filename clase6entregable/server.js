const Contenedor = require("../clase3/clase3.js")
let contenedor2 = new Contenedor("./clase3/productos.txt")

const express = require('express')

const app = express()
const PORT = 8081;
app.listen(8081)
console.log(`Servidor express escuchando en el puerto ${PORT}`)

app.get('/', (req, res)=>{
    res.send("En el /products se verá, reflejados los productos y en /productoRandom uno de los productos elegido al azar")
})


app.get('/productos', (req, res)=>{
    const todos = contenedor2.getAll()
    res.send(todos)
})

app.get('/productoRandom', (req, res)=>{
    const todos = contenedor2.getAll()
    res.send()
})
