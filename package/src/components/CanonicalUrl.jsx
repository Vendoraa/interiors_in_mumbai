import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CanonicalUrl = () => {
    const location = useLocation();

    useEffect(() => {
        const canonicalUrl = 'https://shrishti-interiors.com' + location.pathname;
        let link = document.querySelector("link[rel='canonical']");

        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }

        link.setAttribute('href', canonicalUrl);
    }, [location]);

    return null;
};

export default CanonicalUrl;
