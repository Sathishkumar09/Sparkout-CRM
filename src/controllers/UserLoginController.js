import { User } from '../schemas/UserSchema';

/* user login api
 * @param {Object} req 
 * @param {Object} res 
 * @returns {object} json object
 */
export const userLogin = async (req, res) => {
    const result = await User.findOne({ $and: [{ user_name: req.body.name }, { password: req.body.password }] })
    if (result) {
        res.success(result, 'Valid user')
    }
    else {
        res.error({}, 'Invalid user');
    }
}
