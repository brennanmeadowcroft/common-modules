const logger = require('./logging/logger')
const server = require('express')
const baseConfig = require('./config/baseConfig')

module.exports = {
    baseConfig,
    logger,
    server
}