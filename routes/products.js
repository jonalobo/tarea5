const { Router } = require('express')
const { addProduct } = require('../controller/productosController')

const rutaAgregar = Router()

rutaAgregar.get('/', addProduct)

module.exports = rutaAgregar