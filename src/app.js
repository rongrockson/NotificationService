// notification-service/index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import NotificationController from './controllers/notificationController.js';
import NotificationService from './services/notificationService.js';
import logger from './utils/logger.js';
import notificationRoutes from './routes/notificationRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const notificationService = new NotificationService();
const notificationController = new NotificationController(notificationService);

app.use('/notify', notificationRoutes(notificationController));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => logger.info(`Notification service running on port ${PORT}`));


