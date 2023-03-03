import { UsersAPI } from "../../utils/APICalls";
import auth from "../../utils/auth";

export const profileLoader = async ({ request }) => {
  const id = new URL(request.url).searchParams.get('userID');
  let userID

  const userProfile = auth.getProfile();
  const userProfileID = userProfile.data._id;
  
  id ? userID = id : userID = userProfileID

const myProfile = userID === userProfileID


  let userData = await UsersAPI.getSingleUser(userID);

  if (!userData.ok) throw userData;

  userData = await userData.json();

  let postData = await UsersAPI.getUsersPosts(userID);

  if (!postData.ok) throw postData;

  postData = await postData.json();

  return { myProfile, user: userData, posts: postData };
};
