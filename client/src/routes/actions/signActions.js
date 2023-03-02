export const loginAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  console.log("### formData", formData);

  const loginRes = await fetch(`/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  console.log("### loginRes", loginRes);

  return { loginRes };
};

export const signupAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  console.log("### formData", formData);
};
