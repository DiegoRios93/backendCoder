const socket = io()


//const socket = io.connect('http://localhost:8090', { forceNew: true });

const divMessages = document.querySelector('#messages')
const divMostrar = document.querySelector('#mostrarP')
const button = document.querySelector('#button')
const addP = document.querySelector('#adicion')

//agregar a websocket los productos

addP.addEventListener("click", (event)=>{
    const inputMarca = document.querySelector('#marca').value
    const inputPrecio = document.querySelector('#precio').value
    const producto = {
        title: inputMarca,
        price: inputPrecio
    }
    socket.emit("newProduct", producto)
});

socket.on('productos', (productos)=>{
    console.log(productos)
    divMostrar.innerHTML = productos.map(producto=>{
        return(
            `<tr>
                <th>${producto.id}</td>
                <td>${producto.title}</td>
                <td>$${producto.price}</td>
            </tr>`
        )
    }).join(" ")
});


// 
button.addEventListener("click", (event)=>{
    const inputNombre = document.querySelector('#email').value
    const inputTexto = document.querySelector('#texto').value
    const message = {
        author: inputNombre,
        text: inputTexto
    }
    socket.emit("newMessage", message)
});

socket.on('messages', (messages)=>{
    console.log(messages)
    divMessages.innerHTML = messages.map(message=>{
        return(
            `<div>
                <strong class="autor">${message.author}</strong>
                <span class="hora">${message.date}</span>:
                <em class="mensaje">${message.text}</em>
            </div>`
        )
    }).join(" ")
});



