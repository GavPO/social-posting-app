import auth from '../utils/auth';
import { redirect } from 'react-router-dom';
import { UsersAPI } from '../utils/APICalls';

export const loginAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  let loginRes = await UsersAPI.login(formData);

  if (loginRes.ok) {
    console.log('should redirect');
    loginRes = await loginRes.json();

    auth.login(loginRes.token);
    return redirect('/');
  }
  if (!loginRes.ok) throw loginRes;
  return null;
};

export const signupAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  let signupRes = UsersAPI.signup(formData);

  if (signupRes.ok) {
    console.log('should redirect');
    signupRes = await signupRes.json();

    auth.login(signupRes.token);
    return redirect('/');
  }
  if (!signupRes.ok) throw signupRes;
  return null;
};
