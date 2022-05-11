const express = require('express')
const app =  express()
const routesDesafio =  require ("./routesDesafio");


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));

//rutas

app.use('/api/productos', routesDesafio)

//empezando servidor 

const PORT = 8085;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

