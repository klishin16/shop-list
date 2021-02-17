const { Router } = require('express')

const Good = require('../models/Good')
const auth = require('../middleware/auth.middleware')

const router = Router()

router.get('/', auth, async (req, res) => {
    console.log("Server -> Goods (GET)");
    try {
        const goods = await Good.find().populate('product')
        res.status(200).json(goods)
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так при попытке получения списка товаров" })
    }
})

router.post('/', auth, async (req, res) => {
    try {
        console.log("Server -> Good (POST)");
        const potenshialGood = req.body
        Good.create(potenshialGood, (err) => {
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
