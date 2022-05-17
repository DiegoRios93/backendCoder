const socket = io()
//const socket = io.connect('http://localhost:8092', { forceNew: true });


const divMessages = document.querySelector('#messages')
const button = document.querySelector('#button')


button.addEventListener("click", (e)=>{
    const inputNombre = document.querySelector('#nombre').value
    const inputTexto = document.querySelector('#texto').value
    const message = {
        author: inputNombre,
        text: inputTexto
    }
    socket.emit("newMessage", message)
})

socket.on('messages', (messages)=>{
    console.log(messages)
    divMessages.innerHTML = messages.map(message=>{
        return(
            `<div>
                <strong>${message.author}</strong>
                <p>${message.text}</p>
            </div>`
        )
    }).join(" ")
})