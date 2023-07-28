const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//this is used to export function from different js file
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended:true}));

var items = ["Buy Food" , "Cook Food" , "Eat Food"];
var workItems = [];
app.use(express.static("views"));

app.get("/" , function(req,res) {

//Now getDate function will run because we have now added paranthesis.
    let day = date.getTarik();
    
    res.render('index' , {listTitle : day , newListItems: items});
})

app.get("/work" , function(req,res) {

    res.render('index' , {listTitle : "Work Items" , newListItems: workItems});
})

app.post("/" , function(req,res) {

    var item = req.body.newItem;
    
    items.push(item);
    res.redirect("/");
})

app.post("/work" , function(req,res) {

    var item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})
app.listen("2000" , function() {

    console.log("server chalu hogya hai !");
})