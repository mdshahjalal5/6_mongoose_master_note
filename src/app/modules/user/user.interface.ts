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

// ! when  instance  methods and static  use same time code like below // reference docs> mongoose>typeSCript>static 
 
//!un  // what doing userModel // generic not understanding 
export interface UserModel extends Model<IUser, {}, IUserMethods> { //! cog(cognition) from >mongoose>ts>static>both instance & static

  // !un  //  after promise not understanding anything    
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
