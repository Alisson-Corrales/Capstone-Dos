const CustomAPIError = require("./custom-api-error");
const { StatusCodes } = require("http-status-codes");

class UnauthError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.BAD_REQUEST;
  }
}

module.exports = UnauthError;
