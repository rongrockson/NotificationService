// testEmail.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const mailTransport = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    }
});

const mailOptions = {
    from: `rockson.rong@capitxcel.com`, // Replace with your GoDaddy hosted email
    to: `rongrockson@gmail.com`,
    subject: `This is a Test Subject`,
    text: `Hi Rockson,    
    
Happy Halloween!

If you need any help, please contact us.
Thank You. And Welcome!

Support Team
`,
};

mailTransport.sendMail(mailOptions).then(() => {
    console.log('Email sent successfully');
}).catch((err) => {
    console.log('Failed to send email');
    console.error(err);
});
