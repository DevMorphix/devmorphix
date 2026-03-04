import React from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact DevMorphix | IT Solutions in Kerala, India"
        description="Contact DevMorphix for IT solutions, website development, and software development in Changanacherry, Kottayam, Alappuzha, Kerala, and across India."
        keywords="contact devmorphix, it solutions kerala, website development changanacherry, software development kottayam, alappuzha"
        canonical="/contact"
        ogImage="/og-contact.jpg"
      />
      <StructuredData type="ContactPage" />
      <Contact />
    </>
  );
};

export default ContactPage;
