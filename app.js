const express = require('express')
require('dotenv').config()
const hbs = require('hbs')
const rutaAgregar = require('./routes/products')

const app = express()

const PORT = process.env.PORT

app.use(express.static('public'))
app.set('view engine','hbs')

hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.use('/api/productos', rutaAgregar)

const servidor = app.listen(PORT,()=>{
    console.log(`Servidor En línea en el puerto ${PORT}`)
})
servidor.on(Error,(err)=>console.log(err))