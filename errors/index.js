const UnauthError = require('../../05-jwt-basics/errors/unath');
const BadRequest = require('./bad-request');
const CustomAPIError = require('./custom-api-error');

module.exports = {
    BadRequest,
    CustomAPIError,
    UnauthError
}