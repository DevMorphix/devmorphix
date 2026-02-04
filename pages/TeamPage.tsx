import React from 'react';
import SEO from '../components/SEO';
import Team from '../components/Team';

const TeamPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Team - Meet the DevMorphix Experts"
        description="Meet the talented team behind DevMorphix - creative directors, architects, and strategists combining excellence with innovation to transform the digital landscape."
        keywords="DevMorphix team, digital agency team, web development experts, creative directors, technology strategists, design team"
        canonical="/team"
        ogImage="/og-team.jpg"
      />
      <Team />
    </>
  );
};

export default TeamPage;
