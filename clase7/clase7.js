const express = require('express')

const app =  express()
const frase = 'Hola mi nombre es Diego';

//middlewares
//ver app.use(morgan), visto en clase
app.use(express.json())

//empezando servidor 

const PORT = 8082
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

app.get('/api/frase', (req, res)=>{
    res.send(frase)
})

app.get('/api/letras/:num', (req, res)=>{
    const {num} = req.params;
    if(isNaN(num)){
       return res.send({error: "El parametro no es un numero"});
    }if (num > frase.length || num < 1){
        return res.send({error: "El parametro esta fuera de rango"});
    }else{
        return res.send(frase[num-1])
    }
})

app.get('/api/palabras/:num', (req, res)=>{
    const {num} = req.params;
    if(isNaN(num)){
       return res.send({error: "El parametro no es un numero"});
    }
    const palabras = frase.split(' ')
    if (num > palabras.length || num < 1){
        return res.send({error: "El parametro esta fuera de rango"});
    }else{
        return res.send(palabras[num-1])
    }
})

