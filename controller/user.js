var connection = require('./../services/connection')
exports.getAllUser = function(req, res, next) {
    let sql = 'SELECT * FROM users';;
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err
        res.json({
            status: 200,
            rows,
            message: "User lists retrieved successfully"
        })
    })

}
exports.storeUser = function(req, res, next) {
    let sql = 'INSERT INTO users (name,email) VALUES(?)';
    let values = [
        req.body.name,
        req.body.email
    ];
    connection.query(sql, [values], function(err, rows, fields) {
        if (err) throw err
        res.json({
            status: 200,
            message: "User Added Successfully"
        })
    })
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