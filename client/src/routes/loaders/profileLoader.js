import { UsersAPI } from "../../utils/APICalls";
import auth from "../../utils/auth";

export const profileLoader = async () => {
  const userProfile = auth.getProfile();
  const id = userProfile.data._id;

  let userData = await UsersAPI.getSingleUser(id);

  if (!userData.ok) throw userData;

  userData = await userData.json();

  let postData = await UsersAPI.getUsersPosts(id);

  if (!postData.ok) throw postData;

  postData = await postData.json();

  return { user: userData, posts: postData };
};
