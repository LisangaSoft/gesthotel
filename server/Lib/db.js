
var mysql = require('mysql');
var params = { 
	host: '127.0.0.1', 
	user: 'root', 
	password: 'root', 
	database: 'gesthotel',
	port: 8889,
	socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock' }
exports.connection = function () {
    var db = mysql.createConnection(params);
    return db;
}
this.connection().connect()




