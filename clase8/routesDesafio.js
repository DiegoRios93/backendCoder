const {Router} = require ("express");
const router =  Router();
const _ = require ('underscore');

let productos = [];

router.get('/', (req,res)=>{
    res.json({productos: productos})
})

router.get('/:id', (req,res)=>{
    const {id} = req.params
    if(isNaN(id)){
        return res.send("El parámetro no es un número")
    }
    if(id>productos.length||id<1){
        return res.send("El número de producto solicitado excede la cantidad de productos totales")
    }
    return res.send(productos[id-1])
})

router.post('/', (req,res)=>{
    const {title, price} = req.body
    if(title&&price){
        const id = productos.length+1;
        const producto = {...req.body, id};
        productos.push(producto)
        res.json({mensaje: "Producto agregada con éxito"})
    }else{
        res.send("Bad request, incomplete")
    }
})

router.put('/:id', (req,res)=>{
    const {id} = req.params;
    const {title, price} = req.body;
    if(title&&price){
        _.each(productos, (product, i)=>{
            if(product.id == id){
                product.title = title;
                product.price = price;
            }
        });
        res.send("Producto actualizado con éxito");
    }else{
        res.send("ERROR")
    }

})

router.delete('/:id', (req,res)=>{
    const { id } = req.params;
    _.each(productos, (product, i)=>{
        if(product.id == id){
            productos.splice(i, 1);
        }
    });
    res.send("Producto eliminado con éxito")
})

module.exports = router