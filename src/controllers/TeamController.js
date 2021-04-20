import { Team } from "../schemas/TeamSchema"

/* to store team
* @param {Object} req 
* @param {Object} res 
* @returns {object} json object
*/
export const storeTeam = (req, res) => {
    const user = new Team(req.body);
    user.save((error, result) => {
        if (error) {
            res.error(error);
        } else {
            res.success(result);
        }
    })
}

/* to get all teams
 * @param {Object} req 
 * @param {Object} res 
 * @returns {object} json object
 */
export const getAllTeams = async (req, res) => {
    const teams = await Team.find({});
    res.success(teams);
}

/* to get particular team
 * @param {Object} req 
 * @param {Object} res 
 * @returns {object} json object
 */
export const getParticularTeam = async (req, res) => {
    const team = await Team.findOne({ _id: req.params.id });
    res.success(team);
}

/* to update particular team details
 * @param {Object} req 
 * @param {Object} res 
 * @returns {object} json object
 */
export const updateTeam = async (req, res) => {
    const team = await Team.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
    res.success(team);
}

/* to delete team
 * @param {Object} req 
 * @param {Object} res 
 * @returns {object} json object
 */
export const deleteTeam = async (req, res) => {
    const team = await Team.findByIdAndDelete({ _id: req.params.id });
    res.success(team);
}
