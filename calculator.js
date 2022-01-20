const express = require("express");
const bodyparser = require("body-parser");
const req = require("express/lib/request");
const app = express();
app.use(bodyparser.urlencoded({extended: true}));// urlencoded to html code
app.get("/", function(req,res){
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is: " + result);
});
app.listen(3000, function(){
    console.log("s started in port 3000");
});