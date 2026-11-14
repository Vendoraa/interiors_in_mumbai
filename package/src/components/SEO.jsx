import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, canonical }) => {
    const siteTitle = "Interiors in Mumbai";
    const defaultDescription = "Interior design and turnkey home renovation in Mumbai. 1,200+ homes completed since 2009. Free site visit, 3D designs and a fixed quote before work starts.";
    const defaultKeywords = "interior design mumbai, home interiors mumbai, home renovation mumbai, modular kitchen mumbai, interior designers mira road";
    const defaultImage = `${process.env.REACT_APP_SITE_URL || "https://www.interiorsinmumbai.com"}/logo512.png`;

    const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const metaImage = image || defaultImage;

    const siteUrl = process.env.REACT_APP_SITE_URL || "https://www.interiorsinmumbai.com";
    const canonicalUrl = canonical || (typeof window !== 'undefined' ? `${siteUrl}${window.location.pathname}` : siteUrl);

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
