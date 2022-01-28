const mysql = require("mysql");
const connectionConfig = require("./config/connectionConfig");

//建立数据库连接
const connection = mysql.createConnection(connectionConfig);

module.exports = connection;
