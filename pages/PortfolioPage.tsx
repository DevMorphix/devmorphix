import React from 'react';
import SEO from '../components/SEO';
import Portfolio from '../components/Portfolio';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Portfolio - Our Featured Projects & Case Studies"
        description="Discover DevMorphix's portfolio of successful web applications, mobile apps, and digital solutions. See how we've helped businesses achieve digital transformation and growth."
        keywords="web development portfolio, case studies, project showcase, client success stories, web design examples, app development projects"
        canonical="/portfolio"
        ogImage="/og-portfolio.jpg"
      />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
