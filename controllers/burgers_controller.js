//burgers_controller.js will require express and burger.js
//also a router will be set up
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//at the root page, the burger object will undergo the selectAll function
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        //save the cb as an object that will be rendered as all burgers to the page
        var renderObject = {
            burgers: data
        };
        res.render("index", renderObject);
    });
});

//at the root page, the post method will be run whenever a new burger is entered
router.post("/", function (req, res) {
    //the text in the body of the post form will be entered to the burgers table..
    //..via the insertOne function
    burger.insertOne(req.body.burger_name, function () {
        //refresh the page to update the burgers shown to the user
        res.redirect("/");
    });
});

//for the put function, the id will be saved..
router.put("/:id", function (req, res) {
    var id = req.params.id;

    //..in order to update its boolean value
    burger.updateOne(id, function () {
        //refresh the page
        res.redirect("/");
    });
});

//make router (express.Router()) exportable
module.exports = router;