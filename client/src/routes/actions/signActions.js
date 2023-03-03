import auth from "../../utils/auth";
import { redirect } from "react-router-dom";

export const loginAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  let loginRes = await fetch(`/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (loginRes.ok) {
    console.log("should redirect");
    loginRes = await loginRes.json();

    auth.login(loginRes.token);
    return redirect("/");
  }
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

  if (signupRes.ok) {
    console.log("should redirect");
    signupRes = await signupRes.json();

    auth.login(signupRes.token);
    return redirect("/");
  }
};
