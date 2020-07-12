const nodemailer = require("nodemailer");

async function sendMail({ from, replyTo, to, subject, text, html }) {
    try {
        const transport = nodemailer.createTransport({
            host: process.env.APP_SERVER_SMTP_HOST,
            port: process.env.APP_SERVER_SMTP_PORT,
            secure: process.env.APP_SERVER_SMTP_PORT == 465,
            auth: {
                user: process.env.APP_SERVER_SMTP_USER,
                pass: process.env.APP_SERVER_SMTP_PASS,
            },
        });

        await transport.sendMail({
            from,
            replyTo,
            to,
            subject,
            text,
            html,
        });
    } catch (e) {
        throw e;
    }
}

module.exports.sendMail = sendMail;
