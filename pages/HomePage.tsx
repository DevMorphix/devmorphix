import React from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Home from '../components/Home';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Premium Web Development & Digital Solutions"
        description="DevMorphix delivers cutting-edge web development, AI integration, and digital transformation solutions. Transform your business with our expert team of developers and designers."
        keywords="web development, digital agency, AI integration, custom software, app development, UI/UX design, DevMorphix"
        canonical="/"
        ogImage="/og-home.jpg"
      />
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />
      <Home />
    </>
  );
};

export default HomePage;
