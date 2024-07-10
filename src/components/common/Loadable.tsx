import {Suspense} from 'react';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: any) => (props: any) => (
  <Suspense>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
