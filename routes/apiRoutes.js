var db = require("../models");

module.exports = function(app) {
    // Get all examples
    app.get("/api/UserInfo", function(req, res) {
        db.UserInfo.findAll({}).then(function(dbExamples) {
            res.json(dbExamples);
        });
    });

    // Create a new example
    app.post("/api/UserInfo", function(req, res) {
        db.UserInfo.create(req.body).then(function(dbExample) {
            res.json(dbExample);
        });
    });

    // Delete an example by id
    app.delete("/api/UserInfo/:id", function(req, res) {
        db.UserInfo.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
            res.json(dbExample);
        });
    });
};
