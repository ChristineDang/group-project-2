var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.UserInfo.findAll({}).then(function() {
            res.render("index");
        });
    });

    app.get("/questions",function(req,res){ 
        res.render("questions");
    });

    app.get('/eligibility',function(req,res){
        res.render("eligibility");
    });

    app.get('/contact', function(req,res){
        res.render("contact");
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
