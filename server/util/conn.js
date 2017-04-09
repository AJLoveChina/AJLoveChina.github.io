/**
 * Created by hejie2.0
 * Coding love on 2017/4/9.
 */
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    pass: "",
    database: "hejieblog"
});

module.exports = connection;