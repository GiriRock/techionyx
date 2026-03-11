import { Outlet } from 'react-router-dom';

import Footer from '@/sections/Footer';
import Navigation from '@/sections/Navigation';

const SiteLayout = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
