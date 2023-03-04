import { PostsAPI } from '../utils/APICalls';
import auth from '../utils/auth';

//* TYPES
const CREATE_POST = 'CREATE_POST';

//* STATE
let ALL_POSTS = null;

export const feedLoader = async () => {
  let allPosts = await PostsAPI.getAll();
  if (!allPosts.ok) throw allPosts;
  allPosts = await allPosts.json();
  ALL_POSTS = allPosts;

  return { allPosts: ALL_POSTS };
};

export const profileFeedLoader = async () => {
  const userProfile = auth.getProfile();
  const userProfileID = userProfile.data._id;

  let allPosts = await PostsAPI.getAll();
  if (!allPosts.ok) throw allPosts;
  allPosts = await allPosts.json();

  allPosts = allPosts.filter((post) => post.user._id === userProfileID);

  ALL_POSTS = allPosts;

  return { allPosts: ALL_POSTS };
};

export const feedAction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  switch (data.type) {
    case CREATE_POST:
      break;
    default:
      throw new Error(`Invalid action type: ${data.type}`);
  }
  return null;
};
