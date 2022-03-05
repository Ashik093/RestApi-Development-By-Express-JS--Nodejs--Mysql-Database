const db = require('./../models/index')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;

exports.register = function(req, res, next) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const user = db.User.create({ name: req.body.name, email: req.body.email, password: bcrypt.hashSync(req.body.password, salt) }).then((user) => {
        const token = jwt.sign({ user_id: user.id, email: user.email },
            process.env.SECRETE_KEY, {
                expiresIn: "2h",
            }
        );
        res.json({
            status: 200,
            message: "User Added Successfully",
            token: token,
            data: user
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving."
        });
    });
}