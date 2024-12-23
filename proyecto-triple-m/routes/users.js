const express = require('express')
//const authenticate = require('../middlewares/auth')

const { createUser, readUser,updateUser,deleteUser } = require('../controllers/users')

const router = express.Router()


router.post('/', createUser);
router.get('/:id?', readUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;