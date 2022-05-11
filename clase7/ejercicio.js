const express = require('express')

const app =  express()

//middlewares
//ver app.use(morgan), visto en clase
app.use(express.json())

//empezando servidor 

const PORT = 8083
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

app.get('/api/sumar/:num1/:num2', (req,res)=>{
    const {num1,num2}= req.params
    let suma = Number(num1) + Number(num2)
    res.json(suma)
})

app.get('/api/sumar', (req,res)=>{
    const {num1,num2} = req.query
    let suma = Number(num1) + Number(num2)
    res.json(suma)
})

app.get('/api/operacion/:ope', (req,res)=>{
    const {ope} = req.params
    const nums = ope.split('+')
    let suma = Number(nums[0]) + Number(nums[1])
    res.json(suma)
})