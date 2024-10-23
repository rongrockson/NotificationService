// routes/notificationRoutes.js
import express from 'express';
const router = express.Router();

export default (notificationController) => {
    router.post('/login', (req, res) => notificationController.sendLoginNotification(req, res));
    router.post('/logout', (req, res) => notificationController.sendLogoutNotification(req, res));
    router.post('/purchase', (req, res) => notificationController.sendPurchaseNotification(req, res));

    return router;
}
