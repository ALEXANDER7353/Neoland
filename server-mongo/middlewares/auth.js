const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No estas autorizado, Joquin te pego con la porra' })
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log("🚀 ~ authenticate ~ decode:", decode)
        next()
    } catch (error) {
        console.log("🚀 ~ authenticate ~ error:", error)
        return res.status(401).json({ message: 'Token invalido' })

    }

}

module.exports = authenticate