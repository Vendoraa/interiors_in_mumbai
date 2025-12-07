import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGES } from '../constants/theme';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const portfolioBlog = [
    { image: IMAGES.mumbai2bhk, title: 'Luxury 2 BHK Interior', location: 'Bandra West', subtitle: 'INTERIOR DESIGN', },
    { image: IMAGES.mumbai3bhk, changeStyle: 'mt-5', title: 'Sea View 3 BHK', location: 'Marine Drive', subtitle: 'ARCHITECTURAL', },
    { image: IMAGES.mumbaiKitchen, title: 'Modern Modular Kitchen', location: 'Andheri East', subtitle: 'INTERIOR DESIGN', },
    { image: IMAGES.mumbai2bhk, changeStyle: 'mt-5', title: 'Compact Luxury Home', location: 'Juhu', subtitle: 'INTERIOR DESIGN', },
    { image: IMAGES.mumbai3bhk, title: 'Premium South Bombay Apt', location: 'Worli', subtitle: 'ARCHITECTURAL', },
    { image: IMAGES.mumbaiKitchen, changeStyle: 'mt-5', title: 'High-Rise Kitchen Design', location: 'Powai', subtitle: 'INTERIOR DESIGN', },
];

const Projects = () => {


    return (
        <>

            <section className="content-inner-2">
                <div className="container-fluid">
                    <Swiper className="swiper-container swiper-portfolio lightgallery aos-item"
                        slidesPerView={4}
                        spaceBetween={30}
                        breakpoints={{
                            1280: {
                                slidesPerView: 4,
                            },
                            991: {
                                slidesPerView: 3,
                            },
                            591: {
                                slidesPerView: 2,
                            },
                            300: {
                                slidesPerView: 1,
                            },
                        }}
                    >

                        {portfolioBlog.map((item, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <motion.div className={`dz-box overlay style-1 ${item.changeStyle}`} >
                                    <Link to={item.image}>
                                        <img alt="img1" src={item.image} />
                                    </Link>
                                    <div className="dz-info">
                                        <span data-exthumbimage={item.image} data-src={item.image} className="view-btn lightimg" title="ARCHITECTURAL"></span>
                                        <h6 className="sub-title">{item.subtitle}</h6>
                                        <h3 className="title m-b15"><Link to="/portfolio-details">{item.title} <span>{item.location}</span></Link></h3>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div >
            </section>
        </>
    )
}

export default Projects