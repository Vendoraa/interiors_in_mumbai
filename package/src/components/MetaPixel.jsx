import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaPixel = () => {
    const location = useLocation();

    useEffect(() => {
        // Inject Meta Pixel script
        const script = document.createElement('script');
        script.innerHTML = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2045773609581642');
            fbq('track', 'PageView');
        `;
        document.head.appendChild(script);

        // Add noscript fallback image
        const noscript = document.createElement('noscript');
        const img = document.createElement('img');
        img.height = 1;
        img.width = 1;
        img.style.display = 'none';
        img.src = 'https://www.facebook.com/tr?id=2045773609581642&ev=PageView&noscript=1';
        noscript.appendChild(img);
        document.body.appendChild(noscript);

        return () => {
            // Cleanup on unmount
            if (script.parentNode) {
                document.head.removeChild(script);
            }
            if (noscript.parentNode) {
                document.body.removeChild(noscript);
            }
        };
    }, []);

    useEffect(() => {
        // Track page views on route change
        if (window.fbq) {
            window.fbq('track', 'PageView');
        }
    }, [location]);

    return null;
};

export default MetaPixel;
