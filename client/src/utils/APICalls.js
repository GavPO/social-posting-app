import auth from './auth';

export const UsersAPI = {
  getAll: async () =>
    await fetch('/api/users', {
      headers: {
        authorization: 'Bearer ' + auth.getToken(),
      },
    }),
  get: async (id) =>
    await fetch(`/api/users/${id}`, {
      headers: {
        authorization: 'Bearer ' + auth.getToken(),
      },
    }),
  getUsersPosts: async (id) =>
    await fetch(`/api/users/${id}/posts`, {
      headers: {
        authorization: 'Bearer ' + auth.getToken(),
      },
    }),
  login: async (userData) =>
    await fetch(`/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }),
  signup: async (userData) =>
    await fetch(`/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }),
};

export const PostsAPI = {
  getAll: async () =>
    await fetch('/api/posts', {
      headers: {
        authorization: 'Bearer ' + auth.getToken(),
      },
    }),
  get: async (id) =>
    await fetch(`/api/posts/${id}`, {
      headers: {
        authorization: 'Bearer ' + auth.getToken(),
      },
    }),
  post: async (postData) =>
    await fetch(`/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + auth.getToken(),
      },
      body: JSON.stringify(postData),
    }),
  delete: async (id) =>
    await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + auth.getToken(),
      },
    }),
};
