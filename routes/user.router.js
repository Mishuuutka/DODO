const { Router } = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.post('/user/login', userController.loginUser)


module.exports = router