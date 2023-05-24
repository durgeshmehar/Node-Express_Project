const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", function (req, res) {
    res.sendFile(__dirname +"/signup.html");
})

app.post("/", function (req, res) {
    const Fname = req.body.fname;
    const Lname = req.body.lname;
    const Email = req.body.ename;
    const data = {
        members:[
            {
                email_address: Email,
                status: "subscribed",
                merge_fields: {
                    FNAME: Fname,
                    LNAME: Lname
                },
            }
        ],
    }

    const options = {
        url: "https://us21.api.mailchimp.com/3.0/lists/8eedb38df5",
        method: "POST",
        headers: {
            "Authorization": "apikey dbc82fa5d1ab03ce26f8c230ee359b3f-us21"
        },
        body: JSON.stringify(data)

    };

    request( options, (err, response, body) => {

        if( response.statusCode === 200){
            console.log(JSON.parse(body));
            res.sendFile(__dirname +"/success.html");
        }
        else if(err){
            console.log(err);
            res.sendFile(__dirname +"/failure.html");
        }
    });

})

app.post("/failure",function( req, res){
    // res.redirect("/signup.html");   //error
    res.sendFile(__dirname + "/signup.html");
})
app.post("/success",function( req, res){
    // res.redirect("/signup.html");    //error
    res.sendFile(__dirname + "/signup.html");
})

app.listen(3000, function () {
    console.log("Successfullu server at port 3000.")
    // console.log("Successfullu server at port 3000.")
})


//api key        f4b3b8be6bcfe2cbdbcd9bbc412cb1cc-us21
//audience key   8eedb38df5