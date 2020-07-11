//require the mysql connection set up in connection.js
var connection = require('../config/connection.js');

//define the functions that will be used to used to perform mysql commands
//must be saved as an object
var orm = {

    //define a function that can select all items from the burgers table
    //takes in callback as an input variable
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            //callback the result
            cb(result);
        });
    },

    //..a function that can input burgers into the table from the input form
    insertOne: function (burger, cb) {
        //put the burger into the table with the burger (name of the burger) as burger_name
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            //callback the result
            cb(result);
        });
    },

    //and a function that updates when a burger has been eaten
    updateOne: function (id, cb) {
        //take in the id of the burger and set its boolean value equal to true
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            //callback the result
            cb(result);
        });
    }
};

//make this object exportable, will be used in models/burger.js
module.exports = orm;