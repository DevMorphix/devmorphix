import React from 'react';
import SEO from '../components/SEO';
import Templates from '../components/Templates';

const TemplatesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Premium Templates - Ready-to-Use Website & App Templates"
        description="Browse DevMorphix's collection of premium, professionally designed templates for websites and applications. Fast-track your project with our customizable, modern templates."
        keywords="website templates, app templates, premium templates, web design templates, React templates, responsive templates, business templates"
        canonical="/templates"
        ogImage="/og-templates.jpg"
      />
      <Templates />
    </>
  );
};

export default TemplatesPage;
