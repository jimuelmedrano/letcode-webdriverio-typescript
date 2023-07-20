const winston = require('winston');

const resultLogger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({ filename: 'logs/results.log' }),
    ]
});

const resultErrorLogger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({ filename: 'logs/resultsErrors.log' }),
    ]
});

export default {resultLogger,resultErrorLogger};
