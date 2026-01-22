import React from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us - Get Your Free Consultation"
        description="Ready to transform your digital presence? Contact DevMorphix today for a free consultation. Let's discuss your project and create something extraordinary together."
        keywords="contact DevMorphix, free consultation, web development quote, hire developers, project inquiry, get in touch, digital agency contact"
        canonical="/contact"
        ogImage="/og-contact.jpg"
      />
      <StructuredData type="ContactPage" />
      <Contact />
    </>
  );
};

export default ContactPage;
