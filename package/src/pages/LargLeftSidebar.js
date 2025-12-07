import React, { useState } from 'react'
import CommanBanner from '../elements/CommanBanner'
import { IMAGES } from '../constants/theme'
import LargeBlogCard from '../elements/LargeBlogCard'
import LargeSidebar from '../components/LargeSidebar'
import Pagination from '../elements/Pagination'
import { Link } from 'react-router-dom'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import ModalVideo from 'react-modal-video';

const largBlogGrid = [
    { img: IMAGES.blogGridPic1 },
    { img: IMAGES.blogGridPic2 },
    { img: IMAGES.blogGridPic3 },

]

const LargLeftSidebar = () => {
    const swiperRef = React.useRef(null);
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="page-content bg-white">
                <CommanBanner mainTitle="Large Left Sidebar" parentTitle="Home" pageName="Our Blog" bgImage={IMAGES.bnr4} />
                <div className="content-inner">
                    <div className="container">
                        <div className="row">
                            <LargeSidebar />
                            <div className="col-xl-8 col-lg-8">
                                <LargeBlogCard image={IMAGES.blogGridPic2} />
                                <div className="dz-card blog-grid style-1 m-b50 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    <div className="dz-media">
                                        <Swiper className="swiper-container post-swiper"
                                            modules={[Navigation]}
                                            ref={swiperRef}
                                            speed={1220}
                                            loop={true}
                                        >
                                               {
                                                largBlogGrid.map((item, ind)=>(
                                                    <SwiperSlide className="swiper-slide"
                                                     key={ind}
                                                    >
                                                        <Link to="/blog-details"><img src={item.img} alt="" /></Link>
                                                    </SwiperSlide>
                                                ))
                                               }
                                            <div className="prev-post-swiper-btn"
                                                onClick={()=>{swiperRef.current.swiper.slidePrev()}}
                                             >
                                                <i className="la fa-angle-left"></i>
                                            </div>
                                            <div className="next-post-swiper-btn"
                                                onClick={() => { swiperRef.current.swiper.slideNext() }}
                                            ><i className="la fa-angle-right"></i></div>
                                        </Swiper>
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-date">
                                                    <strong>26</strong>
                                                    <span>Apr</span>
                                                </li>
                                                <li className="post-category"><Link rel="category tag">Audio</Link></li>
                                                <li className="post-user">By <Link> John Doe</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="dz-title"><Link to="/blog-details">Modern Family House.</Link></h3>
                                        <div className="dz-post-text text">
                                            <p>You can align your image to the left, right, or center with Link caption, link and alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop an.</p>
                                        </div>
                                        <div className="read-more">
                                            <Link className="btn btn-primary btn-rounded btn-sm hover-icon">
                                                <span>Read More </span>
                                                <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-card blog-grid style-1 m-b50 post-video aos-item">
                                    <div className="dz-media">
                                        <Link to="#">
                                            <img src={IMAGES.blogGridPic3} alt="" />
                                            <div className="post-video-icon fa fa-play"
                                                onClick={() => { setOpen(true) }}
                                            ></div>
                                        </Link>
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-date">
                                                    <strong>26</strong>
                                                    <span>Apr</span>
                                                </li>
                                                <li className="post-category"><Link rel="category tag">Audio</Link></li>
                                                <li className="post-user">By <Link> John Doe</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="dz-title"><Link to={"blog-details"}>Sample Hotel Art.</Link></h3>
                                        <div className="dz-post-text text">
                                            <p>You can align your image to the left, right, or center with Link caption, link and alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop an.</p>
                                        </div>
                                        <div className="read-more">
                                            <Link className="btn btn-primary btn-rounded btn-sm hover-icon">
                                                <span>Read More </span>
                                                <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-card blog-grid style-1 m-b50 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="">
                                                    <strong>26</strong>
                                                    <span>Apr</span>
                                                </li>
                                                <li className="post-category"><Link rel="category tag">Audio</Link></li>
                                                <li className="post-user">By <Link > John Doe</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="dz-title"><Link to="/blog-details">Residential Project.</Link></h3>
                                        <div className="dz-post-text text">
                                            <p>You can align your image to the left, right, or center with Link caption, link and alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop an.</p>
                                        </div>
                                        <div className="read-more">
                                            <Link className="btn btn-primary btn-rounded btn-sm hover-icon">
                                                <span>Read More </span>
                                                <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel="youtube" autoplay
                isOpen={isOpen} videoId="sNCv3_NTNtU" onClose={() => setOpen(false)}
            />
        </>
    )
}

export default LargLeftSidebar