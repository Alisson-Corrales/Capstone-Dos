const { CustomAPIError } = require("../errors/custom-api-error");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  //debug tester
  // return res.json({ err });

  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.msg || "something went wrong :< please try again later!",
  };

  //this is used to catch validation errors typically required + enum
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
    customError.statusCode = 400;
  }

  //deals with duplicate errors
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, ${Object.values(
      err.keyValue
    )} is already taken! please provide a different ${Object.keys(
      err.keyValue
    )}`;
    customError.statusCode(400);
  }

  //deals with typecasting errors
  if (err.name === "CastError") {
    customError.msg = `no itme found with id ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
