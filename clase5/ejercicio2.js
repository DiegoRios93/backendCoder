const productos = [
    {id:1, nombre: "Escuadra", precio: 323.45},
    {id:2, nombre: "Calculadora", precio: 234.56},
    {id:3, nombre: "Globo Terraqueo", precio: 45.67},
    {id:4, nombre: "Paleta Pintura", precio: 456.78},
    {id:5, nombre: "Reloj", precio: 67.89},
    {id:6, nombre: "Agenda", precio: 78.90},
]


//inciso A
const nombres = productos.map(producto=>producto.nombre).join(", ")
console.log(nombres)


//inciso B
let total = 0;
for(const producto of productos){
    total=total+producto.precio
}
console.log(total)

//inciso C

let promedio = total/productos.length
console.log(promedio)

//inciso D

let minPrecio= productos[0].precio
let productoMin = productos[0];
for(const producto of productos){
    if(producto.precio<minPrecio){
        minPrecio = producto.precio
        productoMin = producto
    }
}
console.log(productoMin)

//inciso E

let maxPrecio= productos[0].precio
let productoMax = productos[0];
for(const producto of productos){
    if(producto.precio>maxPrecio){
        maxPrecio = producto.precio
        productoMax = producto
    }
}
console.log(productoMax)

//inciso F

const ojetoResultados = {
    nombres:,
    total:,
    promedio:,
    productoMin:,
    productoMax:,
}
