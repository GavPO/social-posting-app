import { UsersAPI } from '../utils/APICalls';

// TODO: DECIDE IF WE NEED TYPES ON THIS LOADER
//* TYPES

//* STATE
let ALL_USERS = null;

export const homeLoader = async () => {
  let allUsers = await UsersAPI.getAll();
  if (!allUsers.ok) throw allUsers;
  allUsers = await allUsers.json();
  ALL_USERS = allUsers;

  return { allUsers: ALL_USERS };
};
