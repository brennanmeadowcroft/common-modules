const bunyan = require('bunyan')

const logger = bunyan.createLogger({ name: 'Generic App' })

module.exports = logger;