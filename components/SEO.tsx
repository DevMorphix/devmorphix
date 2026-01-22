import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = '/og-image.jpg',
  twitterCard = 'summary_large_image'
}) => {
  const siteUrl = 'https://devmorphix.com'; // Update with your actual domain
  const fullTitle = `${title} | DevMorphix`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      
      element.setAttribute('href', href);
    };

    // Primary Meta Tags
    setMetaTag('title', fullTitle);
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    setLinkTag('canonical', fullCanonical);

    // Open Graph / Facebook
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', fullCanonical, true);
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', `${siteUrl}${ogImage}`, true);
    setMetaTag('og:site_name', 'DevMorphix', true);

    // Twitter
    setMetaTag('twitter:card', twitterCard, true);
    setMetaTag('twitter:url', fullCanonical, true);
    setMetaTag('twitter:title', fullTitle, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', `${siteUrl}${ogImage}`, true);

    // Additional SEO Meta Tags
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'English');
    setMetaTag('revisit-after', '7 days');
    setMetaTag('author', 'DevMorphix');
  }, [title, description, keywords, fullTitle, fullCanonical, ogType, ogImage, twitterCard, siteUrl]);

  return null;
};

export default SEO;
