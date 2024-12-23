const express = require('express')
//const authenticate = require('../middlewares/auth')

const { createUser, readUser,updateUser } = require('../controllers/users')

const router = express.Router()


router.post('/', createUser);
router.get('/:id?', readUser);
router.put('/:id', updateUser);


module.exports = router;