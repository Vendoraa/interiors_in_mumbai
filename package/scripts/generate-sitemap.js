const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.interiorsinmumbai.com';
const BUILD_DIR = path.join(__dirname, '..', 'build');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Routes to include in sitemap (from reactSnap.include + blog detail pages)
const staticRoutes = [
  '/',
  '/about-us',
  '/services',
  '/portfolio',
  '/blog',
  '/contact-us',
  '/privacy-policy',
  '/pricing',
  '/team',
  '/services-details',
  '/interior-designers-mira-road',
  '/interior-designers-andheri',
  '/interior-designers-bandra',
  '/interior-designers-powai',
  '/interior-designers-thane',
];

// Change frequency and priority mapping
const routeConfig = {
  '/': { changefreq: 'daily', priority: 1.0 },
  '/services': { changefreq: 'weekly', priority: 0.9 },
  '/portfolio': { changefreq: 'weekly', priority: 0.8 },
  '/blog': { changefreq: 'daily', priority: 0.8 },
  '/about-us': { changefreq: 'monthly', priority: 0.7 },
  '/pricing': { changefreq: 'monthly', priority: 0.7 },
  '/team': { changefreq: 'monthly', priority: 0.6 },
  '/contact-us': { changefreq: 'monthly', priority: 0.7 },
  '/privacy-policy': { changefreq: 'yearly', priority: 0.3 },
  '/services-details': { changefreq: 'weekly', priority: 0.6 },
  '/interior-designers-mira-road': { changefreq: 'weekly', priority: 0.8 },
  '/interior-designers-andheri': { changefreq: 'weekly', priority: 0.8 },
  '/interior-designers-bandra': { changefreq: 'weekly', priority: 0.8 },
  '/interior-designers-powai': { changefreq: 'weekly', priority: 0.8 },
  '/interior-designers-thane': { changefreq: 'weekly', priority: 0.8 },
};

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  sitemap += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  staticRoutes.forEach(route => {
    const config = routeConfig[route] || { changefreq: 'weekly', priority: 0.5 };
    sitemap += '  <url>\n';
    sitemap += `    <loc>${SITE_URL}${route}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${config.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${config.priority}</priority>\n`;
    
    // Add xhtml:link for hreflang (if needed for multi-language)
    sitemap += `    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${route}" />\n`;
    sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${route}" />\n`;
    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';

  const outputPath = path.join(BUILD_DIR, 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generated at ${outputPath} with ${staticRoutes.length} URLs`);
  
  // Also copy to public for dev reference
  const publicPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);
  console.log(`✅ Sitemap copied to ${publicPath}`);
}

generateSitemap();