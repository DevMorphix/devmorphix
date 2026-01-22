import React from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Services - Web Development, AI & Digital Solutions"
        description="Explore DevMorphix's comprehensive digital services: custom web development, mobile apps, AI integration, cloud solutions, UI/UX design, and digital transformation consulting."
        keywords="web development services, mobile app development, AI integration, cloud solutions, UI/UX design, digital transformation, software consulting, API development"
        canonical="/services"
        ogImage="/og-services.jpg"
      />
      <StructuredData type="Service" />
      <Services />
    </>
  );
};

export default ServicesPage;
