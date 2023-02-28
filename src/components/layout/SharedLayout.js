import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Alert from './Alert';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Alert />
        <Outlet />
      </div>
    </>
  );
};
export default SharedLayout;
