import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export interface UserInterface extends mongoose.Document {
  username: string;
  password: string;
  usertype: string;
}

const UserSchema: mongoose.Schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  usertype: { type: String, required: true },
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model<UserInterface>("User", UserSchema);
export default User;