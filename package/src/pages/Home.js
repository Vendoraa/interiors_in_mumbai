import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from "swiper";


import pic2 from '../assets/images/main-slider/pic2.png';
import Working from '../components/Working';
import VideoCounter from '../components/VideoCounter';
import PopularService from '../components/PopularService';
import Blog from '../components/Blog';
import { IMAGES } from '../constants/theme';
import Projects from '../components/Projects';
import Faq from '../components/Faq';

import HowWeWork from '../components/HowWeWork';
import SEO from '../components/SEO';

const slideImg = [
    { text: "Interiors in Mumbai", img: process.env.PUBLIC_URL + "/images/main-slider/pic1.png" },
    { text: "DESIGNING", img: pic2 },
];
const Home = () => {
    const swiperRef = React.useRef(null);

    return (
        <>
            <SEO
                title="Luxury Interior Design & Home Renovation Services"
                description="Leading interior designers in Mumbai specializing in luxury home renovations, modern office designs, and complete turnkey projects."
                keywords="Interior Designers Mumbai, Luxury Interiors, Home Renovation Mumbai, Office Design, Turnkey Interior Contractors, Best Interior Designers"
            />

            <div className="page-content bg-white">
                <div className="slidearea">
                    <div className="side-contact-info">
                        <ul>
                            <li><i className="fas fa-phone-alt"></i> +91 998 724 1424</li>
                            <li><i className="fas fa-envelope"></i> hello@interiorsinmumbai.com</li>
                        </ul>
                    </div>
                    <div className="silder-one">
                        <Swiper className="swiper-container main-silder-swiper"
                            ref={swiperRef}
                            slidesPerView={1}
                            parallax={true}
                            speed={1500}
                            loop={false}
                            allowTouchMove={false}
                            modules={[Parallax]}
                        >
                            {
                                slideImg.map((i, index) => (
                                    <SwiperSlide className="swiper-slide" key={index} tag='div'>
                                        <div className="silder-img overlay-black-light">
                                            <img src={i.img} data-swiper-parallax="30%" alt="Interior design showcase - luxury home renovation by Interiors in Mumbai" fetchPriority={index === 0 ? "high" : undefined} loading={index === 0 ? "eager" : "lazy"} />
                                        </div>
                                        <div className="silder-content" data-swiper-parallax="-40%">
                                            <div className="inner-content">
                                                <h6 className="sub-title">{i.text}</h6>
                                                <h1 className="title">LET'S MAKE</h1>
                                                <h2 className="title-small">Your Perfect Home</h2>
                                                <Link to="/about-us" className="btn shadow-primary btn-light btn-rounded btn-ov-secondary" aria-label="Read more about us">READ MORE <i className="m-l10 fas fa-caret-right"></i></Link>
                                            </div>
                                            <div className="overlay-slide" data-swiper-parallax="100%"></div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>

                    </div>
                </div>
                <section className="section-full content-inner about-bx2" style={{ backgroundImage: `url(${IMAGES.background2})`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <div className="container">
                        <Working />
                    </div>
                </section>
                <section className="dz-content-bx style-3">
                    <VideoCounter />
                </section>
                <section className="content-inner-2" style={{ backgroundImage: `url(${IMAGES.background3})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <PopularService />
                </section>
                <section className="content-inner-2">
                    <HowWeWork />
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row section-head-bx align-items-center">
                            <div className="col-md-8">
                                <div className="section-head style-1">
                                    <h6 className="sub-title text-primary">OUR PORTFOLIOS</h6>
                                    <h2 className="title">Our Latest Projects</h2>
                                </div>
                            </div>
                            <div className="col-md-4 text-start text-md-end mb-4 mb-md-0">
                                <Link to="/portfolio" className="btn-link" aria-label="See all projects">See All Projects <i className="fas fa-plus scale08"></i></Link>
                            </div>
                        </div>
                    </div>
                    <Projects />
                </section>
                <section className="section-full content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg1})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <Faq />
                </section>
                <section className="content-inner-1 bg-gray line-img" style={{ backgroundImage: `url(images/background/bg2.png)`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <Blog />
                </section>
            </div>

        </>

    )
}

export default Home
