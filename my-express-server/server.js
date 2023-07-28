
// eslint-disable-next-line no-undef
const express = require("express");

const app = express();

app.get("/" , function(request, response) {
    // console.log(request);
    response.send('<h1 style="color:blue;">Hello</h1>');
})

app.get("/contact" , function(req, res) {
    // console.log(request);
    res.send("contact me at: rishabhptl2003@gmail.com");
})

app.get("/about" , function(req,res) {
    res.send("I am Rishabh");
})

app.listen(3000, function() {
    console.log("server started on port 3000");
});
