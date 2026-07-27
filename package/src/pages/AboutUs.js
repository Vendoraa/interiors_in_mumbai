import React from 'react';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import Faq from '../components/Faq';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { buildAboutPage } from '../seo/schema';
import { StatsBand, Certifications, ServiceAreas, Warranty, Testimonials } from '../components/EeatSignals';
import BeforeAfter from '../components/BeforeAfter';
import { COMPANY } from '../seo/eeat';

const workingProcess = [
  { num: '01', heading: 'Book an appointment', text: 'Book a free consultation at our Mira Road studio or a site visit, and we understand your lifestyle, budget, and timelines.' },
  { num: '02', heading: 'Design and approval', text: 'Our designers share 3D concepts and a transparent quotation. With your approval, we finalise materials, finishes, and the execution plan.' },
  { num: '03', heading: 'Execution', text: 'Our in-house team handles civil, carpentry, electrical, plumbing, and painting—one accountable team from start to finish.' },
  { num: '04', heading: 'Project Handover', text: 'We do a joint quality walkthrough, hand over with a written warranty, and stay available for after-sales support.' },
];

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Us | 15+ Years of Interior Design in Mumbai"
        description="Interiors in Mumbai (Shrishti Interiors) is a Mumbai-based interior design and turnkey contracting firm with 15+ years of experience, 1,200+ completed projects, certifications, and written warranties."
        keywords="About Interiors in Mumbai, Interior Design Experts, Experienced Designers Mumbai, Home Renovation Specialists, Our Team, Turnkey Contractors"
      />
      <JsonLd data={buildAboutPage()} />
      <div className="page-content bg-white">
        <CommanBanner mainTitle="About Us" parentTitle="Home" pageName="About Us" bgImage={IMAGES.bannerbg3} />
        <section className="section-full content-inner about-bx2" style={{ backgroundImage: `url(${IMAGES.background2})`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div>
                  <h2 className="title mb-4">Who We Are</h2>
                  <p>We are <strong>Interiors in Mumbai</strong> (Shrishti Interiors), a Mumbai-based interior design and turnkey contracting firm. Since {COMPANY.foundingDate}, we have helped more than {COMPANY.projectsCompleted.toLocaleString('en-IN')} families across the city turn their apartments and homes into beautiful, functional spaces.</p>
                  <p>With <strong>{COMPANY.yearsInBusiness}+ years in business</strong> and a team of {COMPANY.teamSize}+ designers and craftsmen, we pride ourselves on transparent pricing, on-time delivery, and quality that is backed by a written warranty. Whether it is a 1BHK makeover or a complete 3BHK turnkey renovation, we manage everything under one roof.</p>
                  <ul className="list-check primary">
                    <li>Single accountable team for design + execution</li>
                    <li>3D designs and fixed quotations before work begins</li>
                    <li>Brand-authorised materials and fittings</li>
                    <li>Society NOC and permission assistance</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div>
                  <img src={IMAGES.aboutPic} className="img-fluid" alt="Interiors in Mumbai design studio team" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatsBand />

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

        <Certifications />
        <Warranty />
        <ServiceAreas />
        <BeforeAfter />

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

        <Testimonials />
      </div>
    </>
  );
};
export default AboutUs;