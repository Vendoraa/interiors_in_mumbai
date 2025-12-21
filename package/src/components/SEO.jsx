import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image }) => {
    const siteTitle = "Interiors in Mumbai";
    const defaultDescription = "Premier interior design firm in Mumbai offering premium home renovations, modern office design, and turnkey architectural projects.";
    const defaultKeywords = "interior design, mumbai, architects, home renovation, premium interiors";
    const defaultImage = "https://visva.dexignzone.com/react/social-image.png";

    const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const metaImage = image || defaultImage;

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
                "item": window.location.href
            }] : [])
        ]
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{metaTitle}</title>
            <meta name='description' content={metaDescription} />
            <meta name='keywords' content={metaKeywords} />

            {/* Open Graph tags */}
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
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
