const { Router } = require('express')

const Preset = require('../models/Preset')
const auth = require('../middleware/auth.middleware')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const presets = await Preset.find()
        res.status(200).json(presets)
    } catch (e) {
        res.status(500).json({ message: e.message, desc: "Что-то пошло не так при попытке получения списка существующих в системе пресетов" })
    }
})

router.post('/', auth, async (req, res) => {
    try {
        const potenshialPreset = req.body
        potenshialPreset.owner = req.user.userId
        Preset.create(potenshialPreset, (err) => {
            if (err) {
                res.status(400).json({ message: err })
            } else {
                res.status(201).json({ message: "Пресет успешно создан" })
            }
        })
    } catch (e) {
        res.status(500).json({ message: e.message, desc: "Ошибка при создании пресета" })
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
