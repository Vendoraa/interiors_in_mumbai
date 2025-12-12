import { useEffect } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import '../assets/css/cookie-consent-custom.css';
import * as CookieConsent from 'vanilla-cookieconsent';

const CookieConsentBanner = () => {
    useEffect(() => {
        CookieConsent.run({
            cookie: {
                name: 'cc_cookie',
                domain: window.location.hostname,
                path: '/',
                sameSite: 'Lax',
                expiresAfterDays: 365
            },

            guiOptions: {
                consentModal: {
                    layout: 'box inline',
                    position: 'bottom right',
                },
                preferencesModal: {
                    layout: 'box',
                    position: 'right',
                    equalWeightButtons: true,
                    flipButtons: false
                }
            },

            categories: {
                necessary: {
                    readOnly: true,
                    enabled: true
                },
                analytics: {
                    enabled: false
                },
                marketing: {
                    enabled: false
                }
            },

            language: {
                default: 'en',
                translations: {
                    en: {
                        consentModal: {
                            title: '🍪 We use cookies!',
                            description: 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept all", you consent to our use of cookies.',
                            acceptAllBtn: 'Accept all',
                            acceptNecessaryBtn: 'Reject all',
                            showPreferencesBtn: 'Manage preferences',
                            footer: '<a href="/privacy-policy">Privacy Policy</a>'
                        },
                        preferencesModal: {
                            title: 'Cookie Preferences',
                            acceptAllBtn: 'Accept all',
                            acceptNecessaryBtn: 'Reject all',
                            savePreferencesBtn: 'Save preferences',
                            closeIconLabel: 'Close',
                            sections: [
                                {
                                    title: 'Cookie Usage',
                                    description: 'We use cookies to improve your experience on our website. You can choose which types of cookies to allow.'
                                },
                                {
                                    title: 'Strictly Necessary Cookies',
                                    description: 'These cookies are essential for the website to function properly. They cannot be disabled.',
                                    linkedCategory: 'necessary'
                                },
                                {
                                    title: 'Analytics Cookies',
                                    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics for this purpose.',
                                    linkedCategory: 'analytics',
                                    cookieTable: {
                                        headers: {
                                            name: 'Cookie',
                                            domain: 'Domain',
                                            description: 'Description',
                                            expiration: 'Expiration'
                                        },
                                        body: [
                                            {
                                                name: '_ga',
                                                domain: 'Google Analytics',
                                                description: 'Used to distinguish users',
                                                expiration: '2 years'
                                            },
                                            {
                                                name: '_gid',
                                                domain: 'Google Analytics',
                                                description: 'Used to distinguish users',
                                                expiration: '24 hours'
                                            }
                                        ]
                                    }
                                },
                                {
                                    title: 'Marketing Cookies',
                                    description: 'These cookies are used to track visitors across websites to display relevant advertisements. We use Meta Pixel (Facebook) for marketing purposes.',
                                    linkedCategory: 'marketing',
                                    cookieTable: {
                                        headers: {
                                            name: 'Cookie',
                                            domain: 'Domain',
                                            description: 'Description',
                                            expiration: 'Expiration'
                                        },
                                        body: [
                                            {
                                                name: '_fbp',
                                                domain: 'Meta (Facebook)',
                                                description: 'Used for ad delivery and measurement',
                                                expiration: '3 months'
                                            }
                                        ]
                                    }
                                },
                                {
                                    title: 'More information',
                                    description: 'For more information about our use of cookies, please read our <a href="/privacy-policy">Privacy Policy</a>.'
                                }
                            ]
                        }
                    }
                }
            },

            onConsent: ({ cookie }) => {
                console.log('Cookie consent given:', cookie);

                // Load analytics if consented
                if (cookie.categories.includes('analytics')) {
                    console.log('Analytics cookies accepted');
                    // Google Analytics will load automatically from GoogleAnalytics component
                }

                // Load marketing if consented
                if (cookie.categories.includes('marketing')) {
                    console.log('Marketing cookies accepted');
                    // Meta Pixel will load automatically from MetaPixel component
                }
            },

            onChange: ({ cookie, changedCategories }) => {
                console.log('Cookie preferences changed:', changedCategories);

                // Handle preference changes
                if (changedCategories.includes('analytics')) {
                    if (!cookie.categories.includes('analytics')) {
                        console.log('Analytics cookies rejected - page reload recommended');
                    }
                }

                if (changedCategories.includes('marketing')) {
                    if (!cookie.categories.includes('marketing')) {
                        console.log('Marketing cookies rejected - page reload recommended');
                    }
                }
            }
        });
    }, []);

    return null; // This component doesn't render anything
};

export default CookieConsentBanner;
