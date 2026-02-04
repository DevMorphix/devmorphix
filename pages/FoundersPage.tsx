import React from 'react';
import SEO from '../components/SEO';
import Founders from '../components/Founders';

const FoundersPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Founders - Meet the Visionaries Behind DevMorphix"
        description="Meet the founders of DevMorphix - Alexander Voss and Elena Sterling. Visionary leaders combining creative excellence with technical mastery to transform the digital landscape."
        keywords="DevMorphix founders, Alexander Voss, Elena Sterling, digital agency leadership, creative director, lead architect, web development team"
        canonical="/founders"
        ogImage="/og-founders.jpg"
      />
      <Founders />
    </>
  );
};

export default FoundersPage;
