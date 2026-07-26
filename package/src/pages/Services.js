import React from 'react'
import CommanBanner from '../elements/CommanBanner'
import { IMAGES } from '../constants/theme'
import PopularService from '../components/PopularService'
import VideoCounter from '../components/VideoCounter'
import Faq from '../components/Faq'
import Testimonial2 from '../components/Testimonial2'
import Testimonial1 from '../components/Testimonial1'
import Progress from '../components/Progress'
import Brand from '../components/Brand'
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { buildService } from '../seo/schema';
import ServiceDetailSections from '../components/ServiceDetailSections';
import SERVICES, { SERVICE_ORDER } from '../seo/serviceContent';

const Services = () => {
    const servicesSchema = SERVICE_ORDER.map(key => {
      const meta = SERVICES[key];
      return buildService({
        name: meta.title,
        description: meta.what,
        serviceType: 'Interior Design & Turnkey Contracting',
        url: `https://www.interiorsinmumbai.com/services?service=${encodeURIComponent(key)}#${meta.slug}`,
      });
    });

    return (
        <>
            <SEO
                title="Interior Design Services Mumbai | Residential & Commercial"
                description="Explore our wide range of interior design services in Mumbai, including residential design, commercial spaces, turnkey projects, and custom furniture."
                keywords="Interior Design Services Mumbai, Residential Interiors, Commercial Interior Design, Turnkey Projects, Custom Furniture Design"
            />
            <JsonLd data={{ '@context': 'https://schema.org', '@graph': servicesSchema }} />
            <div className="page-content bg-white">
                <CommanBanner mainTitle="Our Services" parentTitle="Home" pageName="Our Services" bgImage={IMAGES.bannerbg3} />
                <section className="content-inner-2" style={{ backgroundImage: `url(${IMAGES.background3})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <PopularService />
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">WHAT WE DO</h6>
                            <h2 className="title">Our Interior Design Services in Mumbai</h2>
                            <p>From complete home interiors to modular kitchens and custom furniture, here is everything we offer with clear answers on cost, timeline, and process.</p>
                        </div>
                        {SERVICE_ORDER.map((key) => (
                            <ServiceDetailSections key={key} serviceKey={key} />
                        ))}
                    </div>
                </section>
                <section className="dz-content-bx style-3">
                    <VideoCounter />
                </section>
                <section className="content-inner-2" style={{ backgroundImage: `url(${IMAGES.bg2})`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <Testimonial1 />
                </section>
                <section className="content-inner-2">
                    <Testimonial2 />
                </section>
                <section className="section-full content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg1})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <Faq />
                </section>
                <section className="section-full dz-content-bx style-2 text-white" >
                    <Progress />
                </section>
                <section className="content-inner-1">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">Brands</h6>
                            <h2 className="title">Our Top Partners</h2>
                        </div>
                        <Brand />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Services
