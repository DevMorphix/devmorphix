import React, { useEffect } from 'react';
import seoConfig from '../config/seoConfig';

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
  const siteUrl = seoConfig.siteUrl;
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
    setMetaTag('og:locale', 'en_IN', true);

    // Twitter
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:url', fullCanonical);
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', `${siteUrl}${ogImage}`);
    setMetaTag('twitter:site', seoConfig.twitterUsername);

    // Additional SEO Meta Tags
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('language', 'English');
    setMetaTag('geo.region', 'IN-KL');
    setMetaTag('geo.placename', 'Changanacherry, Kottayam, Alappuzha, Kerala');
    setMetaTag('geo.position', '9.4425;76.5476');
    setMetaTag('ICBM', '9.4425, 76.5476');
    setMetaTag('author', 'DevMorphix');
  }, [title, description, keywords, fullTitle, fullCanonical, ogType, ogImage, twitterCard, siteUrl]);

  return null;
};

export default SEO;
