var connection = require("./connection.js");

function objectMySQL(obj){
    var arr = [];

    for (var key in obj){
        arr.push(key + "=" + obj[key]);
    }

    return arr.toString();
}

function qGenerator(q) {
    var arr = [];

    for (var i=0; i<q; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var orm = {

    selectAll: function(table, cb) {
        var enteredQuery = "SELECT * FROM " + table + ";";

        connection.query(enteredQuery, function(err, result){
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    insertOne: function(table, columns, vals, cb){
        var enteredQuery = "INSERT INTO" + table;
        enteredQuery += " (";
        enteredQuery += columns.toString();
        enteredQuery += ") ";
        enteredQuery += "VALUES (";
        enteredQuery += qGenerator(vals.length);
        enteredQuery += ") ";

        connection.query(enteredQuery, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function(table, vals, condition, cb) {
        var enteredQuery = "UPDATE " + table;
        enteredQuery += " SET ";
        enteredQuery += objectMySQL(vals);
        enteredQuery += " WHERE ";
        enteredQuery += condition;

        connection.query(enteredQuery, function(err, reuslt){
            if (err) {
                throw err;
            }

            cb(result);
        });
    }

};

module.exports = orm;