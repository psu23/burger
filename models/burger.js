//require orm.js and the object of mysql commands within
var orm = require("../config/orm.js");

//save burger as an object that will run three functions
var burger = {
    //run the selectAll function in orm.js...
    selectAll: function (cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    //...the insertOne function...
    insertOne: function(burger, cb) {
        orm.insertOne(burger, function(res) {
            cb(res);
        });
    },
    //...and the updateOne function...
    updateOne: function(id, cb) {
        orm.updateOne([id], function(res) {
            cb(res);
        });
    }
};

//make the burger object exportable, will be used in controllers/burgers_controller.js
module.exports = burger;