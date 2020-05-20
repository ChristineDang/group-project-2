var db = require("../models");

module.exports = function(app) {
    // Get all UserInfo
    app.get("/api/userInfo", function(req, res) {
        db.UserInfo.findAll({}).then(function(dbUserInfo) {
            res.json(dbUserInfo);
        });
    });

    // Create a new UserInfo
    app.post("/api/userInfo", function(req, res) {
        db.UserInfo.create(req.body).then(function(dbUserInfo) {
            res.json(dbUserInfo);
        });
    });

    // Delete an UserInfo by id
    app.delete("/api/userInfo/:id", function(req, res) {
        db.UserInfo.destroy({ where: { id: req.params.id } }).then(function(dbUserInfo) {
            res.json(dbUserInfo);
        });
    });
};
