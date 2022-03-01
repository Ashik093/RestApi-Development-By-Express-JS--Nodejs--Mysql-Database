var connection = require('../services/connection');
const Task = require('./../models/task')
const User = require('./../models/user')


exports.index = function(req, res, next) {
    let paginate_limit = 2;
    let paginate_offset = (Number(req.query.page) - 1) * paginate_limit;
    const task = Task.findAll({
        limit: paginate_limit,
        offset: paginate_offset,
        include: [
            { model: User, as: "User" },
            { model: User, as: "createdBy" },
        ]
    }).then((data) => {
        if (data.length > 0) {
            res.json({
                status: 200,
                message: "Successful",
                data: data,
                meta: {
                    current_page: Number(req.query.page),
                    prev: Number(req.query.page) - 1,
                    next: Number(req.query.page) + 1
                }
            })
        } else {
            res.json({
                status: 200,
                message: "Data Not Found",
                data: data
            })
        }

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving."
        });
    })

}
exports.store = function(req, res, next) {
    const task = Task.create({
        userId: req.body.userId,
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        created_by: req.body.created_by
    }).then((data) => {
        res.json({
            status: 200,
            message: "Task Added Successfully",
            data: data
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving."
        });
    })
}