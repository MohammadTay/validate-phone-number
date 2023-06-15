import mongoose from "mongoose";
const { Schema } = mongoose;

const PhoneSchema = new Schema(
  {

    phoneNumber: {
      type: Number,
    },
    valid: {
      type: Boolean,
      default: false,
    },
    countryName: {
      type: String,
    },
    countryCode: {
      type: String,
    },
    operatorName: {
      type: String,
    },

  },
  { timestamps: true }
);

export default mongoose.model("Phone", PhoneSchema);
