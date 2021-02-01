var express = require('express');
var app = express();

// 1. Meet the Node console

// console.log("Hello world");

// 2.Start a Working Express Server

// app.get("/", (req, res) => {
//   res.send('Hello Express');
// });

// 3. Serve an HTML File

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// 4. Serve Static Assets

app.use(express.static(__dirname + "/public"));

// 5. Serve JSON on a Specifc Route

app.get("/json", (req, res) => {
    res.json({ "messsage": "Hello json" });
});

// 6. Use the .env File

// 7. Implement a Root-Level Request Logger Middleware

// 8. Chain Middleware to Create a Time Server

// 9. Get Route Parameter Input from the Client

// 10. Get Query Parameter Input from the Client

// 11. Use body-parser to Parse POST Requests

// 12. Get Data from POST Requests



































module.exports = app;