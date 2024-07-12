import {lazy} from 'react';

import Auth from '@/layouts/Auth';
import Loadable from '@/components/common/Loadable';

const Login = Loadable(lazy(() => import('@/pages/Auth/Login')));


const AuthRoutes = {
  path: '/',
  element: <Auth />,
  children: [
    {
      path: 'login',
      element: <Login/>
    },
  ]
};
export default AuthRoutes