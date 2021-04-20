import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*user fields
 * UserSchema
 * @description user model
 */
const UserSchema = new Schema({
  user_name: {
    type: String,
  },
  name: {
    type: String
  },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE', 'OTHER'],
  },
  date_of_birth: {
    type: String,
  },
  email: {
    type: String
  },
  password: {
    type: String,
  },
  profile_picture: {
    type: String,
  },
  address: {
    type: String
  },
  blood_group: {
    type: String
  },
  team_id: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  designation_id: {
    type: Schema.Types.ObjectId,
    ref: 'Designation'
  },
  otp: {
    type: Number
  },
  joined_at: { type: String },
  status: { type: Number, default: 1 },
  created_at: { type: Date, default: Date.now },
}, { versionKey: false });

export const User = mongoose.model('Users', UserSchema);