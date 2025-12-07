import React from 'react';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';

import Faq from '../components/Faq';
import SEO from '../components/SEO';


const workingProcess = [
    { num: "01", heading: "Book an appointment", text: "Book an appointment with Interiors in Mumbai to bring your vision to life." },
    { num: "02", heading: "Design and approval", text: "Our collaborative design process ensures your vision comes to life, and with your approval, we create functional, beautiful spaces." },
    { num: "03", heading: "Execution", text: "Our skilled team ensures precise and timely implementation, turning design concepts into stunning reality for your dream home." },
    { num: "04", heading: "Project Handover", text: "Our project handover process is seamless, ensuring a smooth transition and delivering a space that exceeds your expectations, ready for you to create lasting memories." },
]

const AboutUs = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn about Interiors in Mumbai, a team of expert designers and craftsmen with over 35 years of experience in transforming living spaces in Mumbai."
                keywords="About Interiors in Mumbai, Interior Design Experts, Experienced Designers Mumbai, Home Renovation Specialists, Our Team"
            />
            <div className="page-content bg-white">
                <CommanBanner mainTitle="About Us" parentTitle="Home" pageName="About Us" bgImage={IMAGES.bannerbg3} />
                <section className="section-full content-inner about-bx2" style={{ backgroundImage: `url(${IMAGES.background2})`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div>
                                    <h2 className="title mb-4">Who We Are</h2>
                                    <p>We are Interiors in Mumbai, dedicated to transforming your living spaces into stunning, functional environments. Our team of expert designers and craftsmen work closely with you to bring your vision to life, ensuring every detail is perfect.</p>
                                    <p>With years of experience in the industry, we pride ourselves on delivering high-quality results that exceed your expectations. Whether it's a simple room makeover or a complete home renovation, we are here to help you create a space that you'll love for years to come.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div>
                                    <img src={IMAGES.aboutPic} className="img-fluid" alt="About Us" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-full content-inner-2 bg-gray" style={{ padding: '60px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="container">
                        <div className="section-head style-1 text-center" style={{ marginBottom: '30px' }}>
                            <h6 className="sub-title text-primary" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '500', fontSize: '18px', marginBottom: '10px' }}>OUR MISSION</h6>
                            <h2 className="title" style={{ fontFamily: 'Merriweather, serif', fontWeight: '700', fontSize: '32px', color: '#333', marginBottom: '20px' }}>What We Stand For</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <p className="text-center" style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.8', fontSize: '16px', color: '#555', textAlign: 'justify' }}>
                                    Our mission is to provide top-notch interior and remodeling services that enhance the beauty and functionality of your home. We are committed to using the best materials and latest techniques to ensure our projects are completed to the highest standards. Your satisfaction is our ultimate goal, and we strive to build lasting relationships with our clients based on trust and excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-full content-inner bg-gray">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">WORK PROCESS</h6>
                            <h2 className="title">How We Work</h2>
                        </div>
                        <div className="row">
                            {
                                workingProcess.map((i) => (
                                    <div className="col-lg-3 col-sm-6" key={i.num}>
                                        <div className="work-process shadow text-center m-b30">
                                            <div className="number">{i.num}</div>
                                            <h4 className="title m-b15">{i.heading}</h4>
                                            <p className="m-b0">{i.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="section-full content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg1})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <Faq />
                </section>
            </div>
        </>
    )
}
export default AboutUs;
