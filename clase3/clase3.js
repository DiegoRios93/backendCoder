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
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    //
    async rand(){
        try {
            let contenido = await fs.promises.readFile(this.file, 'utf-8');
            const data = JSON.parse(contenido); 
            let azar = Math.floor(Math.random()*data.length);
            let valor = data[azar];
            return valor;
        } catch (error) {
            console.log(error)
        }
    }
    //
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






