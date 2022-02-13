var mysql = require('mysql')
var config = require("./../config/db")
var connection = mysql.createConnection(config.db)

connection.connect()

module.exports = connection