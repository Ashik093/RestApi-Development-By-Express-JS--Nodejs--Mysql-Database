const nodemailer = require("nodemailer");

exports.sendMail = function(req, res, next) {
    let transporter = nodemailer.createTransport({
        host: "mail.the-ashikur.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'ashik@the-ashikur.com', // generated ethereal user
            pass: 'ashikur@123', // generated ethereal password
        },
    });
    let info = transporter.sendMail({
            from: 'ashik@the-ashikur.com', // sender address
            to: "mdashikurrahman598619@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        })
        .then((data) => {
            res.json({
                status: 200,
                message: "Send Mail Success"
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message
            })
        })
}