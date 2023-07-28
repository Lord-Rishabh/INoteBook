const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
//used so that server can use local files places in Public folder.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/" , function(req, res) {

    res.sendFile(__dirname + "/signup.html");
})
// key : a29c39838998051592aa11662397cb5a-us21
//audience id : 0cc8687d0c
app.post("/" , function(req,res) {

    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME : firstName,
                    LNAME : lastName,
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = 'https://us21.api.mailchimp.com/3.0/lists/0cc8687d0c' ;
    const options = {
        method : "POST",
        auth : "rishabh:a29c39838998051592aa11662397cb5a-us21"
    }

    const request = https.request(url , options , function(response) {
        response.on("data" , function(data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end;
})

app.listen("2000" , function() {
    console.log("Server chalu hogya !");
})