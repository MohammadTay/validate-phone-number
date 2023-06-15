import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {

    costumerName: {
      type: String,
      required: true,
      unique: true

    },
    costumerAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true
    },

    costumerEmail: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
