import {Admin} from "../schemas/AdminSchema";

/*this used to send a otp to the user who is going to reset password
 * @param {Object} req
 * @param {Object} res
 * @return {Object} json
 */
export const userForgotPassword = async (req, res) => {
    const getUser = await User.findOne({ email: req.params.email });
    if (getUser) {
        var otp = Math.floor(1000 + Math.random() * 9000);
        const updateOtp = await Admin.findOneAndUpdate({ email: req.params.email }, { $set: { otp: otp } });
        sendForgotPasswordLink(getUser.email, getUser._id, otp);
        res.success(updateOtp)
    } else {
        res.error({}, 'Invalid email');
    }
}

/*used to verify otp
 * @param {Object} req
 * @param {Object} res
 */
export const verifyOtp = async (req, res) => {
    const getUser = await User.findOne({ _id: req.params.id });
    if (getUser.otp == req.body.otp) {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.success(user);
    } else {
        res.error('Invalid Otp!');
    }
}

/*used to set your new password
 * @param {Object} req
 * @param {Object} res
 */
export const setPassword = async (req, res) => {
    const getUser = await User.findOne({ _id: req.params.id });
    if (req.body.password == req.body.confirm_password) {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.success(user);
    } else {
        res.error('your password and confirm password should be same');
    }
}