const db = require('./../models/index')

exports.index = function(req, res, next) {
    const attendance = db.Attendance.findAll()
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