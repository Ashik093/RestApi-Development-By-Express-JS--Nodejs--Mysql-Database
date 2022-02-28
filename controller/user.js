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

    let sql = "UPDATE users SET name=?,email=? WHERE id=?";
    let values = [
        req.body.name,
        req.body.email,
        req.params.id
    ]
    connection.query(sql, values, function(err, rows, fields) {
        if (err) throw err
        res.json({
            status: 200,
            message: "Updated SuccessFully"
        })
    })
}
exports.deleteUser = function(req, res, next) {
    let sql = "DELETE FROM users WHERE id=?";
    let values = [
        req.params.id
    ]
    connection.query(sql, values, function(err, rows, fields) {
        if (err) throw err
        res.json({
            status: 200,
            message: "Deleted SuccessFully"
        })
    })
}