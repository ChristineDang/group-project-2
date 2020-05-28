var db = require("../models");
var sendMail = require('./nodemailer');
module.exports = function(app) {

    // Get all UserInfo
    app.get("/api/UserInfo", function(req, res) {
        db.UserInfo.findAll({}).then(function(dbUserInfo) {
            res.json(dbUserInfo);
        });
    });

    // Get route for one application
    app.get('/api/UserInfo/:id', function(req, res){
        db.UserInfo.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUserInfo){
            res.json(dbUserInfo);
        });
    });

    // Create a new UserInfo
    app.post("/api/UserInfo", function(req, res) {
        db.UserInfo.create(req.body).then(function(dbUserInfo) {
            res.json(dbUserInfo);
        });
    });

    // Delete an UserInfo by id
    app.delete("/api/UserInfo/:id", function(req, res) {
        db.UserInfo.destroy({ where: { id: req.params.id } }).then(function(dbUserInfo) {
            res.json(dbUserInfo);
        });
    });
    app.put("/api/UserInfo/:userId", function(req, res) {
        db.UserInfo.update(req.body,{
            where: {
                id: req.params.userId
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
    app.post('/email', function(req,res){
        var info = req.body;
        var greeting = 'Hello ' + req.body.firstName + ',\nHere is your recent application.\n\n';
        var email = req.body.email;
        var body = [];
        for (var i in info){
            body.push(i, info[i] + '\n  ');
        }
        var text = body.join(' ');
        console.log(text);
        sendMail(email,greeting + text, function(err){
            if (err) {
                console.log(err);
                res.status(500).json({message: 'Internal Error'});
            } else {
                res.json({ message: 'Email Sent'});
            }
        });
        res.json({ message: 'message received' });
    });
};
