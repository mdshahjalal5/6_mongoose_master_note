
// ! sim=> schema>model
import mongoose, { Schema, model, Model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;
// ! cog(cognition) => mongoose> 
const userSchema = new Schema< IUser,UserModel, IUserMethods>({ //!n! userModel & IUserMethods is best practise why using don't know > have know ? 
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

// class -> this.  --> classs
// !un 
userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({ role: "admin" });
  console.log(admins);
  return admins;
});


// !un // on interface we declare a type fullName what doing the type // is it working here 
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});


// !un // not understood what generic doing here 
const User = model<IUser, UserModel>("User", userSchema);

export default User;

// instance methods --> instance er methods
// class -> instance + methods -> instance methods