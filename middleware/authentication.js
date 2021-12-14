const jwt = require("jsonwebtoken");
const {UnauthError} = require('../errors')


const authenticationMiddleware = (req, res, next) => {
    const authentHeader = req.headers.authorization;

    // if there's no authentication header or it starts with Bearer and nothing else, it'll show a error
    if(!authentHeader || !authentHeader.startsWith("Bearer")) {
        throw new UnauthError("Not authorized to be here >:O")
    }

    const token = authentHeader.split(" ")[1]; //0 would be the bearer, 1 is the token

    try{
        const payload = jwt.verify(token, process.env.JWT_secret)
        //const {userID, name} = payload
        req.user = {userID: payload.userID, name: payload.name}
        next()
    } catch (err) {
        throw new UnauthError('Not authorized to access this route!')
    }
}

module.exports = authenticationMiddleware