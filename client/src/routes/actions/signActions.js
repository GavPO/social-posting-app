import auth from "../../utils/auth";

export const loginAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  let loginRes = await fetch(`/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  loginRes = await loginRes.json();
  auth.login(loginRes.token);

  return { loginRes };
};

export const signupAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  let signupRes = await fetch(`/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  signupRes = await signupRes.json();
  auth.login(signupRes.token);

  return { signupRes };
};
