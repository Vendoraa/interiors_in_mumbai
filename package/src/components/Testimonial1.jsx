import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import { IMAGES } from '../constants/theme'
import { Link } from 'react-router-dom'

const testimonial = [
    { name: "George Carson", para: "Working with Interiors in Mumbai on our custom furniture project was a delight. They listened to our needs and preferences, and the end result exceeded our expectations. The furniture not only looks beautiful but is also practical and fits perfectly in our space.", testimonialImg: IMAGES.pic7, dataMeber: 1, className: "dzclient1" },
    { name: "Freddie Ronan", para: "Interiors in Mumbai's space-saving solutions have transformed our home. Their clever designs have allowed us to make the most of every inch of space without compromising on style. We are extremely happy with the results and would highly recommend their services.", testimonialImg: IMAGES.pic8, dataMeber: 2, className: "dzclient2" },
    { name: "Ethan Jacoby", para: "I hired Interiors in Mumbai to design and build custom furniture for my new home, and I couldn't be happier with the outcome. The furniture is not only functional but also adds a touch of elegance to my space. Their attention to detail and commitment to quality are commendable.", testimonialImg: IMAGES.pic9, dataMeber: 3, className: "dzclient3" },
    { name: "Charlie Kane", para: "I am thrilled with the custom furniture designed by Interiors in Mumbai. They transformed my vision into a stunning reality. The craftsmanship is exceptional, and the attention to detail is evident in every piece. I highly recommend their services to anyone looking for unique and high-quality furniture.", testimonialImg: IMAGES.pic10, dataMeber: 4, className: "dzclient4" },
    { name: "Alfie Mason", para: "Interiors in Mumbai helped us maximize our small space with innovative solutions. Their space-saving ideas not only made our home more functional but also added a touch of style. We are impressed with their creativity and professionalism.", testimonialImg: IMAGES.pic11, dataMeber: 5, className: "dzclient5" }

]
const Testimonial1 = () => {
    const swiperRef = React.useRef(null);
    const paginationRef = React.useRef(null)
    const pagination = {
        clickable: true,
        el: '.swiper-pagination-2',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <>
            <div className="container">
                <div className="section-head style-1 text-center">
                    <h6 className="sub-title text-primary">TESTIMONIAL</h6>
                    <h2 className="title">What Our Clients Says</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 align-self-center aos-item">
                        <Swiper className="swiper-container swiper-client"
                            speed={1500}
                            loop={true}
                            pagination={pagination}
                            modules={[Pagination]}
                            ref={swiperRef}
                        >
                            <div className="swiper-wrapper">
                                {
                                    testimonial.map((item, index) => (
                                        <SwiperSlide className="swiper-slide" data-rel="6" key={index}>
                                            <div className="testimonial-1">
                                                <div className="testimonial-info">
                                                    <div className="flaticon-quotation quote-icon"></div>
                                                    <div className="testimonial-text">
                                                        <p>{item.para}</p>
                                                    </div>
                                                    <div className="testimonial-detail">
                                                        <h4 className="testimonial-name">{item.name}</h4>
                                                        <span className="testimonial-position text-primary">CEO Founder</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="prev" title='prev' role="button" aria-label="Previous testimonial" />
                                            <div className="next" title='next' role="button" aria-label="Next testimonial" />
                                        </SwiperSlide>
                                    ))
                                }

                            </div>
                        </Swiper>
                    </div>
                    <div className="col-lg-6">
                        <div className="client-area">
                            <svg viewBox="0 0 574 511" className="client-bg aos-item" data-aos="fade-in" data-aos-duration="800" data-aos-delay="200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path stroke="var(--primary)" strokeWidth="3" fill="none" d="M466.253 161.575c32.408-59.804 26.317-127.495-35.817-124.214-21.983 1.159-42.258 16.216-64.265 17.762-20.248 1.425-39.152-7.801-56.128-17.686-34.373-20.017-65.685-58.278-103.358-16.906-25.654 28.169 3.163 72.215-24.694 97.514-8.698 7.905-22.479 9.509-33.89 10.987-28.345 3.671-50.444 8.129-77.333 21.075-50.333 24.214-63.016 41.712-68.009 72.376-5.411 33.246 18.459 81.167 57.923 86.892 47.337 6.875 62.6-27.975 115.202-20.21 44.397 6.545 37.678 43.589 36.73 76.523-1.791 62.123 48.901 88.979 106.445 67.392 18.747-7.036 54.435-25.45 61.781-46.766 5.929-17.204-8.925-38.223-12.682-54.363-13.218-56.766 52.37-36.554 90.575-32.547 36.51 3.834 98.693 4.263 110.935-52.659 4.2-19.531-24.295-55.633-42.521-58.503-25.786-4.051-73.433-3.538-60.894-26.667z"></path><path fill-rule="evenodd" fill="var(--rgba-primary-1)" d="M421.378 125.766c-2.044-75.742-45.622-137.651-103.734-99.88-20.562 13.364-31.734 39.18-52.103 52.929-18.739 12.652-42.114 14.28-63.996 14.201-44.308-.167-95.824-19.637-109.124 41.255-9.059 41.463 43.273 67.904 30.49 107.825-3.989 12.47-16.39 21.694-26.574 29.475-25.3 19.327-44.135 35.937-62.865 63.401-35.069 51.394-37.558 75.336-25.296 107.699 13.297 35.087 63.014 68.02 104.272 51.562 49.494-19.732 44.809-61.853 99.879-83.658 46.474-18.414 60.624 21.064 78.052 53.364 32.873 60.926 96.733 58.6 140.221 5.725 14.167-17.228 38.338-54.87 33.553-79.523-3.863-19.899-29.899-31.903-42.513-45.38-44.367-47.4 30.162-64.432 69.25-81.845 37.355-16.637 97.582-50.856 77.688-112.586-6.827-21.182-54.423-40.137-73.603-32.754-27.132 10.453-72.81 37.485-73.597 8.19z"></path></svg>
                            <ul className="aos-item" >
                                {
                                    testimonial.map((item, index) => (
                                        <li key={index} data-member={item.dataMeber}
                                            ref={paginationRef}
                                            className='swiper-pagination-2'
                                        >
                                            <Link className={`${item.className}`} aria-label={`View testimonial from ${item.name}`}>
                                                <img
                                                    onClick={() => index < 3 ? swiperRef.current.swiper.slidePrev() : swiperRef.current.swiper.slideNext()}
                                                    src={item.testimonialImg} alt=""
                                                />
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial1
