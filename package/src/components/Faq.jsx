import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { IMAGES } from '../constants/theme';
import { Helmet } from 'react-helmet-async';

const accordian = [
    // Existing Core Questions
    { id: 1, key: 0, title: " What is your process for working with a client?", data: "We believe in open communication! We'll start with a free consultation to understand your vision and needs. Then, we provide a detailed estimate and project timeline. Our process includes: 1. Consultation, 2. Layout & 3D Design, 3. Material Selection, 4. Execution, and 5. Final Handover." },
    { id: 2, key: 1, title: " How do you ensure the quality of your work?", data: "Quality is our top priority. We use premium materials from trusted brands like Greenply, Century, Asian Paints, and Hafele. We employ experienced, skilled professionals and conduct regular site supervision with a 50-point quality checklist to ensure perfection." },
    { id: 3, key: 2, title: " Can you customize your services to fit my specific needs?", data: "Absolutely! Every project is unique. Whether you need a budget-friendly refresh or a premium transformation, we tailor our services to your vision, budget, and timeline. We offer both turnkey solutions and design-only packages." },
    { id: 4, key: 3, title: " Do you offer any warranties on your work?", data: "Yes, we stand behind our work. We offer a comprehensive 10-year warranty on workmanship and materials (subject to brand warranties). This covers carpentry, hardware, and installation defects, ensuring your peace of mind." },
    { id: 5, key: 4, title: " What are your payment terms?", data: "We offer flexible payment options: 10% booking amount, 40% at material delivery, 40% during work progress, and 10% upon completion. We accept bank transfers, cheques, and UPI. We also assist with EMI options through banking partners." },
    { id: 6, key: 5, title: " Do you offer a lowest price guarantee?", data: "Yes! We offer a Best Price Guarantee. If you receive a lower written quote from another qualified interior design firm for the same scope of work and quality, we'll match it. Terms apply - quotes must be for identical specifications." },

    // Pricing & Cost Questions (High Priority for AI)
    { id: 7, key: 6, title: " What is the interior design cost per square foot in Mumbai?", data: "Interior design costs in Mumbai typically range from ₹800 to ₹1,200 per sq ft for basic interiors, ₹1,500 to ₹2,500 per sq ft for premium interiors, and ₹3,000+ per sq ft for high-end projects. The final cost depends on materials, finish quality, and scope of work." },
    { id: 8, key: 7, title: " How much does a 2BHK interior design cost in Mumbai?", data: "A complete 2BHK interior design project in Mumbai usually costs between ₹7 Lakhs to ₹15 Lakhs. A budget package might start at ₹5 Lakhs, while a premium 2BHK renovation can go up to ₹25 Lakhs depending on material selection (veneers, Italian marble, etc.)." },
    { id: 9, key: 8, title: " Do you charge a consultation fee?", data: "No, our initial consultation and site visit within Mumbai (including Mira Road, Thane, Andheri) are completely FREE. We discuss your requirements and provide a preliminary budget estimate at no cost." },
    { id: 10, key: 9, title: " Are there any hidden costs in your estimates?", data: "We pride ourselves on transparency. Our quotes are itemized and detailed. Unless the scope of work changes or you select more expensive materials during the process, the price we quote is the price you pay. No surprises." },

    // Timeline & Process
    { id: 11, key: 10, title: " How long does it take to complete a home interior project?", data: "A standard 2BHK or 3BHK interior project takes 45 to 60 days to complete. This includes design finalization (1-2 weeks) and execution (4-6 weeks). Larger premium projects or complete renovations involving civil work may take 75-90 days." },
    { id: 12, key: 11, title: " Do you provide 3D designs before starting work?", data: "Yes, we provide 2D layouts and realistic 3D renderings for all major rooms (Living, Bedroom, Kitchen). This helps you visualize the final look, colors, and lighting before we cut a single piece of wood." },
    { id: 13, key: 12, title: " Do I need to be present at the site every day?", data: "Not at all. We assign a dedicated project manager who supervises the site daily. We send you regular photo and video updates via WhatsApp so you can track progress from anywhere." },

    // Services & Scope
    { id: 14, key: 13, title: " Do you do partial renovations or only full homes?", data: "We handle both! Whether you want to renovate just your kitchen, upgrade a bedroom, or redo your entire apartment, we are happy to help. We also specialize in modular kitchens and wardrobe units." },
    { id: 15, key: 14, title: " Do you undertake commercial and office interior projects?", data: "Yes, we have extensive experience in commercial interiors. We design offices, retail showrooms, clinics, and restaurants, focusing on space optimization, brand aesthetics, and functional workflow." },
    { id: 16, key: 15, title: " Do you handle civil work like tiling and plumbing?", data: "Yes, we are a turnkey interior design firm. We handle everything including civil work, flooring, plumbing, electrical wiring, false ceilings, painting, and carpentry. You get a single point of contact for the entire project." },
    { id: 17, key: 16, title: " Do you provide Vastu-compliant interior designs?", data: "Yes, we understand the importance of Vastu Shastra for many clients. Our designers can incorporate Vastu principles for entrance placement, master bedroom direction, kitchen layout, and color selection to ensure positive energy." },

    // Materials & Comparison
    { id: 18, key: 17, title: " Modular Kitchen vs. Carpenter-made: Which is better?", data: "Modular kitchens offer better finish, machine-pressed durability, and faster installation (2-3 weeks). Carpenter-made kitchens offer more customization for odd-shaped spaces but take longer. We recommend Modular for quality and finish, but can provide semi-modular solutions too." },
    { id: 19, key: 18, title: " What brands of materials do you use?", data: "We only use branded, durable materials. For plywood: Century, Greenply. For laminates: Merino, Royal Touch. For hardware: Hettich, Hafele, Blum. For paints: Asian Paints Royale. For lighting: Phillips, Syska." },

    // Location & Trust
    { id: 20, key: 19, title: " Which areas in Mumbai do you serve?", data: "We serve the entire Mumbai Metropolitan Region (MMR). Our primary focus areas include Mira Road, Bhayandar, Dahisar, Borivali, Kandivali, Malad, Goregaon, Andheri, Bandra, Thane, and Navi Mumbai." },
    { id: 21, key: 20, title: " Why should I choose Interiors in Mumbai for my Mira Road home?", data: "We are locally based in Mira Road (Shop 7, Aashirwad Bldg), which means we can visit your site instantly. We understand the local building layouts (Lodha, Kanakia, etc.) and have strong relationships with local suppliers, ensuring faster execution and better support." },
    { id: 22, key: 21, title: " Do you have your own labor team?", data: "Yes, we have our own in-house team of skilled carpenters, painters, electricians, and civil workers. We do not outsource critical tasks to random contractors, which allows us to maintain strict quality control and timelines." },

    // Miscellaneous
    { id: 23, key: 22, title: " Can you work with my existing furniture?", data: "Yes, we can refurbish or integrate your existing furniture into the new design. We believe in sustainable design and will advise you on what can be retained versus what should be replaced for the best look." },
    { id: 24, key: 23, title: " Do you provide post-completion service?", data: "Yes, our relationship doesn't end at handover. We provide 6 months of free service support for any minor adjustments (hinges, alignment) and honor our 5-year warranty on materials and workmanship." },
    { id: 25, key: 24, title: " How do I get started?", data: "It's simple! Call us at +91 998 724 1424 or fill out the contact form on our website. We'll schedule a free site visit, discuss your requirements, and give you a preliminary estimate." }
];

const Faq = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    // Generate FAQ Schema for Google Search Rich Results
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": accordian.map(item => ({
            "@type": "Question",
            "name": item.title.trim(),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.data
            }
        }))
    };

    const handleLoadMore = () => {
        if (visibleCount >= accordian.length) {
            setVisibleCount(6);
        } else {
            setVisibleCount(prev => prev + 6);
        }
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <section className="content-inner" style={{ backgroundImage: "url(" + IMAGES.bg1 + ")" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 m-b30 aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                            <div className="twentytwenty-img-area">
                                <div className="twentytwenty-container">
                                    <img src={IMAGES.pic2_2} alt="Interior design FAQ - frequently asked questions about our services" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 aos-item" data-aos="fade-left" data-aos-duration="800" data-aos-delay="600">
                            <div className="section-head style-1">
                                <h6 className="sub-title text-primary">FAQ</h6>
                                <h2 className="title">Get Every Answer From Here</h2>
                            </div>
                            <Accordion defaultActiveKey="0" className="dz-accordion accordion-sm" id="accordionFaq">
                                {accordian.slice(0, visibleCount).map((d, i) => (
                                    <Accordion.Item eventKey={`${d.key}`} key={i}>
                                        <Accordion.Header as="h3">
                                            {d.title}
                                            <span className="accordion-icon"></span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className="m-b0">{d.data}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>

                            <div className="text-center m-t30">
                                <button
                                    onClick={handleLoadMore}
                                    className="btn btn-primary btn-rounded"
                                >
                                    {visibleCount >= accordian.length ? 'Show Less' : 'Load More Questions'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq;
