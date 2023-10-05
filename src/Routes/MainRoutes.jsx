import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/profile',
        element: <PrivateRoute>Profile</PrivateRoute>,
      },
      {
        path: '/about',
        element: <>About</>,
      },
      {
        path:'/blog',
        element:<>Blog</>
      },
      {
        path:'/settings',
        element:<PrivateRoute>Settings</PrivateRoute>
      }
    ],
  },
]);

export default MainRoutes;
