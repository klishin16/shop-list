const { Router } = require('express')

const Basket = require('../models/Basket')
const Purchase = require('../models/Purchase')
const User = require('../models/user')
const auth = require('../middleware/auth.middleware')


const router = Router()

// корзина получается для коткретного пользователя
router.get('/', auth, async (req, res) => {
    try {
        const basket = await Basket.find({ owner: req.user.userId })
        res.status(200).json(basket)
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так при попытке получения всех корзин пользователя" })
    }
})

router.post('/', auth, async (req, res) => {
    try {
        const potenshialBasket = req.body
        // const user = await User.findById(req.user.userId)
        potenshialBasket.owner = req.user.userId
        Basket.create(potenshialBasket, (err) => {
            if (err) {
                res.status(400).json({ message: err })
            } else {
                res.status(201).json({ message: "Корзина успешно создана" })
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Ошибка при создании корзины" })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        Basket.findOne(filter)
            .populate({
                path: 'purchases',
                populate: {
                    path: 'good',
                    populate: {
                        path: 'product'
                    }
                },
            })
            .exec((err, basket) => {
                if (err) {
                    res.status(400).json({ message: err.message })
                } else {
                    res.status(200).json(basket)
                }
            })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

router.post('/:id', async (req, res) => {
    try {
        console.log('Server -> Basket (POST)');
        const filter = { _id: req.params.id }
        const updateObj = req.body
        // console.log("Basket -> UpdateObj:", updateObj);
        Basket.findOneAndUpdate(filter, updateObj, (err, instance) => {
            if (err) {
                res.status(400).json({ message: err.message })
            } else {
                res.status(202).json(instance)
            }
        })
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так при попытке обновить корзину" })
    }
})

router.post('/:id/addGood', async (req, res) => {
    try {
        console.log('Server -> Basket Add Good (POST)');
        const goodInBasketObj = req.body
        console.log("Basket Add Good -> goodInBasketObj:", goodInBasketObj);
        //TODO await???

        const filter = { _id: req.params.id }
        Basket.findOne(filter).populate('goods').exec((basketErr, basket) => {
            if (basketErr) {
                return res.status(400).json({ message: basketErr })
            } else {
                //если продукт уже есть в корзине увеличиваем его количество
                let flag = false
                basket.purchases.forEach((item, index) => {
                    if (item.good == goodInBasketObj.good) {
                        GoodInBasket.findOne({ _id: item._id }, (err, gib) => {
                            gib.things++
                            gib.save()
                        })
                        
                        flag = true
                    }
                })
                if (flag) {
                    return res.status(200).json({ message: "Товар успешно добавлен в корзину!" })
                }

                //иначе
                Purchase.create(goodInBasketObj, (err, goodInBasket) => {
                    if (err) {
                        return res.status(400).json({ message: err })
                    } else {
                        basket.purchases.push(goodInBasket._id)
                        basket.save()
                        res.status(200).json({ message: "Товар успешно добавлен в корзину!" })
                    }
                })
            }
        })
    } catch (e) {
        res.status(500).json({ message: e.message, desc: "Что-то пошло не так при попытке добавить товар в корзину корзину" })
    }
})

router.post('/:id/addPreset', async (req, res) => {
    try {
        console.log('Server -> Basket -> Add Preset (POST)');
        const filter = { _id: req.params.id }
        const purchasesObj = req.body
        Basket.findOne(filter).exec((basketErr, basket) => {
            if (basketErr) {
                res.status(400).json({ message: basketErr })
            } else {
                // let purchaseRequests = purchasesObj.map(purchaseObj => Purchase.create(purchaseObj))
                // Promise.all(purchaseRequests)
                //     .then(responses => responses.forEach(purchase => {
                //         console.log("Callback Purchase:", purchase);
                //         basket.purchases.push(purchase)
                //     }))
                //     .then(() => basket.save())
                //     .then(() => res.status(200).json("Успешно!"))
                //     .catch(err => {
                //         console.log("here");
                //         res.status(400).json({ message: err })
                //     })
                purchasesObj.forEach(purchaseObj => {
                    basket.purchases.push(purchaseObj)
                })
                basket.save(() => (err, basket) => {
                    if (err) {
                        res.status(400).json({ message: err })
                    } else {
                        res.status(200).json({ message: "Пресет успешно добавлен в корзину!", basket })
                    }
                })
            }
        })
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так при попытке добавить пресет" })
    }
})

module.exports = router
