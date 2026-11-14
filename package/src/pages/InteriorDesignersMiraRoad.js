import React from 'react';
import { Link } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import ServiceDetailSections from '../components/ServiceDetailSections';
import { SERVICE_ORDER } from '../seo/serviceContent';
import { Certifications, Warranty, ServiceAreas } from '../components/EeatSignals';
import { Helmet } from 'react-helmet-async';

const InteriorDesignersMiraRoad = () => {
    const localSchema = {
        "@context": "https://schema.org",
        "@type": ["InteriorDesignBusiness", "GeneralContractor"],
        "name": "Interiors in Mumbai - Mira Road",
        "image": "https://www.interiorsinmumbai.com/logo512.png",
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
                title="Interior Contractors in Mira Road | Turnkey Civil & Home Renovation Experts"
                description="Looking for trusted Interior Contractors in Mira Road? We provide end-to-end civil work, home renovation, and turnkey execution for 1BHK, 2BHK, 3BHK. Get a free quote."
                keywords="interior contractors in mira road, civil contractors mira road, home renovation contractors mira road, turnkey interior contractors, interior designers mira road, flat renovation mira road"
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
                                    <h6 className="sub-title text-primary">Mira Road</h6>
                                    <h2 className="title">Interior Design in Mira Road</h2>
                                    <p>Our office and workshop are both in Mira Road East, so this is our home ground. We have completed more than 200 homes here, from 1BHKs in Shanti Nagar to 3BHKs in Kanakia and Lodha. Because the workshop is local, we can visit your site the same day if something needs checking.</p>
                                </div>

                                <div className="row m-b30">
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Office and workshop in Mira Road East</li>
                                            <li>Same-day site visits</li>
                                            <li>Familiar with local society rules</li>
                                            <li>200+ homes completed here</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-check primary">
                                            <li>Full home and single-room work</li>
                                            <li>Civil work and tiling</li>
                                            <li>Modular kitchens and wardrobes</li>
                                            <li>10-year written warranty</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>Turnkey Contracting & Execution</h3>
                                <p className="m-b30">Unlike pure design firms, we are full-service interior contractors. We handle everything from demolition and civil work to electrical, plumbing, and final finishing. Our in-house team of skilled carpenters, masons, and electricians ensures your project is executed to perfection without the hassle of managing multiple vendors.</p>

                                <h3>Why Choose Us for Your Mira Road Home?</h3>
                                <p className="m-b30">We are not just designers; we are your neighbors. Being locally based allows us to supervise your project daily, ensuring quality and timely completion. We have extensive experience working in major complexes like:</p>

                                <div className="widget widget_tag_cloud m-b30">
                                    <div className="tagcloud">
                                        <span className="tag">Kanakia Spaces</span>
                                        <span className="tag">Lodha Aqua</span>
                                        <span className="tag">Jangid Complex</span>
                                        <span className="tag">Shanti Nagar</span>
                                        <span className="tag">Poonam Sagar</span>
                                        <span className="tag">Srishti Complex</span>
                                        <span className="tag">RNA Broadway</span>
                                        <span className="tag">Unique Gardens</span>
                                    </div>
                                </div>

                                <h3>Our Home Renovation Process</h3>
                                <p>As professional contractors, we follow a strict timeline to ensure your project is delivered on time:</p>
                                <ul className="list-check primary m-b30">
                                    <li><strong>Step 1: Demolition & Civil Work</strong> - Breaking of old tiles, plastering, and waterproofing.</li>
                                    <li><strong>Step 2: Electrical & Plumbing</strong> - New wiring (Polycab/Finolex) and plumbing (Astral/Ashirvad).</li>
                                    <li><strong>Step 3: False Ceiling (POP)</strong> - Framing and gypsum board installation (Saint-Gobain).</li>
                                    <li><strong>Step 4: Carpentry & Furniture</strong> - On-site fabrication or modular installation.</li>
                                    <li><strong>Step 5: Finishing & Painting</strong> - Final touches with premium paints (Asian Paints Royale).</li>
                                </ul>

                                <h3>Frequently Asked Questions</h3>
                                <div className="accordion dz-accordion accordion-sm" id="accordionFaq">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Do you provide labor-only contracting services?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFaq">
                                            <div className="accordion-body">
                                                Yes, we offer both turnkey (material + labor) and labor-only contracting services for civil work, painting, and carpentry in Mira Road.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What is the cost of 1BHK renovation in Mira Road?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFaq">
                                            <div className="accordion-body">
                                                A complete 1BHK renovation in Mira Road typically starts from ₹3.5 Lakhs, depending on the scope of civil work and material selection.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Do you handle society permissions?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaq">
                                            <div className="accordion-body">
                                                Yes, we assist with all necessary documentation and drawings required for society NOC permissions in Mira Road complexes.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3>What We Do in Mira Road</h3>
                                <p>Our workshop is in Mira Road East, so this is where most of our work is. We take up full flat renovations and single-room jobs:</p>
                                <div className="card-grid cols-2">
                                    <div className="col-md-6 m-b30">
                                        <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
                                            <div className="icon-lg text-primary m-b20">
                                                <span className="icon-cell"><i className="flaticon-living-room"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Full Home Renovation</h4>
                                                <p>Civil work, flooring, painting, carpentry and electrical under one contract.</p>
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
                                                <p>L-shape and straight kitchens with tall units, built for compact Mira Road layouts.</p>
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
                                                <p>Sliding or hinged wardrobes built floor to ceiling, with loft storage above.</p>
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
                                                <p>Tiling, plumbing and rewiring, which older Mira Road buildings usually need.</p>
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
                                                <p>POP or gypsum ceiling with cove and spot lighting, planned room by room.</p>
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
                                                <p>3D views of each room before we order materials, so you can change things on screen.</p>
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
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">OUR SERVICES</h6>
                            <h2 className="title">Interior Design Services in Mira Road</h2>
                            <p>From modular kitchens to complete turnkey interiors, here are the services we provide across Mira Road and nearby areas.</p>
                        </div>
                        {SERVICE_ORDER.map((key) => (
                            <ServiceDetailSections key={key} serviceKey={key} location="Mira Road" />
                        ))}
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">WHY CHOOSE US</h6>
                            <h2 className="title">Mira Road's Trusted Interior Team</h2>
                            <p>Local experience, certified work, and written warranties for homes across Mira Road and nearby areas.</p>
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

export default InteriorDesignersMiraRoad;



