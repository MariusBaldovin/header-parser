// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Route to handle /api/whoami
app.get("/api/whoami", function (req, res) {
  // Extract IP address from headers
  var ipaddress = req.ip;

  // Extract preferred language from headers
  var language = req.headers["accept-language"];

  // Extract software from headers
  var software = req.headers["user-agent"];

  // Send JSON response
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software,
  });
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
