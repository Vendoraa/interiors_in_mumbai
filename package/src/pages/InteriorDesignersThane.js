import React from 'react';
import { Link } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import ServiceDetailSections from '../components/ServiceDetailSections';
import { SERVICE_ORDER } from '../seo/serviceContent';
import { Testimonials, Certifications, Warranty, ServiceAreas } from '../components/EeatSignals';
import BeforeAfter from '../components/BeforeAfter';
import { Helmet } from 'react-helmet-async';

const InteriorDesignersThane = () => {
    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Interiors in Mumbai - Thane",
        "image": "https://www.interiorsinmumbai.com/logo.png",
        "url": "https://www.interiorsinmumbai.com/interior-designers-thane",
        "telephone": "+919987241424",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ghodbunder Road",
            "addressLocality": "Thane",
            "addressRegion": "Maharashtra",
            "postalCode": "400607",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.2183,
            "longitude": 72.9781
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
            "Thane West",
            "Ghodbunder Road",
            "Majiwada",
            "Hiranandani Estate",
            "Vartak Nagar",
            "Pokhran Road"
        ]
    };

    return (
        <>
            <SEO
                title="Best Interior Designers in Thane & Ghodbunder Road | Family Home Decor"
                description="Top interior designers in Thane West, Hiranandani Estate, and Ghodbunder Road. We create spacious, family-friendly interiors for 2BHK and 3BHK apartments."
                keywords="interior designers thane, interior decorators thane west, ghodbunder road interiors, hiranandani estate interior design, home renovation thane"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(localSchema)}
                </script>
            </Helmet>

            <div className="page-content bg-white">
                <CommanBanner mainTitle="Interior Designers in Thane" parentTitle="Locations" pageName="Thane" bgImage={IMAGES.thaneBanner} />

                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-b30">
                                <div className="section-head style-1">
                                    <h6 className="sub-title text-primary">City of Lakes</h6>
                                    <h2 className="title">Beautiful Homes for Thane Families</h2>
                                    <p>Thane has transformed into a premium residential hub with spacious townships and lush greenery. We specialize in designing warm, family-centric homes for Thane's growing communities. Whether it's a new apartment on Ghodbunder Road or a renovation in the city center, we deliver quality and comfort.</p>
                                </div>

                                <div className="row m-b30">
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Family-Friendly Designs</li>
                                            <li>Durable & Safe Materials</li>
                                            <li>Ample Storage Solutions</li>
                                            <li>Balcony & Garden Concepts</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Township-Specific Packages</li>
                                            <li>Civil Work Expertise</li>
                                            <li>Pooja Room Designs</li>
                                            <li>Budget-Friendly Options</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>Experts in Thane Townships</h3>
                                <p className="m-b30">We have successfully delivered projects in many of Thane's leading residential complexes. We understand the layout nuances and society rules.</p>

                                <div className="widget widget_tag_cloud m-b30">
                                    <div className="tagcloud">
                                        <span className="tag">Hiranandani Estate</span>
                                        <span className="tag">Rustomjee Urbania</span>
                                        <span className="tag">Lodha Amara</span>
                                        <span className="tag">Dosti Vihar</span>
                                        <span className="tag">Kalpataru Sunrise</span>
                                        <span className="tag">Puraniks City</span>
                                        <span className="tag">Runwal Eirene</span>
                                        <span className="tag">Sheth Avalon</span>
                                    </div>
                                </div>

                                <h3>Our Services in Thane</h3>
                                <div className="row">
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-home"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Spacious Living</h4>
                                                <p>Designs that enhance the spaciousness of Thane's modern apartments.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-bed"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Master Suites</h4>
                                                <p>Luxurious master bedroom designs with walk-in closets and ensuite baths.</p>
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
                                                <p>Customized kitchen layouts for Hiranandani and Rustomjee apartments.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-window"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Balcony Gardens</h4>
                                                <p>Beautiful vertical gardens and seating areas for your deck.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-blueprint"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Civil Work</h4>
                                                <p>High-quality flooring, tiling, and bathroom renovations.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-sketch"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Kids Rooms</h4>
                                                <p>Fun and functional room designs for growing families.</p>
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
                                                <li><i className="ti-location-pin"></i> Thane West, Ghodbunder Road, Majiwada</li>
                                                <li><i className="ti-mobile"></i>+91 998 724 1424</li>
                                                <li><i className="ti-email"></i>hello@interiorsinmumbai.com</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="service-widget m-t30">
                                        <div className="widget">
                                            <h4 className="widget-title">Get a Quote</h4>
                                            <div className="text-center">
                                                <p>Moving to Thane? Get a free interior design estimate.</p>
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
                            <h2 className="title">Interior Design Services in Thane</h2>
                            <p>From modular kitchens to complete turnkey interiors, here are the services we provide across Thane and nearby areas.</p>
                        </div>
                        {SERVICE_ORDER.map((key) => (
                            <ServiceDetailSections key={key} serviceKey={key} location="Thane" />
                        ))}
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">WHY CHOOSE US</h6>
                            <h2 className="title">Thane's Trusted Interior Team</h2>
                            <p>Local experience, certified work, and written warranties for homes across Thane and nearby areas.</p>
                        </div>
                        <Testimonials limit={3} />
                        <Certifications />
                        <Warranty />
                        <ServiceAreas />
                    </div>
                </section>
            </div>
        </>
    );
};

export default InteriorDesignersThane;



