import React from 'react';
import { Link } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import ServiceDetailSections from '../components/ServiceDetailSections';
import { SERVICE_ORDER } from '../seo/serviceContent';
import { Certifications, Warranty, ServiceAreas } from '../components/EeatSignals';
import { Helmet } from 'react-helmet-async';

const InteriorDesignersAndheri = () => {
    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Interiors in Mumbai - Andheri",
        "image": "https://www.interiorsinmumbai.com/logo512.png",
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
                title="Interior Designers in Andheri West & East | Home Interiors"
                description="Interior design and renovation in Andheri, Lokhandwala and Versova. Flats, offices and shops, with 3D designs and a fixed quote before work starts."
                keywords="interior designers andheri west, interior designers lokhandwala, interior decorators andheri east, interior design versova, office interior design andheri"
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
                                    <h6 className="sub-title text-primary">Andheri</h6>
                                    <h2 className="title">Interior Design in Andheri</h2>
                                    <p>Andheri covers a lot of ground: the older buildings around Andheri station, the towers in Lokhandwala and Oshiwara, and the corporate offices in Andheri East. We do full home interiors, single-room work and office fit-outs, and we plan the schedule around your society's working hours.</p>
                                </div>

                                <div className="row m-b30">
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Full home interiors</li>
                                            <li>Modular kitchens</li>
                                            <li>Space-saving furniture</li>
                                            <li>False ceiling and lighting</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Custom wardrobes</li>
                                            <li>Painting and waterproofing</li>
                                            <li>Office and shop fit-outs</li>
                                            <li>Society NOC assistance</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>Working in Andheri</h3>
                                <p className="m-b30">Andheri has a mix of old co-operative societies and newer towers, and each has its own rules on working hours, lift use and debris removal. We have worked in both, so we plan the schedule around your society's restrictions.</p>

                                <div className="widget widget_tag_cloud m-b30">
                                    <div className="tagcloud">
                                        <span className="tag">Lokhandwala Complex</span>
                                        <span className="tag">Oberoi Springs</span>
                                        <span className="tag">Rustomjee Elements</span>
                                        <span className="tag">Runwal Elegante</span>
                                        <span className="tag">Transcon Triumph</span>
                                        <span className="tag">Adani Western Heights</span>
                                        <span className="tag">Versova</span>
                                        <span className="tag">Seven Bungalows</span>
                                    </div>
                                </div>

                                <h3>Our Expertise in Andheri</h3>
                                <div className="card-grid cols-2">
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-office"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">3BHK and 4BHK Flats</h4>
                                                <p>Full home interiors with wardrobes, false ceiling and modular kitchen. Most take 10 to 14 weeks.</p>
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
                                                <p>L-shape and parallel kitchens with Hettich or Hafele hardware and granite counters.</p>
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
                                                <p>Wardrobes, bed with storage, study table and false ceiling, planned as one room.</p>
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
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">OUR SERVICES</h6>
                            <h2 className="title">Interior Design Services in Andheri</h2>
                            <p>From modular kitchens to complete turnkey interiors, here are the services we provide across Andheri and nearby areas.</p>
                        </div>
                        {SERVICE_ORDER.map((key) => (
                            <ServiceDetailSections key={key} serviceKey={key} location="Andheri" />
                        ))}
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">WHY CHOOSE US</h6>
                            <h2 className="title">Andheri's Trusted Interior Team</h2>
                            <p>Local experience, certified work, and written warranties for homes across Andheri and nearby areas.</p>
                        </div>

                        <Certifications />
                        <Warranty />
                        <ServiceAreas />
                    </div>
                </section>
            </div>
        </>
    );
};

export default InteriorDesignersAndheri;



