var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(columns, vals, cb) {
        orm.insertOne("burgers", columns, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(vals, condition, cb) {
        orm.updateOne("burgers", vals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;