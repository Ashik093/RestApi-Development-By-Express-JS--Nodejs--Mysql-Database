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