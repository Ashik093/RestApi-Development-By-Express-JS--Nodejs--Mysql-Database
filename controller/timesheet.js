const db = require('./../models/index')

exports.index = function(req, res, next) {
    const timesheet = db.Timesheet.findAll({
        include: [
            { model: db.User, as: "User" },
            { model: db.Task, as: "Task" },
        ]
    }).then((data) => {
        res.json({
            status: 200,
            data: data
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving."
        });
    })
}
exports.store = function(req, res, next) {
    const timesheet = db.Timesheet.create({
            "taskId": req.body.taskId,
            "userId": req.body.userId,
            "cost": req.body.cost
        })
        .then((data) => {
            res.json({
                status: 200,
                message: "Data Added Succesfully",
                data: data
            })
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving."
            });
        })
}
exports.show = function(req, res, next) {
    const timesheet = db.Timesheet.findOne({
            where: { id: req.params.id }
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
exports.update = function(req, res, next) {
    const timesheet = db.Timesheet.update({
            cost: req.body.cost
        }, {
            where: { id: req.params.id }
        })
        .then((data) => {
            res.json({
                status: 200,
                message: "Updated",
                data: data
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "err"
            })
        })
}
exports.delete = function(req, res, next) {
    const timesheet = db.Timesheet.destroy({
            where: { id: req.params.id }
        })
        .then((data) => {
            res.json({
                status: 200,
                message: "Deleted"
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "err"
            })
        })
}