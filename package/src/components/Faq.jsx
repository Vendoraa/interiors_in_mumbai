import React, { useState } from 'react';
import { IMAGES } from '../constants/theme';
import { Helmet } from 'react-helmet-async';

const accordian = [
    // Existing Core Questions
    { id: 1, key: 0, title: " What is your process for working with a client?", data: "We start with a free site visit to measure your flat and understand what you need. Then we share layout options, 3D views and a fixed quote. Once you approve, we order materials and start work. The five stages are: 1. Site visit, 2. Layout and 3D design, 3. Material selection, 4. Execution, 5. Final handover." },
    { id: 2, key: 1, title: " How do you ensure the quality of your work?", data: "We use branded materials only: Century or Greenply plywood, Merino or Royal Touch laminates, Hettich or Hafele hardware, and Asian Paints Royale. Our carpenters are in-house, not outsourced, and a supervisor checks the site against a 50-point list before we hand over." },
    { id: 3, key: 2, title: " Can you customize your services to fit my specific needs?", data: "Yes. We do both turnkey projects and design-only packages, so you can pick what suits your budget and timeline. Some clients only want a modular kitchen or a wardrobe; others want the whole flat done." },
    { id: 4, key: 3, title: " Do you offer any warranties on your work?", data: "Yes, and it is written into the contract. Civil and carpentry work carries a 10-year warranty, waterproofing 5 years, and painting and electrical 2 years. Brand warranties on hardware and fittings are passed on to you along with the bills." },
    { id: 5, key: 4, title: " What are your payment terms?", data: "We offer flexible payment options: 10% booking amount, 40% at material delivery, 40% during work progress, and 10% upon completion. We accept bank transfers, cheques, and UPI. We also assist with EMI options through banking partners." },
    { id: 6, key: 5, title: " Do you offer a lowest price guarantee?", data: "Yes. If you get a lower written quote from another firm for the same scope and materials, we will match it. The quote has to be for identical specifications, so compare the plywood grade and hardware brands before you do." },

    // Pricing & Cost Questions (High Priority for AI)
    { id: 7, key: 6, title: " What is the interior design cost per square foot in Mumbai?", data: "Interior design costs in Mumbai typically range from ₹800 to ₹1,200 per sq ft for basic interiors, ₹1,500 to ₹2,500 per sq ft for premium interiors, and ₹3,000+ per sq ft for high-end projects. The final cost depends on materials, finish quality, and scope of work." },
    { id: 8, key: 7, title: " How much does a 2BHK interior design cost in Mumbai?", data: "A complete 2BHK interior design project in Mumbai usually costs between ₹7 Lakhs to ₹15 Lakhs. A budget package might start at ₹5 Lakhs, while a premium 2BHK renovation can go up to ₹25 Lakhs depending on material selection (veneers, Italian marble, etc.)." },
    { id: 9, key: 8, title: " Do you charge a consultation fee?", data: "No. The first site visit and consultation are free anywhere in Mumbai, including Mira Road, Thane and Andheri. We measure your flat, discuss what you need, and give you a rough budget range at no cost." },
    { id: 10, key: 9, title: " Are there any hidden costs in your estimates?", data: "No. Our quotes are itemised line by line, so you can see what each item costs. The price we quote is the price you pay, unless you change the scope of work or pick more expensive materials later. We do not add charges at the end." },

    // Timeline & Process
    { id: 11, key: 10, title: " How long does it take to complete a home interior project?", data: "A standard 2BHK or 3BHK interior project takes 45 to 60 days to complete. This includes design finalization (1-2 weeks) and execution (4-6 weeks). Larger premium projects or complete renovations involving civil work may take 75-90 days." },
    { id: 12, key: 11, title: " Do you provide 3D designs before starting work?", data: "Yes, we provide 2D layouts and realistic 3D renderings for all major rooms (Living, Bedroom, Kitchen). This helps you visualize the final look, colors, and lighting before we cut a single piece of wood." },
    { id: 13, key: 12, title: " Do I need to be present at the site every day?", data: "No. A project manager supervises the site daily and sends you photos and videos on WhatsApp. Most clients visit once a week, and we call you before any decision that affects the cost." },

    // Services & Scope
    { id: 14, key: 13, title: " Do you do partial renovations or only full homes?", data: "Both. We take up single-room work like a kitchen or bedroom upgrade, and full-flat renovations. Modular kitchens and wardrobes are a large part of what we do." },
    { id: 15, key: 14, title: " Do you undertake commercial and office interior projects?", data: "Yes. We do offices, retail showrooms, clinics and restaurants. Commercial work is usually planned around your working hours so the business can keep running during the fit-out." },
    { id: 16, key: 15, title: " Do you handle civil work like tiling and plumbing?", data: "Yes, we are a turnkey interior design firm. We handle everything including civil work, flooring, plumbing, electrical wiring, false ceilings, painting, and carpentry. You get a single point of contact for the entire project." },
    { id: 17, key: 16, title: " Do you provide Vastu-compliant interior designs?", data: "Yes. If Vastu matters to you, we can plan the entrance, master bedroom direction, kitchen placement and colours accordingly. Tell us at the design stage, because it is harder to change once the carpentry is built." },

    // Materials & Comparison
    { id: 18, key: 17, title: " Modular Kitchen vs. Carpenter-made: Which is better?", data: "Modular kitchens offer better finish, machine-pressed durability, and faster installation (2-3 weeks). Carpenter-made kitchens offer more customization for odd-shaped spaces but take longer. We recommend Modular for quality and finish, but can provide semi-modular solutions too." },
    { id: 19, key: 18, title: " What brands of materials do you use?", data: "We only use branded, durable materials. For plywood: Century, Greenply. For laminates: Merino, Royal Touch. For hardware: Hettich, Hafele, Blum. For paints: Asian Paints Royale. For lighting: Phillips, Syska." },

    // Location & Trust
    { id: 20, key: 19, title: " Which areas in Mumbai do you serve?", data: "We serve the entire Mumbai Metropolitan Region (MMR). Our primary focus areas include Mira Road, Bhayandar, Dahisar, Borivali, Kandivali, Malad, Goregaon, Andheri, Bandra, Thane, and Navi Mumbai." },
    { id: 21, key: 20, title: " Why should I choose Interiors in Mumbai for my Mira Road home?", data: "Our office and workshop are both in Mira Road East, so we can reach your site the same day. We have worked in most of the local buildings, including Lodha and Kanakia, and we know the suppliers here, which keeps material delivery quick." },
    { id: 22, key: 21, title: " Do you have your own labor team?", data: "Yes. Our carpenters, painters, electricians and civil workers are on our own payroll. We do not hand critical work to outside contractors, which is how we keep to the schedule and control the finish." },

    // Miscellaneous
    { id: 23, key: 22, title: " Can you work with my existing furniture?", data: "Yes. We can refurbish pieces that are still solid, or build new units around them so the finish matches. We will tell you honestly which items are worth keeping and which will look out of place." },
    { id: 24, key: 23, title: " Do you provide post-completion service?", data: "Yes. You get 6 months of free service for minor adjustments like hinge alignment or drawer tuning. After that, the 10/5/2-year warranty still applies, and you can call the same number you used during the project." },
    { id: 25, key: 24, title: " How do I get started?", data: "Call or WhatsApp us on +91 998 724 1424, or fill in the contact form on this site. We will fix a free site visit, look at your flat, and give you a rough budget range before you commit to anything." }
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
                            <div className="faq-accordion" id="faq-accordion">
                                {accordian.slice(0, visibleCount).map((d, i) => (
                                    <details className="faq-item" key={i} id={`faq-${d.key}`}>
                                        <summary className="faq-question">
                                            {d.title}
                                            <span className="accordion-icon"></span>
                                        </summary>
                                        <div className="faq-answer">
                                            <p className="m-b0">{d.data}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
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
