

// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req,res) {
    // eslint-disable-next-line no-undef
    res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req, res) {

// We need to use 'Number' because req.body.num1 is passed as text.
    var temp1 = Number(req.body.num1); 
    var temp2 = Number(req.body.num2);

    var result = temp1 + temp2;
    
    res.send("Answer is : " + result);
})

app.listen(2000 , function() {
    console.log("server started on 2000");
});