import passwordResetService from '../services/passwordResetService'

const controller = {}

//Forgot Password
controller.forgotPassword = async (req, res) => {
    try {
        const vendor = await passwordResetService.forgotPassword(req);

        res.status(201).json(vendor);
    } catch (e) {
        handleErrors(e, res)
    }
};

//Reset Password
controller.resetPassword = async (req, res) => {
    try {
        const message = await passwordResetService.resetPassword(req);

        res.status(201).json(message);
    } catch (e) {
        handleErrors(e, res)
    }
};

export default controller;