const db = require('./../models/index')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.login = function(req, res, next) {
    const users = db.User.findAll({
            where: {
                email: req.body.email
            }
        }).then(data => {
            if (data.length > 0) {
                if (bcrypt.compareSync(req.body.password, data[0].password)) {
                    const token = jwt.sign({ user_id: data[0].id, email: req.body.email },
                        process.env.SECRETE_KEY, {
                            expiresIn: "2h",
                        }
                    );
                    res.json({
                        status: 200,
                        message: "Successfully Logged In",
                        token: token,
                        data: data[0]
                    })
                } else {
                    res.json({
                        status: 401,
                        message: "Credential Not Found"
                    })
                }
            } else {
                res.json({
                    status: 401,
                    message: "Credential Not Found"
                })
            }

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving."
            });
        });
}
exports.me = function(req, res, next) {
    const users = db.User.findAll({
            where: {
                id: auth_id
            }
        }).then(data => {
            if (data.length > 0) {
                res.json({
                    status: 200,
                    data: data[0]
                })
            } else {
                res.json({
                    status: 401,
                    message: "Credential Not Found"
                })
            }

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving."
            });
        });
}