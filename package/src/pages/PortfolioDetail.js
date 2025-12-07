import React, { useState } from 'react'
import CommanBanner from '../elements/CommanBanner'
import { IMAGES } from '../constants/theme'
import ModalVideo from 'react-modal-video'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';





const galleryBlog = [
    { img: IMAGES.service1 },
    { img: IMAGES.service2 },
    { img: IMAGES.service3 },
];

const SwipperSlide = [

    { swipperImg: IMAGES.workPic1, changeStyle: "mt-5" },
    { swipperImg: IMAGES.workPic2, },
    { swipperImg: IMAGES.workPic3, changeStyle: "mt-5" },
    { swipperImg: IMAGES.workPic1 },
    { swipperImg: IMAGES.workPic2, changeStyle: "mt-5" },
    { swipperImg: IMAGES.workPic3 },
    { swipperImg: IMAGES.workPic1, changeStyle: "mt-5" },
    { swipperImg: IMAGES.workPic2 },
    { swipperImg: IMAGES.workPic3, changeStyle: "mt-5" },
]

const PortfolioDetail = () => {

    const [isOpen, setOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);

    return (
        <>
            <div className="page-content bg-white">

                <CommanBanner mainTitle="Portfolio Detail" parentTitle="Home" pageName="Portfolio Detail" bgImage={IMAGES.bnr7} />
                <section className="section-full content-inner-2 port-detail" style={{ backgroundImage: `url(${IMAGES.bg2})`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: "no-repeat" }}>
                    <div className="container">
                        <div className="row mb-lg-5 mb-3 ">
                            <div className="col-lg-12 col-md-12 m-b50 aos-item m-sm-b30" data-aos="fade-up"
                                data-aos-duration="1000" data-aos-delay="200">
                                <img src={IMAGES.workWorkpic1} alt="" />
                            </div>
                            <div className="col-lg-6 col-md-12 align-self-center aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <h2 className="dz-title">Curabitur Commodo Eros Sit Amet Diam Dictum.</h2>
                                <p>Pellentesque magna felis, dictum vitae ipsum dapibus, congue tempus ex. Praesent mi est, eleifend non pulvinar Link, lobortis quis nulla. Vivamus at tortor eu nisi gravida sagittis. Duis vel nibh neque. Curabitur porta lorem tortor.</p>
                                <p className="m-b30">Ut ac lobortis nisl, sit amet suscipit tortor. Aenean egestas consectetur felis quis lacinia. Donec Link iaculis neque. Aliquam Link mi at ex euismod lacinia. Etiam rutrum eu sem non ullamcorper. Donec pulvinar est diam, at mollis lectus sollicitudin id. Vestibulum viverra eu quam ut iaculis. In hac habitasse platea dictumst. In dignissim.</p>
                                <div className="icon-bx-wraper style-7 left m-b30">
                                    <div className="icon-bx-sm bg-primary">
                                        <span className="icon-cell"><i className="flaticon-placeholder"></i></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title m-b5">Project Location</h4>
                                        <p>#8901 Marmora Road Chi, Vietnam</p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper style-7 left m-b30">
                                    <div className="icon-bx-sm bg-primary">
                                        <span className="icon-cell"><i className="flaticon-telephone"></i></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title m-b5">Call Us</h4>
                                        <p>+91 123 456 7890</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 m-b30 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                <img src={IMAGES.workWorkpic2} className="d-lg-block d-none" alt="" />
                            </div>
                        </div>
                    </div>
                </section>



                <div className="content-inner-2" style={{ backgroundColor: "#dfdbdb" }}>
                    <div className="container">
                        <div className="row lightgallery">
                            <div className="col-lg-12 col-md-12 m-b30 aos-item" data-aos="fade-up" data-aos-duration="1000"
                                data-aos-delay="200">
                                <div className="video-bx content-media style-2 shadow">
                                    <img src={IMAGES.video} alt="" />
                                    <div className="video-btn aos-item aos-init aos-animate" data-aos="zoom-in"
                                        data-aos-duration="1000" data-aos-delay="400">
                                        <Link onClick={() => { setOpen(true) }} className="popup-youtube"><i
                                            className="fas fa-play"></i></Link>
                                    </div>
                                </div>
                            </div>


                            <Lightbox
                                open={galleryOpen}
                                close={() => setGalleryOpen(false)}
                                slides={[
                                    { src: IMAGES.service1 },
                                    { src: IMAGES.service2 },
                                    { src: IMAGES.service3 },
                                ]}
                            />

                            {
                                galleryBlog.map((item, ind) => (
                                    <div key={ind} className="col-lg-4 col-md-4 m-b30 aos-item" data-aos="fade-up" data-aos-duration="1000"
                                        data-aos-delay="200">
                                        <div className="dz-box overlay style-1">
                                            <div className="dz-media">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="dz-info">
                                                <span onClick={() => { setGalleryOpen(true) }} data-exthumbimage={item.img} data-src={item.img}
                                                    className="view-btn lightimg" title="ARCHITECTURAL"></span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>


                <section className="content-inner-1">
                    <div className="container m-b70">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">OUR PORTFOLIOS</h6>
                            <h2 className="title">Our Latest Projects</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <Swiper className="swiper-container swiper-portfolio lightgallery aos-item" data-aos="fade-in"
                            data-aos-duration="1000" data-aos-delay="400"
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
                            <div className="swiper-wrapper">
                                {
                                    SwipperSlide.map((item, i) => (
                                        <SwiperSlide className="swiper-slide" key={i}>
                                            <div className={`dz-box overlay style-1 ${item.changeStyle}`}>
                                                <div className="dz-media">
                                                    <img src={item.swipperImg} alt="" />
                                                </div>
                                                <div className="dz-info">
                                                    <span data-exthumbimage="images/work/work-1/pic-1.jpg"
                                                        data-src="images/work/work-1/pic-1.jpg" className="view-btn lightimg"
                                                        title="INTERIOR DESIGN"
                                                    >                                                        
                                                    </span>
                                                    <h6 className="sub-title">INTERIOR DESIGN</h6>
                                                    <h4 className="title m-b15">
                                                        <Link to="/portfolio-details">Modern House Interior
                                                            <span>New York</span>
                                                        </Link>
                                                        </h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </div>

                        </Swiper>
                    </div>
                </section>

                <ModalVideo channel="youtube" autoplay
                    isOpen={isOpen} videoId="sNCv3_NTNtU" onClose={() => setOpen(false)}
                />
            </div>
        </>
    )
}

export default PortfolioDetail