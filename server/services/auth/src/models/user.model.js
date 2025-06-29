import mongoose from "mongoose";

const authUserSchema = new mongoose.Schema(
  {
        firstName: {
      type: String,
      required: [true, "first name is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
         lastName: {
      type: String,
      required: [true, "last name is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
   
    },
    role: {
      type: String,
      enum: ["host", "user"],
      default: "host",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    hostDetailsId: {  
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HostDetails'
    }
  },
  { timestamps: true }
);

const AuthUser = mongoose.model("AuthUser", authUserSchema);
export default AuthUser;
