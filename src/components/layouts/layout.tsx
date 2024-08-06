import { Outlet } from 'react-router-dom';
import BaseLayout from './base-layout';

const Layout = () => {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
};

export default Layout;
