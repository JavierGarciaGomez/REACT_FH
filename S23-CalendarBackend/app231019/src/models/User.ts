import mongoose, { Schema, model } from "mongoose";
import { IUser } from "../types/types";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // imgUrl: { type: String },
  // role: {
  //   type: String,

  //   default: "USER_ROLE",
  // },
  // active: {
  //   type: Boolean,
  //   default: true,
  // },
  // googleCreated: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
