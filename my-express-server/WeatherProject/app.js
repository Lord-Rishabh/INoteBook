const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , function(req,res) {

    res.sendFile(__dirname + "/index.html");
    
})

app.post("/" , function(req, res) {

    var query = req.body.city;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=e80e57f8d31ff4ecf3ea6a67c678ef21&units=metric"
    
    https.get(url , function(response) {
    
        console.log(response.statusCode);
        
        response.on("data" , function(data) {

            const weatherData = JSON.parse(data);
            const icon = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";


            res.write("<p> The weather description of " + query + " is : " + weatherData.weather[0].description + "</p>");
            
            res.write("<h1>The temperature is " + query + " is : " + weatherData.main.temp + " degree Celcius</h1>" )
            
            res.write('<img src="' + icon + '">');

            res.send();
        })
        
    })
})

app.listen("2000" , function() {
    console.log("Server chalu hogya!");
})