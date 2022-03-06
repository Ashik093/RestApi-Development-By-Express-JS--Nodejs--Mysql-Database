const db = require('./../models/index')

exports.index = function(req, res, next) {
    const attendance = db.Attendance.findAll({
            include: { model: db.User, as: "User" }
        })
        .then((data) => {
            res.json({
                status: 200,
                data: data
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Err"
            })
        })
}
exports.store = function(req, res, next) {
    const attendance = db.Attendance.create({
            userId: req.body.userId,
            attendance_date: req.body.attendance_date,
            clock_in: req.body.clock_in,
            clock_out: req.body.clock_out,
            clock_in_out: req.body.clock_in_out,
            time_late: req.body.time_late,
            early_leave: req.body.early_leave,
            overtime: req.body.overtime,
            total_work: req.body.total_work,
            total_rest: req.body.total_rest,
            status: req.body.status
        })
        .then((data) => {
            res.json({
                status: 200,
                data: data
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "ERR"
            })
        })
}
exports.show = function(req, res, next) {
    const attendance = db.Attendance.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.json({
                status: 200,
                data: data
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error"
            })
        })
}
exports.delete = function(req, res, next) {
    const attendance = db.Attendance.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.json({
                status: 200,
                data: data
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "err"
            })
        })
}