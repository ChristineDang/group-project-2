
require("dotenv").config();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GMAIL_PASS
    }
});

var sendMail = function (email, text, cb){

    var mailOptions = {
        from: 'unhackedunemploy@gmail.com',
        to: email,
        subject: 'Your Application',
        text: text
    };

    transporter.sendMail(mailOptions, function(err, result){
        if (err){
            cb(err,null);
            console.log(err);
        } else {
            cb(null,result);
        }
    });
};

module.exports = sendMail;

