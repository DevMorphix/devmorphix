import React from 'react';
import SEO from '../components/SEO';
import Team from '../components/Team';

const TeamPage: React.FC = () => {
  return (
    <>
      <SEO
        title="DevMorphix Team | Website & Software Experts in Kerala"
        description="Meet the DevMorphix team delivering IT solutions, website development, and software development for businesses across Kerala and India."
        keywords="devmorphix team, website developers kerala, software experts kottayam, it company changanacherry"
        canonical="/team"
        ogImage="/og-team.jpg"
      />
      <Team />
    </>
  );
};

export default TeamPage;
