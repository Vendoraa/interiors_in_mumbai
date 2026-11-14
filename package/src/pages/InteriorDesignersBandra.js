import React from 'react';
import { Link } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import ServiceDetailSections from '../components/ServiceDetailSections';
import { SERVICE_ORDER } from '../seo/serviceContent';
import { Certifications, Warranty, ServiceAreas } from '../components/EeatSignals';
import { Helmet } from 'react-helmet-async';

const InteriorDesignersBandra = () => {
    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Interiors in Mumbai - Bandra",
        "image": "https://www.interiorsinmumbai.com/logo512.png",
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
                title="Interior Designers in Bandra & Pali Hill | Home Interiors"
                description="Interior design in Bandra, Pali Hill and Carter Road. We work on sea-facing flats and older buildings, and handle society NOC paperwork for you."
                keywords="interior designers bandra west, interior design pali hill, interior decorators bandra, sea facing apartment design, bungalow renovation mumbai"
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
                                    <h6 className="sub-title text-primary">Bandra</h6>
                                    <h2 className="title">Interior Design in Bandra</h2>
                                    <p>Bandra has three very different kinds of homes: older buildings in Pali Hill and Mount Mary with load-bearing walls, sea-facing flats on Carter Road and Bandstand where salt air rusts fittings, and newer towers in BKC and Khar West. We plan differently for each, and we handle the society NOC paperwork.</p>
                                </div>

                                <div className="row m-b30">
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Full home interiors</li>
                                            <li>Old building renovation</li>
                                            <li>Modular kitchens</li>
                                            <li>Custom wardrobes</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>False ceiling and lighting</li>
                                            <li>Painting and waterproofing</li>
                                            <li>Walk-in wardrobes</li>
                                            <li>Society NOC assistance</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>Bandra Homes We Work On</h3>
                                <p className="m-b30">Bandra flats come with their own set of problems: older buildings with load-bearing walls, sea-facing windows that rust fittings, and society rules on what you can change. We have worked in these buildings before, so we know what to plan for. Areas we cover:</p>

                                <div className="widget widget_tag_cloud m-b30">
                                    <div className="tagcloud">
                                        <span className="tag">Pali Hill</span>
                                        <span className="tag">Carter Road</span>
                                        <span className="tag">Bandstand</span>
                                        <span className="tag">Mount Mary</span>
                                        <span className="tag">Turner Road</span>
                                        <span className="tag">BKC (Bandra Kurla Complex)</span>
                                        <span className="tag">Khar West</span>
                                        <span className="tag">Hill Road</span>
                                    </div>
                                </div>

                                <h3>What We Do in Bandra</h3>
                                <div className="card-grid cols-2">
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-sketch"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Old Building Renovation</h4>
                                                <p>Rewiring, replumbing and carpentry for older Bandra buildings, without touching load-bearing walls.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-blueprint"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">New Flats and Towers</h4>
                                                <p>Full interiors for new possession flats, with false ceiling, modular kitchen and wardrobes.</p>
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
                                                <p>L-shape and parallel kitchens with granite counters, tall units and soft-close hardware.</p>
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
                                                <p>Floor-to-ceiling wardrobes with glass or laminate shutters, drawers and loft storage.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-window"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Balcony and Terrace</h4>
                                                <p>Deck flooring, planters and seating for sea-facing balconies, using weather-resistant materials.</p>
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
                                                <p>Looking for interior work in Bandra? Tell us about your flat and we will visit.</p>
                                                <Link to="/contact-us" className="btn btn-primary btn-block btn-rounded">Book Consultation</Link>
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
                            <h2 className="title">Interior Design Services in Bandra</h2>
                            <p>From modular kitchens to complete turnkey interiors, here are the services we provide across Bandra and nearby areas.</p>
                        </div>
                        {SERVICE_ORDER.map((key) => (
                            <ServiceDetailSections key={key} serviceKey={key} location="Bandra" />
                        ))}
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">WHY CHOOSE US</h6>
                            <h2 className="title">Bandra's Trusted Interior Team</h2>
                            <p>Local experience, certified work, and written warranties for homes across Bandra and nearby areas.</p>
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

export default InteriorDesignersBandra;



