import { sendWelcomeEmail } from "../helpers/email";
import { User } from "../schemas/UserSchema";

/* to store user details
 * @param {Object} req 
 * @param {Object} res 
 */
export const storeUser = (req, res) => {
    const user = new User(req.body);

    user.save((error, result) => {
        if (error) {
            res.error(error);
        } else {
            sendWelcomeEmail(req.body.email, req.body.user_name, req.body.password);
            res.success(result);
        }
    })
}

/* to get all user details
 * @param {Object} req 
 * @param {Object} res 
 */
export const getAllUsers = async (req, res) => {
    const users = await User.find({}).populate('team_id').populate('designation_id');
    res.success(users);
}

/* to get particular User
 * @param {Object} req 
 * @param {Object} res 
 */
export const getParticularUser = async (req, res) => {
    console.log(req.params.id)
    const user = await User.findOne({ _id: req.params.id });
    res.json(user);
}

/* to update particular User
 *
 * @param {Object} req 
 * @param {Object} res 
 */
export const updateUser = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
    res.success(user);
}
/* to delete User
 * @param {Object} req 
 * @param {Object} res 
 */
export const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    res.success(user);
}




