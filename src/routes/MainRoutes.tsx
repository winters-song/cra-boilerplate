import {lazy} from 'react';

import Default from '@/layouts/Default';
import Loadable from '@/components/common/Loadable';

const Home = Loadable(lazy(() => import('@/pages/Home')));
const CourseList = Loadable(lazy(() => import('@/pages/Course')));
const UserList = Loadable(lazy(() => import('@/pages/User')));


const MainRoutes = {
  path: '/',
  element: <Default/>,
  children: [
    {
      path: 'home',
      element: <Home/>
    },
    {
      path: 'course/course-list',
      element: <CourseList/>
    },
    {
      path: 'user/user-list',
      element: <UserList/>
    },
  ]
};
export default MainRoutes