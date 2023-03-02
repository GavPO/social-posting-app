import { UsersAPI } from "../../utils/APICalls";

export const homeLoader = async () => {
  let allUsers = await UsersAPI.getAllUsers();

  console.log("## allUsers", allUsers);
  

  if (!allUsers.ok) throw new Error(allUsers.statusText || "Home Loader Error");


  allUsers = await allUsers.json();

  return { allUsers };
};
