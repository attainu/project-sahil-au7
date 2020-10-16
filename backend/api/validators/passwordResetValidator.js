import {
    check,
    body,
    param
} from 'express-validator'

import Error from '../errorHandlers/CustomError'

import tokenUtil from '../utilities/tokenUtil'

const validator = {}

//==========================================Forgot Password==========================================
validator.forgotPassword = [
    //Check if the email is a registered email
    body('email').custom((email, {
        req
    }) => new Promise(async (res, rej) => {
        try {
            //Check if email is provided
            if (email === undefined) throw new Error(400, 'Email is required')

            //Get model from request object
            const model = req.model

            //Get document from db
            const doc = await model.findOne({
                email
            })

            //If document is not found throw error
            if (!doc) throw new Error(404, "Email Not Found")

            res()
        } catch (e) {
            console.log(e)
            rej(e)
        }
    }))
]

//==========================================Reset Password==========================================
validator.resetPassword = [

    //Check if password is valid
    check('password', 'Password not provided')
    .not()
    .isEmpty()
    .bail(),

    check('password', 'Password cannot be less than 5 characters')
    .isLength({
        min: 5
    })
    .bail(),

    //Check if reset token is valid
    param('resetToken').custom((resetToken, {
        req
    }) => new Promise(async (res, rej) => {
        try {
            //Get model from request object
            const model = req.model

            //Generate password reset token
            const token = tokenUtil.generatePasswordResetToken(resetToken)

            //Get hashed token
            const hashedToken = token.hashedResetToken

            //Check if the token is valid
            const result = await model.findOne({
                passwordResetToken: hashedToken,
                passwordResetExpires: {
                    $gt: Date.now()
                },
            });

            //If token is not valid throw error
            if (!result) throw new Error(401, "Token is invalid or has expired")

            //Set user _id in req
            req._id = result._id

            res()
        } catch (error) {
            console.log(error)
            rej(error)
        }
    }))
]

export default validator