import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGES } from '../constants/theme';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const portfolioBlog = [
    { image: IMAGES.mumbai2bhk, title: '2 BHK Full Interiors', location: 'Bandra West', subtitle: 'INTERIOR DESIGN', },
    { image: IMAGES.mumbai3bhk, changeStyle: 'mt-5', title: '3 BHK with Sea View', location: 'Marine Drive', subtitle: 'INTERIOR DESIGN', },
    { image: IMAGES.mumbaiKitchen, title: 'L-Shape Modular Kitchen', location: 'Andheri East', subtitle: 'MODULAR KITCHEN', },
    { image: IMAGES.mumbai2bhk, changeStyle: 'mt-5', title: '1 BHK Space Saving Makeover', location: 'Juhu', subtitle: 'INTERIOR DESIGN', },
    { image: IMAGES.mumbai3bhk, title: '3 BHK Renovation', location: 'Worli', subtitle: 'INTERIOR DESIGN', },
    { image: IMAGES.mumbaiKitchen, changeStyle: 'mt-5', title: 'Parallel Kitchen with Tall Units', location: 'Powai', subtitle: 'MODULAR KITCHEN', },
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
                                    <Link to="/portfolio-details" aria-label={`View ${item.title} project in ${item.location}`}>
                                        <img alt={`${item.title} in ${item.location} - interior design project by Interiors in Mumbai`} src={item.image} loading="lazy" />
                                    </Link>
                                    <div className="dz-info">
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