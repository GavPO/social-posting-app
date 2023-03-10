import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/pages/ErrorPage';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import { homeLoader } from './homeRoute';
import { loginAction, signupAction } from './signRoute';
import { profileLoader } from './profileRoute';
import { feedLoader, profileFeedLoader, feedAction } from './feedRoute';
import Signup from '../components/pages/Signup';
import Profile from '../components/pages/Profile';
import Feed from '../components/pages/Feed';
import Dashboard from '../components/Dashboard';

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: homeLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: feedLoader,
        action: feedAction,
      },
      {
        path: '/profile',
        element: <Profile />,
        loader: profileLoader,
        children: [
          {
            index: true,
            element: <Feed />,
            loader: profileFeedLoader,
          },
        ],
      },
      {
        path: '/feed',
        element: <Feed />,
        loader: feedLoader,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction,
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <ErrorPage />,
    action: signupAction,
  },
]);
