// services/notificationService.js
import logger from '../utils/logger.js';
import nodemailer from 'nodemailer';
import config from '../config/config.js';


const mailTransport = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    auth: {
        user: config.smtpMail,
        pass: config.smtpPassword,
    }
});


class NotificationService {
    /**
     * Sends an email using the sendMail function from mail.js.
     *
     * @param {string|string[]} to - Recipient email address(es)
     * @param {string} subject - Subject of the email
     * @param {string} text - Body of the email (plain text)
     * @param {object|array} [Attachment={}] - Optional attachments
     * @param {string|string[]} [cc=undefined] - Optional CC email address(es)
     * @param {object} [additionalHeaders=undefined] - Optional additional email headers
     *
     * @returns {Promise<void>}
     */
    async sendEmail(to, subject, text) {
        try {
            const mailOptions = {
                from: config.smtpMail,
                to,
                subject,
                text
            };
            return mailTransport.sendMail(mailOptions);
        } catch (error) {
            logger.error('Error sending email:', error.message);
            throw error;
        }
    }
}

export default NotificationService;
