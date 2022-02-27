var connection = require('../services/connection');

exports.index = function(req, res, next) {
    let dataSql = 'SELECT tasks.* as u FROM tasks LEFT JOIN (SELECT users.id,users.name,GROUP_CONCAT(user.id,user.name) FROM users) user on tasks.user_id=user.id';
    connection.query(dataSql, function(err, rows, fields) {
        if (err) throw err
        res.json({
            status: 200,
            data: rows
        })
    })
}
exports.store = function(req, res, next) {
    let sql = 'INSERT INTO tasks (user_id,name,	description,date,created_by) VALUES(?)';
    let values = [
        req.body.user_id,
        req.body.name,
        req.body.description,
        req.body.date,
        req.body.created_by
    ];
    connection.query(sql, [values], function(err, rows, fields) {
        if (err) throw err
        let dataSql = 'SELECT * FROM tasks WHERE id=?';
        let id = rows.insertId;
        connection.query(dataSql, id, function(err, rows, fields) {
            if (err) throw err
            res.json({
                status: 200,
                message: "Task Added Successfully",
                data: rows[0]
            })
        })

    })

}