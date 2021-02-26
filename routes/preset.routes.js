const { Router } = require('express')

const Preset = require('../models/Preset')
const Purchase = require('../models/Purchase')
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

router.get('/mobile', async (req, res) => {
    try {
        Preset.find().populate({
            path: 'purchases',
            populate: {
                path: 'good',
                populate: {
                    path: 'product'
                },
            }
        }).exec((err, presets) => {
            if (err) {
                res.status(400).json({ message: err })
            } else {
                res.status(200).json(presets)
            }
        })
    } catch (e) {
        res.status(500).json({ message: e.message, desc: "Что-то пошло не так при попытке получения списка существующих в системе пресетов" })
    }
})

router.get('/:id', async (req, res) => {
    try {
        console.log('Server -> Preset (GET)');
        const filter = { _id: req.params.id }
        Preset.findOne(filter).populate({
            path: 'purchases',
            populate: {
                path: 'good',
                populate: {
                    path: 'product'
                },
            }
        }).exec((err, instance) => {
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
        console.log('Server -> Preset (POST)');
        const filter = { _id: req.params.id }
        const updateObj = req.body
        console.log("UpdateObj:", updateObj);
        Product.findOneAndUpdate(filter, updateObj, (err, instance) => {
            if (err) {
                res.status(400).json({ message: err })
            } else {
                res.status(202).json(instance)
            }
        })
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так при попытке обновить пресет" })
    }
})

router.post('/:id/addPurchase', async (req, res) => {
    try {
        console.log('Server -> Preset Add Purchase (POST)');
        const filter = { _id: req.params.id }
        const purchaseObj = req.body
        console.log("GoodObj:", purchaseObj);
        Purchase.create(purchaseObj, (err, purchase) => {
            if (err) {
                res.status(400).json({ message: err })
            } else {
                Preset.findOne(filter, (err, preset) => {
                    if (err) {
                        res.status(400).json({ message: err })
                    } else {
                        preset.purchases.push(purchase)
                        preset.save()
                        res.status(202).json(purchase)
                    }
                })
            }
        })
    } catch (e) {
        res.status(500).json({ message: e.message, des: "Что-то пошло не так при попытке добавить purchase" })
    }
})

router.post('/:id/patchPurchases', async (req, res) => {
    try {
        console.log('Server -> Preset Patch Purchase (POST)');
        const filter = { _id: req.params.id }
        const purchasesObj = req.body
        console.log("PurchasesObj:", purchasesObj);
        Purchase.create(purchasesObj, (err, purchases) => {
            if (err) {
                res.status(400).json({ message: err })
            } else {
                Preset.findOne(filter, (err, preset) => {
                    if (err) {
                        res.status(400).json({ message: err })
                    } else {
                        preset.purchases = purchases
                        preset.save()
                        res.status(202).json(purchases)
                    }
                })
            }
        })
    } catch (e) {
        res.status(500).json({ message: e.message, des: "Что-то пошло не так при попытке добавить purchase" })
    }
})

module.exports = router
