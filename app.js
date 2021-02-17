const express = require('express')
const mongoose = require('mongoose')
const path = require('path')


const config = require('config')
const authRouter = require('./routes/auth.routes')


const app = express()
// const PORT = config.get('port') || 5000
const PORT = process.env.PORT || 5000

app.use(express.json({ extended: true }))
app.use(express.static('public'))

app.use((req, res, next) => {
    console.log("Middleware: REQUEST ->", req.url, "->", new Date().toLocaleString())
    next()
})

app.use('/api/auth', authRouter) // основной router приложения
app.use('/api/products', require('./routes/product.routes')) // список продутов в системе
app.use('/api/baskets', require('./routes/basket.routes'))
app.use('/api/goods', require('./routes/goods.routes')) // список продуктов
app.use('/api/presets', require('./routes/preset.routes')) // роуты пресетов

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join('client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('client', 'build', 'index.html'))
    })
}

async function connectToDB() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            connectTimeoutMS: 3000
        }).then(() => {
            console.group("Server:")
            console.log("Server -> connected to db successfuly!")
            console.groupEnd()
        })
    } catch (e) {
        console.group("Server:")
        console.log(`Ошибка подключения к db: `, e.message)
        console.groupEnd()
        connetToDB()
    }
}

app.listen(PORT, () => {
    console.log(`Work!`)
    console.groupEnd()
})

//----------Execution----------
console.group("Server:")
console.log(`Starting... on port: ${PORT}`)

connectToDB()

