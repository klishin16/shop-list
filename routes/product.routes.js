const { Router } = require('express')

const Product = require('../models/Product')
// const auth = require('./middleware/auth.middleware')

const router = Router()

router.get('/', async (req, res) => {
    try {
        console.log('here');
        const products = await Product.find()
        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так при попытке получения списка существующих в системе продуктов" })
    }
})

router.post('/', async (req, res) => {
    try {
        const potenshialProduct = req.body
        Product.create(potenshialProduct, (err) => {
            if (err) {
                res.status(400).json({ message: err })
            } else {
                res.status(201).json({ message: "Продукт успешно создан" })
            }
        })
    } catch (e) {
        res.status(500).json({ message: "Ошибка при создании продукта" })
    }
})

router.get('/:id', async (req, res) => {
    try {
        console.log('Server -> Product (GET)');
        Product.findOne({ _id: req.params.id }, (err, instance) => {
            if (err) {
                res.status(400).json({ message: err })
            } else {
                res.status(200).json(instance)
            }
        })
    } catch (e) {
        res.status(500).json({ message: "Error ( \n Try again" })
    }
})

router.post('/:id', async (req, res) => {
    try {
        console.log('Server -> Product (POST)');
        const filter = { _id: req.params.id }
        const updateObj = req.body
        console.log("UpdateObj:", updateObj);
        Product.findOneAndUpdate(filter, updateObj, (err, instance) => {
            if(err) {
                res.status(400).json({ message: err })
            } else {
                res.status(202).json(instance)
            }
        })
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так при попытке обновить продукт" })
    }
})

module.exports = router
