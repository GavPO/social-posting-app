import { PostsAPI } from '../utils/APICalls';
import auth from '../utils/auth';

// eslint-disable-next-line no-unused-vars
import { useActionData, useLoaderData } from 'react-router-dom';

//* TYPES
export const CREATE_POST = 'CREATE_POST';

//* STATE
let ALL_POSTS = null;

export const feedLoader = async () => {
  const userProfile = auth.getProfile();
  const userProfileID = userProfile.data._id;

  let allPosts = await PostsAPI.getAll();
  if (!allPosts.ok) throw allPosts;
  allPosts = await allPosts.json();

  allPosts = allPosts.filter((post) => post.user._id !== userProfileID);

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
  const userProfile = auth.getProfile();
  const userProfileID = userProfile.data._id;

  const data = Object.fromEntries(await request.formData());
  const { content } = data;

  let newPost = await PostsAPI.post({
    content,
    user: userProfileID,
  });

  if (!newPost.ok) throw newPost;
  newPost = await newPost.json();
  ALL_POSTS = [newPost, ...ALL_POSTS];
  return { allPosts: ALL_POSTS };

  // switch (data.type) {
  //   case CREATE_POST:
  //     let newPost = await PostsAPI.post({
  //       content: data.content,
  //       user: userProfileID,
  //     });

  //     if (!newPost.ok) throw newPost;
  //     newPost = await newPost.json();
  //     ALL_POSTS = [newPost, ...ALL_POSTS];
  //     return { allPosts: ALL_POSTS };
  //   default:
  //     throw new Error(`Invalid action type: ${data.type}`);
  // }
};

// export const useFeed = async () => {
//   const loaderData = useLoaderData();
//   const actionData = useActionData();

//   return { ...loaderData } || { ...actionData };
// };
