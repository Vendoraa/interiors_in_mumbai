import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, canonical }) => {
    const siteTitle = "Interiors in Mumbai";
    const defaultDescription = "Interior design and turnkey home renovation in Mumbai. 1,200+ homes completed since 2009. Free site visit, 3D designs and a fixed quote before work starts.";
    const defaultKeywords = "interior design mumbai, home interiors mumbai, home renovation mumbai, modular kitchen mumbai, interior designers mira road";
    const defaultImage = `${process.env.REACT_APP_SITE_URL || "https://www.interiorsinmumbai.com"}/logo512.png`;

    // Build a title that stays within the ~60 character SEO limit.
    // Only append the brand name when the combined title still fits.
    const MAX_TITLE_LENGTH = 60;
    const buildTitle = (pageTitle) => {
        if (!pageTitle) return siteTitle;
        const withBrand = `${pageTitle} | ${siteTitle}`;
        if (withBrand.length <= MAX_TITLE_LENGTH) return withBrand;
        // If the page title alone already fits, use it without the brand suffix
        if (pageTitle.length <= MAX_TITLE_LENGTH) return pageTitle;
        // Otherwise truncate at a word boundary to fit
        const truncated = pageTitle.slice(0, MAX_TITLE_LENGTH - 1);
        const lastSpace = truncated.lastIndexOf(' ');
        return `${(lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated).trimEnd()}…`;
    };

    const metaTitle = buildTitle(title);
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const metaImage = image || defaultImage;

    const siteUrl = process.env.REACT_APP_SITE_URL || "https://www.interiorsinmumbai.com";

    // Netlify serves pages with a trailing slash (e.g. /about-us/), so the
    // canonical must match that exact URL. Pointing the canonical at the
    // non-slash version would target a URL that 301-redirects.
    const normalizeCanonical = (url) => {
        if (!url) return url;
        const [base, hash] = url.split('#');
        const [path, query] = base.split('?');
        const withSlash = path.endsWith('/') ? path : `${path}/`;
        return `${withSlash}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`;
    };

    const rawCanonical = canonical || (typeof window !== 'undefined' ? `${siteUrl}${window.location.pathname}` : siteUrl);
    const canonicalUrl = normalizeCanonical(rawCanonical);

    // Generate BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.interiorsinmumbai.com"
            },
            // Dynamic breadcrumbs would be added here based on props or route
            // For now, we'll add a generic second level if title is present
            ...(title ? [{
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": canonicalUrl
            }] : [])
        ]
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{metaTitle}</title>
            <meta name='description' content={metaDescription} />
            <meta name='keywords' content={metaKeywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph tags */}
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Breadcrumb Schema */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
