var express = require('express');
var router = express.Router();
var user = require('./../controller/user')
var register = require('./../controller/register')
var login = require('./../controller/login')
var auth = require('./../middleware/auth')

/* GET home page. */
router.post('/Register', register.register)
router.post('/Login', login.login)

router.get('/User/GetAll', auth.auth, user.getAllUser);
router.post('/User/Store', auth.auth, user.storeUser)
router.put('/User/Update/:id', auth.auth, user.updateUser)
router.delete('/User/Delete/:id', auth.auth, user.deleteUser)

module.exports = router;