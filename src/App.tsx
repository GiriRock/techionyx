import { Route, Routes } from 'react-router-dom';

import ScrollManager from '@/components/site/ScrollManager';
import SiteLayout from '@/components/site/SiteLayout';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import CaseStudyDetailPage from '@/pages/CaseStudyDetailPage';
import CompanyPage from '@/pages/CompanyPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import ProductsPage from '@/pages/ProductsPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ServicesPage from '@/pages/ServicesPage';
import SolutionDetailPage from '@/pages/SolutionDetailPage';
import SolutionsPage from '@/pages/SolutionsPage';

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
