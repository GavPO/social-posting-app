import { UsersAPI } from "../../utils/APICalls";

export const homeLoader = async () => {
  let allUsers = await UsersAPI.getAllUsers();

  console.log("## allUsers res", allUsers);

  if (!allUsers.ok) throw allUsers;

  allUsers = await allUsers.json();

  console.log("## allUsers", allUsers);

  return { allUsers };
};
