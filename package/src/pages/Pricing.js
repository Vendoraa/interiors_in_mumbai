import React from 'react';
import { Link } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const Pricing = () => {
    const pricingSchema = {
        "@context": "https://schema.org",
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "minPrice": "600",
        "maxPrice": "3000",
        "unitCode": "SQF",
        "description": "Interior design services ranging from basic to luxury packages"
    };

    return (
        <>
            <SEO
                title="Interior Design Cost in Mumbai | Pricing & Packages 2024"
                description="Transparent interior design pricing in Mumbai. Basic packages from ₹800/sq ft, Premium from ₹1500/sq ft. Get detailed cost breakdown for 1BHK, 2BHK, 3BHK."
                keywords="interior design cost mumbai, 2bhk interior cost, 3bhk interior cost, interior design packages, renovation cost mumbai"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(pricingSchema)}
                </script>
            </Helmet>

            <div className="page-content bg-white">
                <CommanBanner mainTitle="Pricing & Packages" parentTitle="Home" pageName="Pricing" bgImage={IMAGES.bnr4} />

                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">Transparent Pricing</h6>
                            <h2 className="title">Interior Design Packages in Mumbai</h2>
                            <p>We believe in complete transparency. No hidden costs, no surprises. Choose a package that fits your budget and lifestyle.</p>
                        </div>

                        <div className="row pricing-table-wraper">
                            {/* Basic Package */}
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="pricingtable-wrapper style-1">
                                    <div className="pricingtable-inner">
                                        <div className="pricingtable-title">
                                            <h3>Basic Essentials</h3>
                                            <p>Perfect for rental homes or budget makeovers</p>
                                        </div>
                                        <div className="pricingtable-price">
                                            <h2 className="pricingtable-bx">₹600 - ₹900</h2>
                                            <p>per sq. ft.</p>
                                        </div>
                                        <ul className="pricingtable-features">
                                            <li><i className="fa fa-check text-primary"></i> Standard Laminate Finish</li>
                                            <li><i className="fa fa-check text-primary"></i> Semi-Modular Kitchen</li>
                                            <li><i className="fa fa-check text-primary"></i> Basic False Ceiling</li>
                                            <li><i className="fa fa-check text-primary"></i> Standard Paint (Tractor Emulsion)</li>
                                            <li><i className="fa fa-check text-primary"></i> Standard Hardware</li>
                                            <li><i className="fa fa-check text-primary"></i> 45 Days Delivery</li>
                                        </ul>
                                        <div className="pricingtable-footer">
                                            <Link to="/contact-us" className="btn btn-primary btn-rounded">Get Quote</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Premium Package */}
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="pricingtable-wrapper style-1 active">
                                    <div className="pricingtable-inner">
                                        <div className="pricingtable-title">
                                            <h3>Premium Living</h3>
                                            <p>Our most popular choice for homeowners</p>
                                        </div>
                                        <div className="pricingtable-price">
                                            <h2 className="pricingtable-bx">₹1,500 - ₹2,500</h2>
                                            <p>per sq. ft.</p>
                                        </div>
                                        <ul className="pricingtable-features">
                                            <li><i className="fa fa-check text-primary"></i> Premium Laminates / Acrylic</li>
                                            <li><i className="fa fa-check text-primary"></i> Fully Modular Kitchen (Hettich/Hafele)</li>
                                            <li><i className="fa fa-check text-primary"></i> Designer False Ceiling</li>
                                            <li><i className="fa fa-check text-primary"></i> Premium Paint (Royale/Velvet)</li>
                                            <li><i className="fa fa-check text-primary"></i> Soft-Close Hardware</li>
                                            <li><i className="fa fa-check text-primary"></i> 60 Days Delivery</li>
                                        </ul>
                                        <div className="pricingtable-footer">
                                            <Link to="/contact-us" className="btn btn-primary btn-rounded">Get Quote</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Luxury Package */}
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="pricingtable-wrapper style-1">
                                    <div className="pricingtable-inner">
                                        <div className="pricingtable-title">
                                            <h3>Luxury Elite</h3>
                                            <p>For those who want the absolute best</p>
                                        </div>
                                        <div className="pricingtable-price">
                                            <h2 className="pricingtable-bx">₹3,000+</h2>
                                            <p>per sq. ft.</p>
                                        </div>
                                        <ul className="pricingtable-features">
                                            <li><i className="fa fa-check text-primary"></i> Veneer / PU / Duco Finish</li>
                                            <li><i className="fa fa-check text-primary"></i> High-End Modular Kitchen</li>
                                            <li><i className="fa fa-check text-primary"></i> Italian Marble Flooring</li>
                                            <li><i className="fa fa-check text-primary"></i> Luxury Texture Paints</li>
                                            <li><i className="fa fa-check text-primary"></i> Automation & Premium Lighting</li>
                                            <li><i className="fa fa-check text-primary"></i> 90+ Days Delivery</li>
                                        </ul>
                                        <div className="pricingtable-footer">
                                            <Link to="/contact-us" className="btn btn-primary btn-rounded">Get Quote</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cost Breakdown Section */}
                        <div className="row m-t50">
                            <div className="col-12">
                                <div className="section-head style-1 text-center">
                                    <h3 className="title">Estimated Cost Breakdown</h3>
                                    <p>Approximate costs for complete interior design of standard apartments in Mumbai</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover check-tbl">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Apartment Type</th>
                                                <th>Size (Approx)</th>
                                                <th>Basic Package</th>
                                                <th>Premium Package</th>
                                                <th>Luxury Package</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>1 BHK</strong></td>
                                                <td>400 - 550 sq. ft.</td>
                                                <td>₹2.5 Lakhs - ₹4 Lakhs</td>
                                                <td>₹5 Lakhs - ₹8 Lakhs</td>
                                                <td>₹10 Lakhs+</td>
                                            </tr>
                                            <tr>
                                                <td><strong>2 BHK</strong></td>
                                                <td>650 - 850 sq. ft.</td>
                                                <td>₹3.5 Lakhs - ₹6 Lakhs</td>
                                                <td>₹8 Lakhs - ₹12 Lakhs</td>
                                                <td>₹15 Lakhs+</td>
                                            </tr>
                                            <tr>
                                                <td><strong>3 BHK</strong></td>
                                                <td>950 - 1200 sq. ft.</td>
                                                <td>₹5.5 Lakhs - ₹8 Lakhs</td>
                                                <td>₹12 Lakhs - ₹18 Lakhs</td>
                                                <td>₹25 Lakhs+</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-center m-t20 text-muted small">* Note: Prices are estimates and may vary based on actual site conditions, material selection, and scope of work. Civil work costs are additional if major structural changes are required.</p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="section-head style-1 text-center m-t80">
                            <h3 className="title">Get a Custom Quote</h3>
                            <p className="m-b30">Every home is unique. Contact us for a free site visit and detailed estimate tailored to your specific needs.</p>
                            <Link to="/contact-us" className="btn btn-primary btn-rounded">Book Free Consultation</Link>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default Pricing;
