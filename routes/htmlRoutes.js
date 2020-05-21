var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/userInfo", function(req, res) {
        db.UserInfo.findAll({}).then(function(dbExamples) {
            res.render("eligibility", {
                UserInfo: dbExamples
            });
        });
    });

    // Load example page and pass in an example by id
    app.get("/userInfo/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
        db.UserInfo.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
            res.render("eligibility", {
                UserInfo: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};
