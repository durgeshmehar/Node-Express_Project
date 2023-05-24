 const { response } = require("express");
const exp = require("express");
//create instance of an app
const app = exp();

//listen on port using app as url request
app.listen(3001 ,function(){
    console.log('Started server at port : 3000');
});

//get return

app.get( "/" , function(req, res){
    // console.log(req);  //IT rquirement pass by browser
    res.send("<h1>I have succesfully getting a request</h1>");
});

app.get("/about" , function( req, res){
   res.send("<h2>This is about Page. </h2>")
});

app.get("/contact" , function( req, res){
   res.send("<h2>Contact :durgeshmehar2002@gmail.com </h2>")
});
app.get("/home" , function( req, res){
   res.send("<h2>You are redirected to home page.</h2>")
});

