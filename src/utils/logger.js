// utils/logger.js
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info', // Adjust as needed (e.g., 'debug', 'error')
    format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
    ],
    exceptionHandlers: [
        new transports.File({ filename: 'exceptions.log' }),
    ],
});

export default logger;
