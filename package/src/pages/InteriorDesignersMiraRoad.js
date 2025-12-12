import React from 'react';
import { Link } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const InteriorDesignersMiraRoad = () => {
    const localSchema = {
        "@context": "https://schema.org",
        "@type": ["InteriorDesignBusiness", "GeneralContractor"],
        "name": "Interiors in Mumbai - Mira Road",
        "image": "https://www.interiorsinmumbai.com/logo.png",
        "url": "https://www.interiorsinmumbai.com/interior-designers-mira-road",
        "telephone": "+919987241424",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop 7, Aashirwad Building, Mira Road East",
            "addressLocality": "Mira-Bhayandar",
            "addressRegion": "Maharashtra",
            "postalCode": "401107",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.2813,
            "longitude": 72.8642
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
        "priceRange": "₹₹",
        "areaServed": [
            "Mira Road",
            "Bhayandar",
            "Dahisar",
            "Kanakia",
            "Lodha Aqua",
            "Jangid Complex"
        ]
    };

    return (
        <>
            <SEO
                title="Best Interior Designers & Contractors in Mira Road | Turnkey Execution"
                description="Top-rated interior designers and contractors in Mira Road. We specialize in full home renovation, civil work, and turnkey execution for 1BHK, 2BHK, 3BHK in Kanakia, Lodha."
                keywords="interior designers mira road, interior contractor mira road, home renovation contractor, civil work mira road, turnkey interior contractor, interior decorators mira road"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(localSchema)}
                </script>
            </Helmet>

            <div className="page-content bg-white">
                <CommanBanner mainTitle="Interior Designers & Contractors in Mira Road" parentTitle="Locations" pageName="Mira Road" bgImage={IMAGES.miraRoadBanner} />

                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-b30">
                                <div className="section-head style-1">
                                    <h6 className="sub-title text-primary">Local Experts</h6>
                                    <h2 className="title">Transforming Homes in Mira Road</h2>
                                    <p>As Mira Road's premier interior design and contracting firm, we understand the unique layouts and requirements of local residential complexes. From compact 1BHKs in Shanti Nagar to spacious 3BHKs in Kanakia and Lodha, we have designed over 200+ homes in your neighborhood.</p>
                                </div>

                                <div className="row m-b30">
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Specialized in Mira Road layouts</li>
                                            <li>Local workshop for faster delivery</li>
                                            <li>Familiar with society regulations</li>
                                            <li>Visit our studio in Aashirwad Bldg</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Budget-friendly packages</li>
                                            <li>Turnkey Civil Contracting</li>
                                            <li>Civil work experts</li>
                                            <li>10-Year Warranty</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>Turnkey Contracting & Execution</h3>
                                <p className="m-b30">Unlike pure design firms, we are full-service interior contractors. We handle everything from demolition and civil work to electrical, plumbing, and final finishing. Our in-house team of skilled carpenters, masons, and electricians ensures your project is executed to perfection without the hassle of managing multiple vendors.</p>

                                <h3>Why Choose Us for Your Mira Road Home?</h3>
                                <p className="m-b30">We are not just designers; we are your neighbors. Being locally based allows us to supervise your project daily, ensuring quality and timely completion. We have extensive experience working in major complexes like:</p>

                                <div className="widget widget_tag_cloud m-b30">
                                    <div className="tagcloud">
                                        <a href="#">Kanakia Spaces</a>
                                        <a href="#">Lodha Aqua</a>
                                        <a href="#">Jangid Complex</a>
                                        <a href="#">Shanti Nagar</a>
                                        <a href="#">Poonam Sagar</a>
                                        <a href="#">Srishti Complex</a>
                                        <a href="#">RNA Broadway</a>
                                        <a href="#">Unique Gardens</a>
                                    </div>
                                </div>

                                <h3>Our Services in Mira Road</h3>
                                <p>We offer end-to-end interior solutions tailored to Mira Road apartments:</p>
                                <div className="row">
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-living-room"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Full Home Renovation</h4>
                                                <p>Complete makeover including civil work, flooring, and painting.</p>
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
                                                <p>Space-saving designs perfect for Mira Road apartment layouts.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-bed"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Bedroom Wardrobes</h4>
                                                <p>Custom sliding and hinged wardrobes to maximize storage.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-blueprint"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Civil Work & Flooring</h4>
                                                <p>Expert tiling, plumbing, and electrical work for older buildings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-window"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">False Ceiling & Lighting</h4>
                                                <p>Modern POP designs and ambient lighting concepts.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-sketch"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">3D Visualization</h4>
                                                <p>See your dream home before we start with realistic 3D renders.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4 m-b30">
                                <div className="sticky-top">
                                    <div className="service-widget">
                                        <div className="widget widget_getintuch">
                                            <h4 className="widget-title">Visit Our Studio</h4>
                                            <ul>
                                                <li><i className="ti-location-pin"></i> Shop 7, Aashirwad Bldg, Mira Road East, Mumbai 401107</li>
                                                <li><i className="ti-mobile"></i>+91 998 724 1424</li>
                                                <li><i className="ti-email"></i>hello@interiorsinmumbai.com</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="service-widget m-t30">
                                        <div className="widget">
                                            <h4 className="widget-title">Get a Quote</h4>
                                            <div className="text-center">
                                                <p>Get a free estimate for your Mira Road home renovation.</p>
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

export default InteriorDesignersMiraRoad;
