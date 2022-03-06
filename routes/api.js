var express = require('express');
var router = express.Router();
var user = require('./../controller/user')
var register = require('./../controller/register')
var login = require('./../controller/login')
var auth = require('./../middleware/auth')
var task = require('./../controller/task');
const timesheet = require('./../controller/timesheet');
const attendance = require('./../controller/attendance');

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

router.get('/Timesheet/GetAll', auth.auth, timesheet.index)
router.post('/Timesheet/Store', auth.auth, timesheet.store)
router.get('/Timesheet/GetById/:id', auth.auth, timesheet.show)
router.post('/Timesheet/Update/:id', auth.auth, timesheet.update)
router.get('/Timesheet/Delete/:id', auth.auth, timesheet.delete)

router.get('/Attendance/GetAll', auth.auth, attendance.index)
router.post('/Attendance/Store', auth.auth, attendance.store)
router.get('/Attendance/Show/:id', auth.auth, attendance.show)
router.delete('/Attendance/Delete/:id', auth.auth, attendance.delete)

module.exports = router;