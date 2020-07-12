const email = require("../../infrastructure/email");

async function sendMail(body) {
    try {
        await email.sendMail({
            from: process.env.APP_SERVER_EMAIL_SENDER,
            replyTo: body.email,
            to: process.env.APP_SERVER_EMAIL_RECIPIENT,
            subject: "new contact message - react-portfolio-example",
            text: body.message,
            html: body.message,
        });
    } catch (e) {
        throw e.toString();
    }
}

module.exports.sendMail = sendMail;
