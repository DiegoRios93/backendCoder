const express = require("express");
const {Server : ioServer} = require('socket.io')
const http = require('http')
const app = express();
const ppal = require ('./rutas.js');
const path = require ('path');
//////////////////////////////
//websocket


const httpServer = http.createServer(app)
const io = new ioServer(httpServer)

const messages = [
    {author: "Juan", text: "Hola, como va"},
    {author: "Pedro", text: "Muy bien cheee!"},
    {author: "Diego", text: "Genial!"}
]
////////////
app.use(express.static(__dirname+'./views'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.urlencoded({ extended: true }));

app.use("/", ppal);


//NUEVO SERVER WEBSOCKET
io.on('connection',(socket)=>{
    console.log('New client connected id:', socket.id)
    socket.emit('messages', messages)

    socket.on("newMessage", message=>{
        messages.push(message)
        io.sockets.emit('messages', messages)
    })
    
})

const PORT = 8090;

httpServer.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})

