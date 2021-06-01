const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/main.html");
});
app.post("/", function (req, res) {
  var first_Name = req.body.fname;
  var last_Name = req.body.lname;
  var email = req.body.email;
  res.send(
    "Your  first name :" +
      first_Name +
      ", Your last name :" +
      last_Name +
      ", email :" +
      email
  );
});
app.listen(3000, function () {
  console.log("server is running");
});

//a60e5385faa1943f25a7be98c187c9ae-us1
