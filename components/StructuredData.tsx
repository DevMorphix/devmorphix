import React, { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'WebSite' | 'Service' | 'ContactPage';
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
          legalName: 'DevMorphix',
          description: 'IT solutions, website development, and software development company in Kerala, India',
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          foundingDate: '2020',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-00000-00000',
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
            addressLocality: 'Changanacherry',
            addressRegion: 'Kerala',
            addressCountry: 'IN'
          },
          areaServed: [
            'Changanacherry',
            'Kottayam',
            'Alappuzha',
            'Kerala',
            'India'
          ]
        };

      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'DevMorphix',
          image: `${baseUrl}/og-image.jpg`,
          url: baseUrl,
          telephone: '+91-00000-00000',
          email: 'hello@devmorphix.com',
          description: 'Kerala IT solutions company for website development and software development services.',
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Changanacherry',
            addressRegion: 'Kerala',
            addressCountry: 'IN'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 9.4425,
            longitude: 76.5476
          },
          areaServed: [
            {
              '@type': 'City',
              name: 'Changanacherry'
            },
            {
              '@type': 'City',
              name: 'Kottayam'
            },
            {
              '@type': 'City',
              name: 'Alappuzha'
            },
            {
              '@type': 'State',
              name: 'Kerala'
            },
            {
              '@type': 'Country',
              name: 'India'
            }
          ],
          sameAs: [
            'https://twitter.com/devmorphix',
            'https://linkedin.com/company/devmorphix',
            'https://github.com/devmorphix'
          ]
        };

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'DevMorphix',
          url: baseUrl,
          description: 'DevMorphix IT solutions, website development, and software development services in Kerala, India',
          inLanguage: 'en-IN'
        };

      case 'Service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Website Development and Software Development',
          name: 'DevMorphix IT Solutions Services',
          description: 'Website development, software development, and IT solutions for businesses in Changanacherry, Kottayam, Alappuzha, Kerala, and India.',
          provider: {
            '@type': 'Organization',
            name: 'DevMorphix',
            url: baseUrl
          },
          areaServed: [
            'Changanacherry',
            'Kottayam',
            'Alappuzha',
            'Kerala',
            'India'
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'IT Solutions and Software Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Custom Website Development'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Software Development'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'IT Solutions Consulting'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Web Application Development'
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
          description: 'Contact DevMorphix for IT solutions, website development, and software development in Kerala and India.',
          url: `${baseUrl}/contact`
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
