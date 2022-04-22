const fs = require ('fs')


class Contenedor{
    constructor(file){
        this.file = file; 
    }
    async save(object){
        try {
            let contenido = await fs.promises.readFile(this.file, 'utf-8');
            const data = JSON.parse(contenido);
            let idNumero= 0;
            if(data.length == 0){
                idNumero = 1;
            }else{
                let sumandoId = 0
                data.forEach(element => {
                    sumandoId = element.id
                });
                idNumero = sumandoId + 1;
            }
            let objeto = {
                nombre: object.nombre,
                price: object.price,
                id:idNumero
            }
            data.push(objeto);
            await fs.promises.writeFile(this.file, JSON.stringify(data));
            console.log(`El último id del objeto recibido es ${idNumero}`)
        } catch (error) {
            console.log(error);
        }
    }
    async getById(id){
        try {
            let contenido = await fs.promises.readFile(this.file, 'utf-8');
            const data = JSON.parse(contenido); 
            let findProduct = data.find((producto)=>producto.id === id);
            if(findProduct=== undefined){
                console.log(null)
            }else{
                console.log(findProduct)
            }
        } catch (error) {
            console.log(error);
        }
    } 
    async getAll(){
        try {
            let contenido = await fs.promises.readFile(this.file, 'utf-8');
            const data = JSON.parse(contenido); 
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
    async deleteById(id){
        try {
            let contenido = await fs.promises.readFile(this.file, 'utf-8');
            const data = JSON.parse(contenido); 
            let findProduct = data.find((producto)=>producto.id === id);
            if(findProduct){
                const borrarProducto = data.filter((producto)=> producto.id !== id);
                await fs.promises.writeFile(this.file, JSON.stringify(borrarProducto))
                console.log("El producto fue eliminado")
            }else{
                console.log("Producto no encontrado")
            }
        } catch (error) {
            console.log(error);
        }
    }
    async deleteAll(){
        try {
            const eliminarTodo = [];
            await fs.promises.writeFile(this.file, JSON.stringify(eliminarTodo))
            console.log("Todo eliminado")
        } catch (error) {
            console.log(error)
        }
    }

}   

module.exports = Contenedor; 

// let contenedor1= new Contenedor("clase3/productos.txt")

// async function run(){
//     await contenedor1.save({nombre: "medias", price: 25.84});
//     await contenedor1.getById(3)
//     await contenedor1.getAll();
//     await contenedor1.deleteById(1);
//     await contenedor1.deleteAll();
// }

// run()




