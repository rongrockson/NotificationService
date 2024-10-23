import dotenv from 'dotenv';
dotenv.config();
const config = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGODB_URI,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: Number(process.env.SMTP_PORT) || 465,
    smtpSecure: process.env.SMTP_SECURE === 'true', // true for port 465
    smtpMail: process.env.SMTP_MAIL,
    smtpPassword: process.env.SMTP_PASSWORD,
    emailFrom: process.env.EMAIL_FROM,
    port: process.env.PORT || 5000,
    jwt: process.env.JWT_SECRET,
    frontendURL: process.env.FRONTEND_URL,
    notifyServiceURL: process.env.NOTIFY_SERVICE_URL,
    env: process.env.NODE_ENV,
};

export default config;
