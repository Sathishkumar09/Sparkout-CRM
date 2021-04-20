import { Admin } from '../schemas/AdminSchema';

/* admin login api
 * @param {Object} req 
 * @param {Object} res 
 * @returns {object} json object
 */
export const adminLogin = async (req, res) => {
    const result = await Admin.findOne({ $and: [{ email: req.body.email_id }, { password: req.body.password }] })
    if (result) {
        res.success(result, 'Valid user')
    }
    else {
        res.error({}, 'Invalid user');
    }

}