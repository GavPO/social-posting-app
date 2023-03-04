import { UsersAPI } from '../utils/APICalls';
import auth from '../utils/auth';

// TODO: Decide if we need types on this route
//* TYPES

//* STATE
let USER_DATA = null;
let POST_DATA = null;

export const profileLoader = async ({ request }) => {
  let id = new URL(request.url).searchParams.get('userID');
  const userProfile = auth.getProfile();
  const userProfileID = userProfile.data._id;

  id = id ? id : (id = userProfileID);

  const myProfile = id === userProfileID;

  let userData = await UsersAPI.get(id);
  if (!userData.ok) throw userData;
  userData = await userData.json();

  USER_DATA = userData;

  let postData = await UsersAPI.getUsersPosts(id);
  if (!postData.ok) throw postData;
  postData = await postData.json();

  POST_DATA = postData;

  return { myProfile, user: USER_DATA, posts: POST_DATA };
};
