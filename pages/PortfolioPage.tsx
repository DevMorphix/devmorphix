import React from 'react';
import SEO from '../components/SEO';
import Portfolio from '../components/Portfolio';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Portfolio | DevMorphix Website & Software Projects"
        description="Discover DevMorphix portfolio projects in website development and software development delivered for businesses in Kerala and India."
        keywords="devmorphix portfolio, website development projects kerala, software development case studies india, kottayam web company"
        canonical="/portfolio"
        ogImage="/og-portfolio.jpg"
      />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
