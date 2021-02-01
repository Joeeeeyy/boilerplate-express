let express = require('express');
let app = express();
// require('dotenv').config();
// 7. Implement a Root-Level Request Logger Middleware

app.use((request, response, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

// 11. Use body-parser to Parse POST Requests

app.use(bodyParser.urlencoded({ extended: false }))

// 1. Meet the Node console

console.log("Hello world");
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

// app.get("/json", (req, res) => {
//     res.json({ "messsage": "Hello json" });
// });

// 6. Use the .env File

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({ "message": "HELLO JSON" })
    } else {
        res.json({ "message": "Hello json" })
    }
});

// 8. Chain Middleware to Create a Time Server

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({ 'time': req.time })
});

// 9. Get Route Parameter Input from the Client

app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word })
});

// 10. Get Query Parameter Input from the Client

app.get("/name", (req, res) => {
    let string = req.query.first + " " + req.query.last;
    res.json({ name: string });
});

// 12. Get Data from POST Requests

app.post("/name", bodyParser.urlencoded({ extended: false }), (req, res) => {
    let string = req.body.first + " " + req.body.last;
    res.json({ name: string })
});


module.exports = app;