const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (mail, subject, body) => {
    console.log(`Attempting to send email to: ${mail}`);
    console.log(`SMTP Settings - Host: ${process.env.MAIL_PASS}, User: ${process.env.MAIL_USER}`);
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        }
    });

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: mail,
        subject: subject,
        html: body,
    };

    try {
        console.log('Sending email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        console.log('Message ID:', info.messageId);
        return {
            success: true,
            message: "Email sent successfully",
            info: info
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            success: false,
            error: "Error in sending email",
            message: error.message,
            stack: error.stack
        };
    }
};



module.exports = sendEmail;