import { Designation } from "../schemas/DesignationSchema"

/* to store designation
* @param {Object} req 
* @param {Object} res 
* returns {object} json object
*/
export const storeDesignation = (req, res) => {
    const designation = new Designation(req.body);
    designation.save((error, result) => {
        if (error) {
            res.error(error);
        } else {
            res.success(result);
        }
    })
}

/* to get all designations
 * @param {Object} req 
 * @param {Object} res 
 * @returns {object} json object
 */
export const getAllDesignation = async (req, res) => {
    const designations = await Designation.find({});
    res.success(designations);
}

/* to get particular designation
 * @param {Object} req 
 * @param {Object} res 
 * @returns {object} json object
 */
export const getParticularDesignation = async (req, res) => {
    const designation = await Designation.findOne({ _id: req.params.id });
    res.success(designation);
}

/* is there any changes in designation change here
 * @param {Object} req 
 * @param {Object} res 
 * @returns {object} json object
 */
export const updateDesignation = async (req, res) => {
    const designation = await Designation.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
    res.success(designation);
}

/* to delete designation
 * @param {Object} req 
 * @param {Object} res 
 * @returns {object} json object
 */
export const deleteDesignation = async (req, res) => {
    const designation = await Designation.findByIdAndDelete({ _id: req.params.id });
    res.success(designation);
}
