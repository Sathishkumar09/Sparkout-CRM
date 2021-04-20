import { Admin } from "../schemas/AdminSchema";

/*
 * @param {} req 
 * @param {} res 
 * @param {*} next 
 */
export const AdminAuthCheck = async (req, res, next) => {
    if (req.headers['authorization']) {
        const token = req.headers['authorization'];
        const admin = await Admin.findOne({ token: token });  //first token from db:second token client enter token value
        if (!admin) {
            res.error({}, 'Access token invalid');
        } else {
            next();
        }
    } else {
        res.error({}, 'Access token required', 421);
    }
}
