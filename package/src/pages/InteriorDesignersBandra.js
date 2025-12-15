import React from 'react';
import { Link } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const InteriorDesignersBandra = () => {
    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Interiors in Mumbai - Bandra",
        "image": "https://www.interiorsinmumbai.com/logo.png",
        "url": "https://www.interiorsinmumbai.com/interior-designers-bandra",
        "telephone": "+919987241424",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bandra West",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400050",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0596,
            "longitude": 72.8295
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "10:00",
            "closes": "19:00"
        },
        "priceRange": "₹₹₹₹",
        "areaServed": [
            "Bandra West",
            "Bandra East",
            "Pali Hill",
            "Carter Road",
            "Bandstand",
            "Khar West"
        ]
    };

    return (
        <>
            <SEO
                title="Premium Interior Designers in Bandra & Pali Hill | High-End Home Decor"
                description="Exclusive interior design services for Bandra, Pali Hill, and Carter Road. We create bespoke premium interiors for sea-facing apartments and heritage bungalows."
                keywords="interior designers bandra west, premium interiors pali hill, interior decorators bandra, sea facing apartment design, bungalow renovation mumbai"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(localSchema)}
                </script>
            </Helmet>

            <div className="page-content bg-white">
                <CommanBanner mainTitle="Interior Designers in Bandra" parentTitle="Locations" pageName="Bandra" bgImage={IMAGES.bandraBanner} />

                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-b30">
                                <div className="section-head style-1">
                                    <h6 className="sub-title text-primary">Queen of Suburbs</h6>
                                    <h2 className="title">Bespoke Interiors for Bandra Homes</h2>
                                    <p>Bandra represents the pinnacle of Mumbai living. Whether it's a heritage bungalow in Pali Hill, a sea-facing apartment on Carter Road, or a modern high-rise in BKC, our designs reflect sophistication and elegance. We specialize in creating unique, personality-driven spaces for the discerning Bandra resident.</p>
                                </div>

                                <div className="row m-b30">
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Ultra-Premium Design Concepts</li>
                                            <li>Heritage Home Restoration</li>
                                            <li>Imported Furniture Sourcing</li>
                                            <li>Art & Decor Curation</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Sea-View Optimization</li>
                                            <li>High-End Automation</li>
                                            <li>Walk-in Wardrobe Specialists</li>
                                            <li>Privacy & Security Focused</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>Exclusive Designs for Exclusive Addresses</h3>
                                <p className="m-b30">We understand that a home in Bandra is a statement. Our team works closely with you to create interiors that are not just beautiful but also timeless. We have experience with:</p>

                                <div className="widget widget_tag_cloud m-b30">
                                    <div className="tagcloud">
                                        <a href="#">Pali Hill</a>
                                        <a href="#">Carter Road</a>
                                        <a href="#">Bandstand</a>
                                        <a href="#">Mount Mary</a>
                                        <a href="#">Turner Road</a>
                                        <a href="#">BKC (Bandra Kurla Complex)</a>
                                        <a href="#">Khar West</a>
                                        <a href="#">Hill Road</a>
                                    </div>
                                </div>

                                <h3>Our Signature Services in Bandra</h3>
                                <div className="row">
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-sketch"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Heritage & Vintage</h4>
                                                <p>Restoring and enhancing the charm of old-world Bandra homes with modern comforts.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-blueprint"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Modern Elegance</h4>
                                                <p>Sleek, contemporary designs for new high-rises with Italian marble and premium veneers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-kitchen"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Premium Kitchens</h4>
                                                <p>Imported modular kitchens with island counters and built-in appliances.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-bed"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Walk-in Wardrobes</h4>
                                                <p>Bespoke closet designs with glass shutters and premium organizers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-window"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Terrace & Balcony</h4>
                                                <p>Outdoor deck flooring, vertical gardens, and patio furniture for sea-view homes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-conveyor"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Commercial Studios</h4>
                                                <p>Creative office spaces for media houses and boutiques in Bandra.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4 m-b30">
                                <div className="sticky-top">
                                    <div className="service-widget">
                                        <div className="widget widget_getintuch">
                                            <h4 className="widget-title">Contact Us</h4>
                                            <ul>
                                                <li><i className="ti-location-pin"></i> Bandra West, Pali Hill, Khar, BKC</li>
                                                <li><i className="ti-mobile"></i>+91 998 724 1424</li>
                                                <li><i className="ti-email"></i>hello@interiorsinmumbai.com</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="service-widget m-t30">
                                        <div className="widget">
                                            <h4 className="widget-title">Get a Quote</h4>
                                            <div className="text-center">
                                                <p>Looking for premium interiors in Bandra? Let's discuss your vision.</p>
                                                <Link to="/contact-us" className="btn btn-primary btn-block btn-rounded">Book Consultation</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default InteriorDesignersBandra;
