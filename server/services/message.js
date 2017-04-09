/**
 * Created by hejie2.0
 * Coding love on 2017/4/9.
 */
var echo = require("../util/echo");

module.exports = function (app) {

    app.all("/message/get/:id", function (req, res) {
        req.models.message.get(req.params.id, function (err, item) {
            res.json(item);
        })
    });

    app.all("/message/all", function (req, res) {
        req.models.message.find(function (err, items) {
            res.json(items);
        })
    });

    app.all("/message/insert", function (req, res) {
        var message = JSON.parse(req.body.message);
        req.models.message.create(message, function (err, items) {
            if (err) {
                res.json(echo.error(null, err.message));
            } else {
                res.json(echo.success(items));
            }
        });
    })
};
