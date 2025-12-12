import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { IMAGES } from '../constants/theme'
import { Helmet } from 'react-helmet-async'



const accordian = [
    { id: 1, key: 0, title: " What is your process for working with a client?", data: "We believe in open communication! We'll start with a consultation to understand your vision and needs. Then, we'll provide a detailed estimate and project timeline. Throughout the process, we keep you informed and involved in every step." },
    { id: 2, key: 1, title: " How do you ensure the quality of your work?", data: "Quality is our top priority. We use high-quality materials and employ experienced, skilled professionals. We also follow strict quality control measures and maintain open communication to ensure your satisfaction." },
    { id: 3, key: 2, title: " Can you customize your services to fit my specific needs?", data: "Absolutely! We understand every project is unique. We tailor our services to your vision, budget, and timeline. We can combine different services or create a custom solution to bring your dream to life." },
    { id: 4, key: 3, title: " Do you offer any warranties on your work?", data: "Yes, we stand behind our work. We offer warranties on materials and labor (specify the duration based on your policy). This ensures your peace of mind and long-term satisfaction." },
    { id: 5, key: 4, title: " What are your payment terms?", data: "We offer flexible payment options to suit your needs (mention your typical payment schedule or outline different options). We'll provide a clear breakdown of costs in our estimate." },
    { id: 6, key: 5, title: " Do you offer a lowest price guarantee?", data: "Yes! We offer a Best Price Guarantee. If you receive a lower written quote from another qualified interior design firm for the same scope of work and quality, we'll match it. Simply provide us with the competitor's detailed quote within 7 days of receiving our estimate. Terms and conditions apply - both quotes must be for identical services, materials, and project specifications." }


]


const Faq = () => {
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

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
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
                        <Accordion className="dz-accordion accordion-sm">
                            {
                                accordian.map((i, index) => (
                                    <div
                                        key={index}
                                    >
                                        <Accordion.Item eventKey={`${i.key}`}>
                                            <Accordion.Header className="accordion-header" id="headingOne">
                                                {i.title}
                                                <span className="toggle-close"></span>
                                            </Accordion.Header>
                                            <div id="collapseOne" className="accordion-collapse collapse show" >
                                                <Accordion.Body>
                                                    <p className="m-b0">{i.data}</p>
                                                </Accordion.Body>

                                            </div>
                                        </Accordion.Item>
                                    </div>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
