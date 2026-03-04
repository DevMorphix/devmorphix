import React from 'react';
import SEO from '../components/SEO';
import Templates from '../components/Templates';

const TemplatesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Website Templates by DevMorphix"
        description="Browse modern DevMorphix website templates to launch business sites faster with performance-focused design and clean UX."
        keywords="website templates, devmorphix templates, business website templates india, responsive templates kerala"
        canonical="/templates"
        ogImage="/og-templates.jpg"
      />
      <Templates />
    </>
  );
};

export default TemplatesPage;
