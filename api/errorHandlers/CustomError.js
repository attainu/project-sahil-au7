/**
 * This is Custom Error class which extends
 * Error class. Through this class, message 
 * can be sent along with statusCodes
 */
class CustomError extends Error {
    constructor(statusCode, message) {
        super()
        this.statusCode = statusCode
        this.message = message
        this.stack = message
    }
}

export default CustomError