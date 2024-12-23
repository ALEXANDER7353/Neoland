const express = require('express')
//const authenticate = require('../middlewares/auth')

const { createUser, readUser } = require('../controllers/users')

const router = express.Router()


router.post('/', createUser)



module.exports = router;