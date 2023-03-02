import auth from "./auth";

export const UsersAPI = {
  getAllUsers: async () =>
    await fetch("/api/users", {
      headers: {
        authorization: "Bearer " + auth.getToken(),
      },
    }),
  getSingleUser: async (id) =>
    await fetch(`/api/users/${id}`, {
      headers: {
        authorization: "Bearer " + auth.getToken(),
      },
    }),
};
