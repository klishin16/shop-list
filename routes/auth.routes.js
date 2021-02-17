const { Router } = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')
const router = Router()

router.post('/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', "Incorrect password").isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: "Incorrect creditances" }).end()
            }

            console.info("Here: 0")

            const { email, password } = req.body

            const candidate = await User.findOne({ email })

            if (candidate) {
                console.info("Here: 1")
                return res.status(400).json({ message: "Такой пользователь уже зарегистрирован" }).end()
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ email, password: hashedPassword })
            user.save()
            res.status(201).json({ message: "User was created successfuly!" })


        } catch (e) {
            console.info("Drop :(")
            //res.status(500).json({ message: "Error ( \n Try again" })
        }
    })

router.post('/login',
    [
        check('email', 'Incorrect email').normalizeEmail().isEmail(),
        check('password', "Введите пароль").exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            console.log('SERVER -> login');

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: "Incorrect creditances" })
            }

            const { email, password } = req.body

            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден!' })
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова!' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.status(200).json({ token, userId: user.id })

        } catch (e) {
            console.log(e)
            res.status(500).json({ message: "Что-то прошло не так, попробуйте снова" })
        }
    })

module.exports = router
