# DevMorphix - Setup Instructions

## Installation Steps

### 1. Install Dependencies
Run the following command to install all required packages:

```bash
npm install
```

All dependencies are already listed in package.json.

### 2. Project Structure

```
devmorphix-web/
├── components/
│   ├── SEO.tsx                 # SEO meta tags component (native React)
│   ├── StructuredData.tsx      # JSON-LD structured data (native React)
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Home.tsx
│   ├── Navbar.tsx
│   ├── Portfolio.tsx
│   ├── Services.tsx
│   ├── Templates.tsx
│   └── ThemeContext.tsx
├── pages/
│   ├── HomePage.tsx            # / route with SEO
│   ├── AboutPage.tsx           # /about route with SEO
│   ├── ServicesPage.tsx        # /services route with SEO
│   ├── PortfolioPage.tsx       # /portfolio route with SEO
│   ├── TemplatesPage.tsx       # /templates route with SEO
│   └── ContactPage.tsx         # /contact route with SEO
├── config/
│   └── seoConfig.ts            # Centralized SEO configuration
├── public/
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # XML sitemap
├── App.tsx                     # Main app with routing
├── index.html                  # HTML with base SEO tags
└── SEO_IMPLEMENTATION.md       # Complete SEO guide
```

### 3. Routes Implemented

All pages are now separate routes with individual SEO:

- **/** - HomePage (with Organization & WebSite schema)
- **/about** - AboutPage
- **/services** - ServicesPage (with Service schema)
- **/portfolio** - PortfolioPage
- **/templates** - TemplatesPage
- **/contact** - ContactPage (with ContactPage schema)

### 4. SEO Features

✅ **Meta Tags**: Title, description, keywords for each page
✅ **Open Graph**: Facebook/LinkedIn sharing optimization
✅ **Twitter Cards**: Twitter sharing optimization
✅ **Structured Data**: JSON-LD schema markup
✅ **Sitemap**: XML sitemap for search engines
✅ **Robots.txt**: Search crawler instructions
✅ **Canonical URLs**: Duplicate content prevention
✅ **Mobile Optimization**: Responsive design meta tags

### 5. Before Going Live

Update the following in your code:

1. **Domain URL** in:
   - [components/SEO.tsx](components/SEO.tsx#L17) - Update `siteUrl`
   - [config/seoConfig.ts](config/seoConfig.ts#L5) - Update `siteUrl`
   - [public/sitemap.xml](public/sitemap.xml) - Replace all URLs
   - [index.html](index.html) - Update Open Graph URLs

2. **Contact Information** in:
   - [components/StructuredData.tsx](components/StructuredData.tsx#L20-L24) - Update phone and email
   - [config/seoConfig.ts](config/seoConfig.ts#L15-L18) - Update contact details

3. **Social Media Links** in:
   - [components/StructuredData.tsx](components/StructuredData.tsx#L28-L32)
   - [config/seoConfig.ts](config/seoConfig.ts#L10-L15)

4. **Create Social Share Images**:
   - Create images (1200x630px) in `public/`:
     - og-home.jpg
     - og-about.jpg
     - og-services.jpg
     - og-portfolio.jpg
     - og-templates.jpg
     - og-contact.jpg
   - Add favicon files

### 6. Run the Development Server

```bash
npm run dev
```

### 7. Build for Production

```bash
npm run build
```

### 8. Post-Launch SEO Tasks

1. Submit sitemap to Google Search Console
2. Submit sitemap to Bing Webmaster Tools
3. Verify site ownership in Google Search Console
4. Test structured data with Google Rich Results Test
5. Check mobile-friendliness
6. Monitor Core Web Vitals

## Testing Your SEO

### Before Launch:
- Meta Tags: https://metatags.io/
- Structured Data: https://validator.schema.org/
- Rich Results: https://search.google.com/test/rich-results

### After Launch:
- Google Search Console
- Google Analytics (optional)
- PageSpeed Insights
- Mobile-Friendly Test

## Need Help?

Refer to [SEO_IMPLEMENTATION.md](SEO_IMPLEMENTATION.md) for detailed documentation and best practices.

---

**Your application now has professional SEO implementation with separate routes for each page! 🚀**
