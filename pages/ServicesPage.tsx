import React from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="IT Solutions, Website & Software Development Services | DevMorphix"
        description="Explore DevMorphix services: IT solutions, website development, and software development in Changanacherry, Kottayam, Alappuzha, Kerala, and India."
        keywords="it solutions, website development services, software development services, devmorphix services, kottayam, alappuzha, kerala, india"
        canonical="/services"
        ogImage="/og-services.jpg"
      />
      <StructuredData type="Service" />
      <Services />
    </>
  );
};

export default ServicesPage;
