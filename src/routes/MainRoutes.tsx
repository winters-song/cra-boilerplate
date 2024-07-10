import {lazy} from 'react';

import Default from '@/layouts/Default';
import Loadable from '@/components/common/Loadable';

const Home = Loadable(lazy(() => import('@/pages/Home')));


const MainRoutes = {
  path: '/',
  element: <Default/>,
  children: [
    {
      path: 'home',
      element: <Home/>
    },
  ]
};
export default MainRoutes