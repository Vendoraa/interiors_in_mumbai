import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useUserInteraction from '../useUserInteraction';

const GoogleAnalytics = () => {
    const location = useLocation();
    const initialized = useRef(false);
    const interacted = useUserInteraction();

    useEffect(() => {
        // Only initialize once, and only after the user interacts (keeps pre-render bots and initial page load clean)
        if (initialized.current || !interacted) return;

        // Check if already loaded
        if (window.gtag) {
            initialized.current = true;
            return;
        }

        const gaId = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-CW4NTXNVXX';

        // Dynamic script injection to keep it out of index.html
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `;
        document.head.appendChild(script2);

        initialized.current = true;
    }, [interacted]);

    useEffect(() => {
        // Track page views on route change
        if (window.gtag) {
            window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-CW4NTXNVXX', {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null;
};

export default GoogleAnalytics;
