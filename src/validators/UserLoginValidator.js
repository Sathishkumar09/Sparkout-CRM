import Joi from 'joi';

// userlogin fields
const userLogin = Joi.object({
    user_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string().required().min(3).max(15)
});

/*to perform user login validation
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next
 */
export const userLoginValidator = (req, res, next) => {
    const { error, value } = userLogin.validate(req.body);
    if (error == undefined) {
        // validation success
        next();
    } else {
        res.error(error, 'Validation failed', 400);
    }
}