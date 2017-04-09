/**
 * Created by hejie2.0
 * Coding love on 2017/4/9.
 */
var express = require("express"),
    message = require("./services/message"),
    orm = require("orm");
var bodyParser = require('body-parser');


var app = express();
app.use(orm.express("mysql://root:@localhost/hejieblog", {
    define: function (db, models, next) {
        models.message = db.define("message", {
            to: Number,
            name: String,
            content: String,
            date: String,
            contact: String
        });
        next();
    }
}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get("/", function (req, res) {
    res.send("Hello I am hejie2.0");
});

message(app);


app.listen(3000, function () {
    console.log("hejie server is running on port 3000!");
});