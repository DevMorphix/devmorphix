import React from 'react';
import SEO from '../components/SEO';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About DevMorphix | IT Company in Changanacherry, Kerala"
        description="Meet DevMorphix, a Kerala-based IT solutions team focused on website development and software development for businesses in Changanacherry, Kottayam, Alappuzha, and India."
        keywords="about devmorphix, it company changanacherry, software development kottayam, website development alappuzha, kerala"
        canonical="/about"
        ogImage="/og-about.jpg"
      />
      <About />
    </>
  );
};

export default AboutPage;
