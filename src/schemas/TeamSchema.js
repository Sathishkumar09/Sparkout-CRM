import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*team fields
* TeamSchema
* @description Team schema model
*/
const TeamSchema = new Schema({
  team_name: {
    type: String
  }
},
  { versionKey: false });

export const Team = mongoose.model('Team', TeamSchema);