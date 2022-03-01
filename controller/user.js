const User = require('./../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.getAllUser = function(req, res, next) {
    const users = User.findAll().then(data => {
            if (data.length > 0) {
                res.json({
                    status: 200,
                    data: data
                })
            } else {
                res.json({
                    status: 200,
                    message: "Data Not Found"
                })
            }

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving."
            });
        });

}
exports.storeUser = function(req, res, next) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const user = User.create({ name: req.body.name, email: req.body.email, password: bcrypt.hashSync(req.body.password, salt) }).then((user) => {
        res.json({
            status: 200,
            message: "User Added Successfully",
            data: user
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving."
        });
    });
}
exports.updateUser = function(req, res, next) {
    const user = User.update({ name: req.body.name }, {
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.json({
            status: 200,
            message: "Updated SuccessFully",
            data: data
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving."
        });
    })
}
exports.deleteUser = function(req, res, next) {
    const user = User.destroy({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.json({
            status: 200,
            message: "Deleted SuccessFully"
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving."
        });
    })

}