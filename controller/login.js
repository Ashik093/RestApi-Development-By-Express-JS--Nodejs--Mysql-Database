var connection = require('./../services/connection')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
exports.login = function(req, res, next) {
    let sql = 'SELECT * FROM users WHERE email=?';
    let values = req.body.email;
    connection.query(sql, values, function(err, rows, fields) {
        if (err) throw err
        if (rows[0]) {
            if (bcrypt.compareSync(req.body.password, rows[0].password)) {
                const token = jwt.sign({ user_id: rows.id, email: req.body.email },
                    process.env.SECRETE_KEY, {
                        expiresIn: "2h",
                    }
                );
                res.json({
                    status: 200,
                    message: "Successfully Logged In",
                    token: token,
                    data: rows[0]
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

}