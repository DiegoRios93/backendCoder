
const {Router} = require("express");
const Producto = require('./container/contenedor');
const path = require("path");

const productoDePrueba = new Producto();

// // arrancar con algunos prodcuts

// productoDePrueba.guardarProducto({title: 'Adidas', price: 500, thumbnail: 'urlDePrueba'});
// productoDePrueba.guardarProducto({title: 'Nike', price: 480, thumbnail: 'urlDePrueba'});
// productoDePrueba.guardarProducto({title: 'Head', price: 350, thumbnail: 'urlDePrueba'});

const router = Router();

router.get('/', (req, res)=>{
    res.render('index');
})

// router.get('/api/productos', (req, res)=>{
//     let product = productoDePrueba.obtenerTodosLosProductos()
//     res.render('products', {productos : product});
// })

router.get('/api/productos/:id', (req, res)=>{
    const {id} = req.params;
    res.json(productoDePrueba.obtenerProductoPorId(id));
})

router.post('/api/productos', (req, res)=>{
    const producto = req.body;
    productoDePrueba.guardarProducto(producto);
    res.redirect("/")
})

// router.put('/api/productos/:id', (req, res)=>{
//     const {id} = req.params;
//     const {title, price, thumbnail} = req.body;
//     productoDePrueba.modificarProducto(id, title, price, thumbnail)
//     res.json(productoDePrueba.obtenerProductoPorId(id));
// })

// router.delete('/api/productos/:id', (req, res)=>{
//     const {id} = req.params;
//     res.json(productoDePrueba.borrarProductoPorId(id));
// })

module.exports = router;