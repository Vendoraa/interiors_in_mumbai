import React from 'react';
import { Link } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const InteriorDesignersPowai = () => {
    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Interiors in Mumbai - Powai",
        "image": "https://www.interiorsinmumbai.com/logo.png",
        "url": "https://www.interiorsinmumbai.com/interior-designers-powai",
        "telephone": "+919987241424",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Hiranandani Gardens",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400076",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.1197,
            "longitude": 72.9050
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
            "Powai",
            "Hiranandani Gardens",
            "Chandivali",
            "Vikhroli",
            "Kanjurmarg"
        ]
    };

    return (
        <>
            <SEO
                title="Best Interior Designers in Powai & Hiranandani | Modern Home Decor"
                description="Expert interior designers for Hiranandani Gardens, Powai, and Chandivali. We create elegant, space-efficient interiors for modern apartments and lake-view homes."
                keywords="interior designers powai, interior designers hiranandani gardens, home renovation powai, chandivali interior design, lake view apartment interiors"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(localSchema)}
                </script>
            </Helmet>

            <div className="page-content bg-white">
                <CommanBanner mainTitle="Interior Designers in Powai" parentTitle="Locations" pageName="Powai" bgImage={IMAGES.powaiBanner} />

                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-b30">
                                <div className="section-head style-1">
                                    <h6 className="sub-title text-primary">Modern Living</h6>
                                    <h2 className="title">Elegant Interiors for Powai Homes</h2>
                                    <p>Powai is synonymous with modern, planned living. From the neo-classical architecture of Hiranandani Gardens to the contemporary high-rises of Chandivali, we design interiors that complement the upscale lifestyle of Powai residents. We focus on elegance, functionality, and maximizing views.</p>
                                </div>

                                <div className="row m-b30">
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Neo-Classical & Modern Fusion</li>
                                            <li>Lake-View Balcony Designs</li>
                                            <li>Space-Efficient Furniture</li>
                                            <li>Kids Room Specialists</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Rental-Friendly Makeovers</li>
                                            <li>Home Office Setups</li>
                                            <li>Modular Kitchens</li>
                                            <li>Quick Turnaround Time</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>Tailored for Hiranandani & Beyond</h3>
                                <p className="m-b30">We are familiar with the specific layouts and regulations of major Powai townships. We ensure seamless execution without disturbing your neighbors.</p>

                                <div className="widget widget_tag_cloud m-b30">
                                    <div className="tagcloud">
                                        <a href="#">Hiranandani Gardens</a>
                                        <a href="#">Lake Lucerne</a>
                                        <a href="#">Nahar Amrit Shakti</a>
                                        <a href="#">Raheja Vihar</a>
                                        <a href="#">L&T Emerald Isle</a>
                                        <a href="#">Godrej The Trees</a>
                                        <a href="#">Chandivali</a>
                                        <a href="#">Kanjurmarg</a>
                                    </div>
                                </div>

                                <h3>Our Focus in Powai</h3>
                                <div className="row">
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-window"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">View Maximization</h4>
                                                <p>Designs that frame and enhance your beautiful lake or city views.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-desk"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Work-from-Home</h4>
                                                <p>Ergonomic and stylish home office solutions for Powai's professionals.</p>
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
                                                <p>Sleek, modern kitchens designed for Hiranandani apartments.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-bed"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Kids Room Design</h4>
                                                <p>Creative and safe spaces for children with bunk beds and study areas.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-sketch"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Rental Makeovers</h4>
                                                <p>Non-permanent, stylish upgrades for rental apartments in Powai.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-blueprint"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Civil Renovations</h4>
                                                <p>Complete bathroom and flooring upgrades for older buildings.</p>
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
                                                <li><i className="ti-location-pin"></i> Powai, Hiranandani, Chandivali, Vikhroli</li>
                                                <li><i className="ti-mobile"></i>+91 998 724 1424</li>
                                                <li><i className="ti-email"></i>hello@interiorsinmumbai.com</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="service-widget m-t30">
                                        <div className="widget">
                                            <h4 className="widget-title">Get a Quote</h4>
                                            <div className="text-center">
                                                <p>Live in Powai? Get a design consultation today.</p>
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

export default InteriorDesignersPowai;
