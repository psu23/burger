//connection.js should require the mysql express package
var mysql = require("mysql");

//make a connection with mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Abc123!.",
    database: "burgers_db"
});

//connect with the mysql database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

//the connection will be exportable, to be required in orm.js
module.exports = connection;