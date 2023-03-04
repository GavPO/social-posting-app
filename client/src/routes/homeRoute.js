import { UsersAPI } from '../utils/APICalls';
import auth from '../utils/auth';

// TODO: DECIDE IF WE NEED TYPES ON THIS LOADER
//* TYPES

//* STATE
let USER_DATA = null;

export const homeLoader = async () => {
  const userProfile = auth.getProfile();
  const userProfileID = userProfile.data._id;

  let userData = await UsersAPI.get(userProfileID);

  if (!userData.ok) throw userData;
  userData = await userData.json();
  USER_DATA = userData;

  return { userData: USER_DATA };
};
