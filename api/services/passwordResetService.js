import sendEmail from "../utilities/email";
import tokenUtil from '../utilities/tokenUtil'
import encryptionService from "../services/encryptionService";

const services = {}

/**
 * Forgot Password
 */
services.forgotPassword = req => new Promise(async (res, rej) => {
    try {
        const {
            email
        } = req.body;

        //Get model from request object
        const model = req.model

        //Generate password reset token
        const token = tokenUtil.generatePasswordResetToken()

        //Get hashed reset token
        const passwordResetToken = token.hashedResetToken

        //Token expiry time
        const passwordResetExpires = Date.now() + 10 * 60 * 1000

        //Save the token and token expiry time in the document
        const promise1 = model.findOneAndUpdate({
            email
        }, {
            $set: {
                passwordResetToken,
                passwordResetExpires
            }
        }, {
            validateBeforeSave: false
        });

        //The url that will be sent via email to reset the password
        const resetURL = `${req.protocol}://${req.get("host")}/${model.collection.collectionName.slice(0, -1)}/passwordReset/${token.resetToken}`;

        //Send password reset link 
        const promise2 = sendEmail({
            email,
            subject: "Password reset token is Valid for 10 minutes",
            message: `Forget your password? Submit a PATCH request with your new password to:${resetURL}\nIf you didn't forget your password, please ignore this email!`
        });

        //Resolve the promises
        const result = await Promise.all([promise1, promise2])

        res('Check your email for password reset link');
    } catch (e) {
        console.log(e);
        rej(e);
    }
});

/**
 * Reset Password
 */
services.resetPassword = req => new Promise(async (res, rej) => {
    try {
        //Get new password
        const {
            password
        } = req.body;

        //Get model from request object
        const model = req.model

        //Create a new hashed password
        const newPassword = await encryptionService.encrypt(password);

        //Save the new password and clear password reset token
        const results = await model.findOneAndUpdate({
            _id: req._id
        }, {
            $set: {
                password: newPassword,
                passwordResetToken: undefined,
                passwordResetExpires: undefined
            }
        })

        res('Password reset successfully. Go to login page.');
    } catch (error) {
        console.log(error);
        rej(error);
    }
});

export default services