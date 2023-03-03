import { UsersAPI } from "../../utils/APICalls";

export const homeLoader = async () => {
  let allUsers = await UsersAPI.getAllUsers();

  if (!allUsers.ok) throw allUsers;

  allUsers = await allUsers.json();

  return { allUsers };
};
