const express = require('express')
//const authenticate = require('../middlewares/auth')

const { createUser, readUser } = require('../controllers/users')

const router = express.Router()


router.post('/', createUser)
router.get('/:id?', readUser);


module.exports = router;