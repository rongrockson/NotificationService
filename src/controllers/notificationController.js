class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }

    async sendLoginNotification(req, res) {
        try {
            const { email } = req.body;  // Expect both user and manager email
            console.log('request to send login notification to ' + email);
            await this.notificationService.sendEmail(email, 'Successful Login', 'You have successfully logged in to the application.');
            res.status(200).json({ message: 'Login notification sent' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send login notification' + error });
        }
    }

    async sendLogoutNotification(req, res) {
        try {
            const { email } = req.body;  // Expect both user and manager email
            await this.notificationService.sendEmail(email, 'Successful Logout', 'You have successfully logged out of the application.');
            res.status(200).json({ message: 'Logout notification sent' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send logout notification' + error });
        }
    }

    async sendPurchaseNotification(req, res) {
        try {
            const { senderEmail, approverEmail, status } = req.body;
            let messageToUser = '';
            let messageToApprover = '';
            if (status === 'approved') {
                messageToUser = 'Your purchase request has been approved.';
                messageToApprover = `You have approved a purchase request from your team member ${senderEmail}.`;
            } else if (status === 'rejected') {
                messageToUser = 'Your purchase request has been rejected.';
                messageToApprover = `You have rejected a purchase request from your team member ${senderEmail}.`;
            } else {
                messageToUser = `Your have requested a purchase from your manager ${approverEmail}.`;
                messageToApprover = `Your team member ${senderEmail} has requested a purchase approval from you.`;
            }
            await this.notificationService.sendEmail(senderEmail, 'Purchase Request Status', messageToUser);
            await this.notificationService.sendEmail(approverEmail, 'Purchase Request Status', messageToApprover);
            res.status(200).json({ message: 'Purchase notifications sent' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send purchase notifications' + error });
        }
    }

}

export default NotificationController;
