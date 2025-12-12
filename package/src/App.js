import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import CanonicalUrl from './components/CanonicalUrl';
import GoogleAnalytics from './components/GoogleAnalytics';
import MetaPixel from './components/MetaPixel';
import CookieConsent from './components/CookieConsent';

import 'react-modal-video/scss/modal-video.scss';
import "./assets/vendor/switcher/switcher.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import './assets/css/style.css';

import React, { Suspense } from 'react';
import { BlogList } from './components/BlogList';
import LazyLoadErrorBoundary from './components/LazyLoadErrorBoundary';
import './App.css';

//layout
import Header from "./components/Header";
import Footer2 from "./components/Footer2";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTopButton from "./components/ScrollToTopButton";
//Pages - Lazy Loaded
const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Team = React.lazy(() => import("./pages/Team"));
const ComingSoon = React.lazy(() => import("./pages/ComingSoon"));
const Construction = React.lazy(() => import("./pages/Construction"));
const Error404 = React.lazy(() => import("./pages/Error404"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const PortfolioDetail = React.lazy(() => import("./pages/PortfolioDetail"));
const Services = React.lazy(() => import("./pages/Services"));
const ServicesDetail = React.lazy(() => import("./pages/ServicesDetail"));
const BlogGrid = React.lazy(() => import("./pages/BlogGrid"));
const LargLeftSidebar = React.lazy(() => import("./pages/LargLeftSidebar"));
const ListLeftSidebar = React.lazy(() => import("./pages/ListLeftSidebar"));
const BlogDetail = React.lazy(() => import("./pages/BlogDetail"));
const BlogDetails = React.lazy(() => import("./pages/BlogDetails"));
const ContectUs = React.lazy(() => import("./pages/ContectUs"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  return (
    <>
      <BrowserRouter>
        <GoogleAnalytics />
        <MetaPixel />
        <CanonicalUrl />
        <CookieConsent />
        <HelmetProvider>
          <div className="page-wraper">
            <Suspense fallback={
              <div className="loading-screen">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }>
              <LazyLoadErrorBoundary>
                <Routes>
                  <Route path="/under-construct" element={<Construction />} />
                  <Route path="/coming-soon" element={<ComingSoon />} />

                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="team" element={<Team />} />
                    <Route path="error-404" element={<Error404 />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="portfolio-details" element={<PortfolioDetail />} />
                    <Route path="services" element={<Services />} />
                    <Route path="services-details" element={<ServicesDetail />} />
                    <Route path="blog" element={<BlogList />} />
                    <Route path="blog/:id" element={<BlogDetail />} />
                    <Route path="blog-grid" element={<BlogGrid />} />
                    <Route path="blog-large-left-sidebar" element={<LargLeftSidebar />} />
                    <Route path="blog-list-left-sidebar" element={<ListLeftSidebar />} />
                    <Route path="blog-details/:id" element={<BlogDetails />} />
                    <Route path="blog-details" element={<BlogDetail />} />
                    <Route path="contact-us" element={<ContectUs />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  </Route>
                </Routes>
              </LazyLoadErrorBoundary>
            </Suspense>
            <ScrollToTop />
          </div>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer2 />
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </>
  )
}

export default App;
