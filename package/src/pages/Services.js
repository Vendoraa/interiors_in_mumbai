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

const Services = () => {
    return (
        <>
            <SEO
                title="Our Services"
                description="Explore our wide range of interior design services in Mumbai, including residential design, commercial spaces, turnkey projects, and custom furniture."
                keywords="Interior Design Services Mumbai, Residential Interiors, Commercial Interior Design, Turnkey Projects, Custom Furniture Design"
            />
            <div className="page-content bg-white">
                <CommanBanner mainTitle="Our Services" parentTitle="Home" pageName="Our Services" bgImage={IMAGES.bnr6} />
                <section className="content-inner-2" style={{ backgroundImage: `url(${IMAGES.background3})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <PopularService />
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
