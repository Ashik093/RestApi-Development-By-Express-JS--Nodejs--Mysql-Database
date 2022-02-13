var express = require('express');
var router = express.Router();
var user = require('./../controller/user')

/* GET home page. */
router.get('/User/GetAll', user.getAllUser);
router.post('/User/Store', user.storeUser)
router.put('/User/Update/:id', user.updateUser)
router.delete('/User/Delete/:id', user.deleteUser)

module.exports = router;