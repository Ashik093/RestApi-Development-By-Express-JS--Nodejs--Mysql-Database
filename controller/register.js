var connection = require('./../services/connection')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;

exports.register = function(req, res, next) {
    const salt = bcrypt.genSaltSync(saltRounds);
    let sql = 'INSERT INTO users (name,email,password) VALUES(?)';
    let values = [
        req.body.name,
        req.body.email,
        bcrypt.hashSync(req.body.password, salt)
    ];
    connection.query(sql, [values], function(err, rows, fields) {
        if (err) throw err
        const token = jwt.sign({ user_id: rows.insertId, email: req.body.email },
            process.env.SECRETE_KEY, {
                expiresIn: "2h",
            }
        );
        let dataSql = 'SELECT * FROM users WHERE id=?';
        let id = rows.insertId;
        connection.query(dataSql, id, function(err, rows, fields) {
            if (err) throw err

            res.json({
                status: 200,
                message: "User Added Successfully",
                token: token,
                data: rows[0]
            })
        })

    })

}