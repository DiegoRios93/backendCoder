const express = require('express')
const {Server : ioServer} = require('socket.io')
const http = require('http')
const app = express()

const httpServer = http.createServer(app)
const io = new ioServer(httpServer)

const messages = [
    {author: "Juan", text: "Hola, como va"},
    {author: "Pedro", text: "Muy bien cheee!"},
    {author: "Diego", text: "Genial!"}
]

//midleware
app.use(express.static(__dirname+'/public'))

// NUEVO SERVIDOR
io.on('connection',(socket)=>{
    console.log('websocket funcionando', socket.id)
    socket.emit('messages', messages)
})



const PORT = 8092
httpServer.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})
