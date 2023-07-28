const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , function(req,res) {

    res.sendFile(__dirname + "/index.html");
})

app.post("/" , function(req,res) {

    var bmi = Number(req.body.weight) / (parseFloat(req.body.height)*parseFloat(req.body.height));
    res.send("Your bmi is : " + bmi);
})

app.listen("3000" , function() {
    console.log("chalu hogya server!");
})