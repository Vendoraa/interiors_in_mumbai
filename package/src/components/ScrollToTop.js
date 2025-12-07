import { useEffect } from "react";

import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      const pageWrapper = document.querySelector('.page-wraper');
      if (pageWrapper) {
        pageWrapper.scrollTop = 0;
      }
    };

    scrollToTop();

    // Delayed scroll to handle dynamic content or transitions
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}