// !umem => user>methods> userModel 

import { HydratedDocument, Model } from "mongoose";
export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

//instance methods
export interface IUserMethods {
  fullName(): string;
}
 
//!un  // what doing userModel // generic not understanding 
export interface UserModel extends Model<IUser, {}, IUserMethods> {

  // !un  //  after promise not understanding anything 
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}