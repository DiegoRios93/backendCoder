const Contenedor = require("./clase3.js")

let contenedor1= new Contenedor("clase3/productos.txt")

async function run(){
    //await contenedor1.save({nombre: "medias", price: 25.84});
    await contenedor1.getById(3)
    await contenedor1.getAll();
    //await contenedor1.deleteById(1);
    //await contenedor1.deleteAll();
}

run()