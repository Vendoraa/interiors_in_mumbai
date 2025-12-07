import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGES } from '../constants/theme'
import { Autoplay } from 'swiper'
import { Link } from 'react-router-dom'

const testimonial2 = [
    {id:1, testimonial2Img: IMAGES.pic13, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
    {id:2, testimonial2Img: IMAGES.pic14, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
    {id:3, testimonial2Img: IMAGES.pic15, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
    {id:4, testimonial2Img: IMAGES.pic16, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
    {id:5, testimonial2Img: IMAGES.pic17, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
    {id:6, testimonial2Img: IMAGES.pic13, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
    {id:7, testimonial2Img: IMAGES.pic14, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
    {id:8, testimonial2Img: IMAGES.pic15, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
    {id:9, testimonial2Img: IMAGES.pic16, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
    {id:10, testimonial2Img: IMAGES.pic17, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
]
const Testimonial2 = () => {
    return (
        <>
            <div className="container-fluid">
                <Swiper className="swiper-container swiper-team"
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    speed={1000}
                    loop={true}
                    autoplay={{
                        delay:500,
                        disableOnInteraction:false
                    }}
                    breakpoints={{
                        1500: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        100: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    <div className="swiper-wrapper">
                        {
                            testimonial2.map((i,ind) => (
                                <SwiperSlide className="swiper-slide" key={ind}>
                                    <div className="card dz-team style-1">
                                        <div className="card-media">
                                            <img src={i.testimonial2Img} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="dz-name m-b5"><Link></Link>{i.title}</h5>
                                            <span className="dz-position">{i.subtitle}</span>
                                            <ul className="dz-social">
                                                <li><Link className="fab fa-skype"></Link></li>
                                                <li><Link className="fab fa-facebook"></Link></li>
                                                <li><Link className="fab fa-google-plus"></Link></li>
                                                <li><Link className="fab fa-twitter"></Link></li>
                                                <li><Link className="fab fa-youtube"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default Testimonial2