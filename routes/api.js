var express = require('express');
var router = express.Router();
var user = require('./../controller/user')
var register = require('./../controller/register')
var login = require('./../controller/login')
var auth = require('./../middleware/auth')
var task = require('./../controller/task')

/* GET home page. */
router.post('/Register', register.register)
router.post('/Login', login.login)

router.get('/Me', auth.auth, login.me);
router.get('/User/GetAll', auth.auth, user.getAllUser);
router.post('/User/Store', auth.auth, user.storeUser)
router.put('/User/Update/:id', auth.auth, user.updateUser)
router.delete('/User/Delete/:id', auth.auth, user.deleteUser)

router.post('/Task/Store', auth.auth, task.store)
router.get('/Task/GetAll', auth.auth, task.index)

module.exports = router;