/**
 * Created by hejie2.0
 * Coding love on 2017/4/9.
 */
var orm = require("orm");

orm.connect("mysql://root:@localhost/hejieblog", function (err, db) {
    if (err) {
        throw err;
    }
    var Message = db.define("message", {
        to: Number,
        name: String,
        content: String,
        date: String,
        contact: String
    })
});