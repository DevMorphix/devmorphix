import React, { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'ContactPage';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseUrl = 'https://devmorphix.com';

    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'DevMorphix',
          description: 'Premium web development and digital transformation agency',
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-XXX-XXX-XXXX',
            contactType: 'customer service',
            email: 'hello@devmorphix.com',
            availableLanguage: ['English']
          },
          sameAs: [
            'https://twitter.com/devmorphix',
            'https://linkedin.com/company/devmorphix',
            'https://github.com/devmorphix'
          ],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US'
          }
        };

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'DevMorphix',
          url: baseUrl,
          description: 'Premium web development and digital solutions',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        };

      case 'Service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Web Development',
          provider: {
            '@type': 'Organization',
            name: 'DevMorphix',
            url: baseUrl
          },
          areaServed: 'Worldwide',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Web Development Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Custom Web Development'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Mobile App Development'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Integration'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'UI/UX Design'
                }
              }
            ]
          }
        };

      case 'ContactPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact DevMorphix',
          description: 'Get in touch with DevMorphix for your digital transformation needs',
          url: `${baseUrl}/#/contact`
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  useEffect(() => {
    if (!structuredData) return;

    // Create script element for structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `structured-data-${type}`;
    script.text = JSON.stringify(structuredData);

    // Remove existing script if present
    const existingScript = document.getElementById(`structured-data-${type}`);
    if (existingScript) {
      existingScript.remove();
    }

    // Append new script
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [structuredData, type]);

  return null;
};

export default StructuredData;
