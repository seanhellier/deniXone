var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "Sales2019_DB"
})
connection.connect(function (err) {
    if (err) throw err;
    runSearch();
})
var runSearch = function () {
    console.log("Connection succesful!");
}