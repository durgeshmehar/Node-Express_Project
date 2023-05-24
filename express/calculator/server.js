const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//to access inputed data bt body-parsesr
app.use(bodyParser.urlencoded({extended:true }));

//to allow use var of javascript in html template using ejs engine
app.engine("html" ,require("ejs").renderFile);

//making path and req, res 
app.get("/",function( req ,res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/submit",function( req ,res){
    var n1 = Number(req.query.num1);
    var n2 = Number(req.query.num2);
    var result = n1+n2;
    res.send("Result is :"+ result);
})

// app.post("/" ,function(req,res){
//     var n1 = Number(req.body.num1);
//     var n2 = Number(req.body.num2);
//     var result = n1+n2;
//     // res.sendFile( (__dirname+ "/response.html"));
//     res.render( (__dirname+ "/response.html") ,{result :result});
//     // res.send("<h1> SUM CALCULATION </h1>"+"The result is :" +result);

// })


/* For creating BMI calculator */
app.get("/bmicalculator", function( req, res){
    //always take in mind res.sendFile for pass html file
    res.sendFile( __dirname + "/bmicalculator.html" );
})
app.post("/bmicalculator",function( req, res){
    var h = parseFloat( req.body.height);
    var w = parseFloat( req.body.weight);
    var ans = w/(h*h);
    res.send("<h1>BMI CALCULATOR</h1>" + "The BMI of body : " + ans );
    // res.render((__dirname+"/response.html") ,{result:ans});
})

//Making a port to listen and want to a request
app.listen(3000,function(){
    console.log("run on port 3000");
})
