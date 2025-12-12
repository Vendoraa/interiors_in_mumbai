import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled upto given distance


    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        let ticking = false;
        const toggleVisibility = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.pageYOffset > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <div onClick={scrollToTop} className="scroll-to-top-btn shadow-lg" role="button" aria-label="Scroll to top" tabIndex="0">
                    <i className="fas fa-chevron-up"></i>
                </div>
            )}
            <style>{`
                .scroll-to-top-btn {
                    position: fixed;
                    bottom: 100px; /* Positioned above the WhatsApp button */
                    right: 30px;
                    z-index: 9998;
                    width: 50px;
                    height: 50px;
                    background-color: var(--primary);
                    color: #fff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 20px;
                }
                .scroll-to-top-btn:hover {
                    transform: translateY(-5px);
                    background-color: var(--secondary);
                }
            `}</style>
        </>
    );
};

export default ScrollToTopButton;
