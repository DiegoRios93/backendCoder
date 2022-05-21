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
            `<div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">${producto.id}</th>
                            <td>${producto.title}</td>
                            <td>${producto.price}</td>
                        </tr>  
                    </tbody>
                </table>
            </div>`
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
        message.now = new Date().toLocaleString();
        return(
            `<div>
                <strong>${message.author}</strong>
                <span>${message.now}</span>:
                <em>${message.text}</em>
            </div>`
        )
    }).join(" ")
});



