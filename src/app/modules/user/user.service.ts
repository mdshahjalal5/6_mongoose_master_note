// !crud > create> read> update> delete  

// ! create>// !n! i>im>instance method>

// ! im>cub >custom method>built in method>



// ! -----------------------// read 
// !fi => field filtering>


import { IUser } from "./user.interface";
import User from "./user.model";

// !create 
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  // creating a new user

// !n! im>cub > instance methods> custom method>built in method 

  // !n! user is instance
  const user = new User(payload); //User -> class  user -> instance

  await user.save(); // !n!  save built instance method 

  console.log(user.fullName()); // !n! fullName is custom instance method 

  return user;
};


// !read 
export const getUsersFromDB = async (): Promise<IUser[]>  => {  //! promise means it's asynchronous> Iuser means return type will be array and array's value will be IUser type // ! if i not give return type creates no prob 


  // ! db.datas.find({ gender: { $ne: "Male" } }, { favoutiteColor: 1, _id: -1 }); // field filtering 
  
  const users = await User.find();
  return users;
};

// !read 
export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {   //!n! promise means that it's asynchronous and return value type will be Iuser or null 


                                                    //! field filtering it will give us name & contact field other field not show 
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
  return user;
};



export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  console.log(admins);
  return admins;
};

//Class -> Attach -> Method -> Directly call using Class
// user = new User
// user.   instance methods
// User.getAdminUsers()
