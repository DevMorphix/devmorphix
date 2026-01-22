import React from 'react';
import SEO from '../components/SEO';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us - Expert Digital Transformation Team"
        description="Meet the DevMorphix team - passionate developers, designers, and strategists dedicated to transforming businesses through innovative digital solutions and cutting-edge technology."
        keywords="about DevMorphix, digital agency team, web development experts, technology consultants, software development company"
        canonical="/about"
        ogImage="/og-about.jpg"
      />
      <About />
    </>
  );
};

export default AboutPage;
