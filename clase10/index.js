const express = require("express");
const {Server : ioServer} = require('socket.io')
const http = require('http')
const app = express();
const ppal = require ('./rutas.js');
const path = require ('path');

////// agregando prodcutos 21/5
///////////
///////////
const Producto = require('./container/contenedor');
//productos = [];
const productoDePrueba = new Producto();
let productos = []
productoDePrueba.guardarProducto({title: 'Adidas', price: 500, thumbnail: 'urlDePrueba'});
productoDePrueba.guardarProducto({title: 'Nike', price: 480, thumbnail: 'urlDePrueba'});
productoDePrueba.guardarProducto({title: 'Head', price: 350, thumbnail: 'urlDePrueba'});
const allProduct = () =>{
    productos = productoDePrueba.obtenerTodosLosProductos()
}

// arrancar con algunos prodcuts

//rutas

//////////////////////////////
///////
/////////
///////
//websocket


const httpServer = http.createServer(app)
const io = new ioServer(httpServer)
const date = new Date().toLocaleString();
const messages = [
    {author: "diego@gmail.com", text: "Hola, como va", date},
    {author: "back@gmail.com", text: "Muy bien cheee!", date},
    {author: "coder@gmail.com", text: "Genial!", date}
]
////////////

const publicPatch = path.resolve(__dirname, './public')
app.use(express.static(publicPatch))
console.log(__dirname+'/views')

app.set("views", path.join(__dirname, "./views"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", ppal);




//NUEVO SERVER WEBSOCKET
io.on('connection',(socket)=>{
    console.log('New client connected id:', socket.id)
    socket.emit('messages', messages)
    socket.emit('productos', productos)

    socket.on("newMessage", message=>{
        messages.push(message)
        io.sockets.emit('messages', messages)
    })
    socket.on("newProduct", producto=>{
        //productos.push(producto)
        productoDePrueba.guardarProducto(producto)//nuevo
        allProduct()//nuevo
        io.sockets.emit('productos', productos)
    })
})

const PORT = 8090;

httpServer.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})

