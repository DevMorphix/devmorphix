import React from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Home from '../components/Home';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="DevMorphix IT Solutions | Website & Software Development in Kerala"
        description="DevMorphix provides IT solutions, website development, and software development services in Changanacherry, Kottayam, Alappuzha, Kerala, and across India."
        keywords="devmorphix, it solutions, changanacherry, kottayam, alappuzha kerala, india, website development, website developement, software development"
        canonical="/"
        ogImage="/og-home.jpg"
      />
      <StructuredData type="Organization" />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="WebSite" />
      <Home />
    </>
  );
};

export default HomePage;
