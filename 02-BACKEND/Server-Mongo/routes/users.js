const express = require('express')
const authenticate = require('../middlewares/auth')

const { updateUser, deleteUser,createUser } = require('../controllers/users')

const router = express.Router()

router.post('/', createUser)
router.put('/:id', authenticate, updateUser)
router.delete('/:id', authenticate, deleteUser)


module.exports = router