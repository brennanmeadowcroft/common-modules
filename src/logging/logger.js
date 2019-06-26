const bunyan = require('bunyan')

const logger = bunyan.createLogger({ name: 'Actual app name!' })

module.exports = logger;