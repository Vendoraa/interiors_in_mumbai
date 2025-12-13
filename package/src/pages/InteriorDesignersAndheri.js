import React from 'react';
import { Link } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const InteriorDesignersAndheri = () => {
    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Interiors in Mumbai - Andheri",
        "image": "https://www.interiorsinmumbai.com/logo.png",
        "url": "https://www.interiorsinmumbai.com/interior-designers-andheri",
        "telephone": "+919987241424",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Andheri West",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400053",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.1136,
            "longitude": 72.8697
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
        "priceRange": "₹₹₹",
        "areaServed": [
            "Andheri West",
            "Andheri East",
            "Lokhandwala",
            "Versova",
            "Juhu",
            "Oshiwara"
        ]
    };

    return (
        <>
            <SEO
                title="Top Interior Designers in Andheri West & East | Luxury Home Interiors"
                description="Premium interior design services in Andheri, Lokhandwala, and Versova. We specialize in luxury apartments, celebrity homes, and modern office spaces in Andheri."
                keywords="interior designers andheri west, interior designers lokhandwala, interior decorators andheri east, luxury interiors versova, office interior design andheri"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(localSchema)}
                </script>
            </Helmet>

            <div className="page-content bg-white">
                <CommanBanner mainTitle="Interior Designers in Andheri" parentTitle="Locations" pageName="Andheri" bgImage={IMAGES.andheriBanner} />

                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-b30">
                                <div className="section-head style-1">
                                    <h6 className="sub-title text-primary">Andheri's Design Experts</h6>
                                    <h2 className="title">Luxury Interiors for Andheri Homes</h2>
                                    <p>Andheri is the heart of Mumbai's lifestyle. From the posh high-rises of Lokhandwala to the spacious apartments in Versova and the corporate hubs of Andheri East, we understand the diverse design needs of this vibrant suburb. We bring a blend of glamour and functionality to your space.</p>
                                </div>

                                <div className="row m-b30">
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Luxury High-Rise Specialists</li>
                                            <li>Celebrity Home Design Experience</li>
                                            <li>Space-Saving Solutions</li>
                                            <li>Modern & Contemporary Styles</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Premium Material Selection</li>
                                            <li>Smart Home Automation</li>
                                            <li>Corporate Office Designs</li>
                                            <li>Timely Project Completion</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>Designing for Andheri's Lifestyle</h3>
                                <p className="m-b30">We have extensive experience working in Andheri's most prestigious addresses. We understand the specific requirements of cooperative societies and new developments in the area.</p>

                                <div className="widget widget_tag_cloud m-b30">
                                    <div className="tagcloud">
                                        <a href="#">Lokhandwala Complex</a>
                                        <a href="#">Oberoi Springs</a>
                                        <a href="#">Rustomjee Elements</a>
                                        <a href="#">Runwal Elegante</a>
                                        <a href="#">Transcon Triumph</a>
                                        <a href="#">Adani Western Heights</a>
                                        <a href="#">Versova</a>
                                        <a href="#">Seven Bungalows</a>
                                    </div>
                                </div>

                                <h3>Our Expertise in Andheri</h3>
                                <div className="row">
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-office"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Luxury Apartments</h4>
                                                <p>Bespoke designs for 3BHK, 4BHK, and Penthouses with premium finishes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-conveyor"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Commercial Spaces</h4>
                                                <p>Modern office interiors for startups and corporates in Andheri East & MIDC.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-kitchen"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Modular Kitchens</h4>
                                                <p>High-end modular kitchens with German hardware and premium finishes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-bed"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Master Bedrooms</h4>
                                                <p>Luxurious bedroom suites with walk-in closets and ensuite designs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-window"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Home Automation</h4>
                                                <p>Smart lighting, curtains, and security systems for modern homes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-sketch"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Turnkey Execution</h4>
                                                <p>End-to-end project management from design to final handover.</p>
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
                                                <li><i className="ti-location-pin"></i> Andheri West, Lokhandwala, Versova, Andheri East</li>
                                                <li><i className="ti-mobile"></i>+91 998 724 1424</li>
                                                <li><i className="ti-email"></i>hello@interiorsinmumbai.com</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="service-widget m-t30">
                                        <div className="widget">
                                            <h4 className="widget-title">Get a Quote</h4>
                                            <div className="text-center">
                                                <p>Planning a renovation in Andheri? Get a customized estimate today.</p>
                                                <Link to="/contact-us" className="btn btn-primary btn-block btn-rounded">Book Free Consultation</Link>
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

export default InteriorDesignersAndheri;
