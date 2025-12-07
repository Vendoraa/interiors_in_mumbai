import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Dynamic script injection to keep it out of index.html
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-CW4NTXNVXX';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CW4NTXNVXX');
    `;
        document.head.appendChild(script2);

        return () => {
            // Optional: Cleanup if needed, though GA usually stays
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    useEffect(() => {
        // Track page views on route change
        if (window.gtag) {
            window.gtag('config', 'G-CW4NTXNVXX', {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null;
};

export default GoogleAnalytics;
