const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
        // console.log("Token:", token);
        if (!token) {
            return res.status(401).json({ message: 'Нет авторизации' })
        }

        jwt.verify(token, config.get('jwtSecret'), (err, decoded) => {
            if (err) {
                res.status(401).json({ message: err })
            } else {
                req.user = decoded
                next()
            }
        })
    } catch (e) {
        return res.status(401).json({ message: 'Нет авторизации (common)' })
    }
}