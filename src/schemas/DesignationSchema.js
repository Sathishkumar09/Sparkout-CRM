import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*designation fields
* DesignationSchema
* @description designation schema model
*/
const DesignatonSchema = new Schema({
  designation_name: {
    type: String
  }
},
  { versionKey: false });
export const Designation = mongoose.model('Designation', DesignatonSchema);