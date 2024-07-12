import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
  return useRoutes([AuthRoutes, MainRoutes]);
}
