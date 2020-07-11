//require express
//also require method-override, otherwise post methods will 
//not work when trying to change boolean values 
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

//use the css styling in public/assets 
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

//use methodOverride, otherwise update function will not run
app.use(methodOverride("_method"));
//express handlebars are required to use handlebar pages
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//require the burgers_controller router
var router = require("./controllers/burgers_controller.js");

//at the root page, use router
app.use("/", router);

app.listen(port, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port);
  });