import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*admin fields
* AdminSchema
* @description admin schema model
*/
const AdminSchema = new Schema({
  admin_name: {
    type: String,
    required: [true, 'Username must not be empty']
  },
  email: {
    type: String,
    required: [true, 'Email must not be empty']
  },
  password: {
    type: String,
    required: [true, 'password must not be empty']
  },
  token: {
    type: String,
    required: [true, 'password must not be empty']
  },
  profile_picture: {
    type: String,
    required: [true, 'Profile picture must not be empty']
  }
});

export const Admin = mongoose.model('Admin', AdminSchema);




