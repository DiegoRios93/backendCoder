const express = require("express");
const {Server : ioServer} = require('socket.io')
const http = require('http')
const app = express();
const ppal = require ('./rutas.js');
const path = require ('path');
const moment = require('moment')
//////////////////////////////
//websocket

let now = moment()
const httpServer = http.createServer(app)
const io = new ioServer(httpServer)

const messages = [
    {author: "diego@gmail.com", text: "Hola, como va", now},
    {author: "back@gmail.com", text: "Muy bien cheee!", now},
    {author: "coder@gmail.com", text: "Genial!", now}
]
////////////

const publicPatch = path.resolve(__dirname, 'public')
app.use(express.static(publicPatch))
//app.use(express.static(__dirname+'/public'));
//app.use(express.static(__dirname+'/views'));
console.log(__dirname+'/views')
//


//
//app.set("public", path.join(__dirname, "/public"));
app.set("views", path.join(__dirname, "./views"));

app.set("view engine", "ejs");

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

