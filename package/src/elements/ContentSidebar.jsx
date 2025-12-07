import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../constants/theme'

const Sidebar=[
    {image:IMAGES.service1},
    {image:IMAGES.service2},
    {image:IMAGES.service3},
    {image:IMAGES.service4},
    {image:IMAGES.service5},
    {image:IMAGES.service6},
]
const ContentSidebar = ({openSide}) => {
    return (
        <>
            <div className={`contact-sidebar ${openSide ? 'active' : ''}`}>
                <div className="contact-box">
                    <div className="logo-contact logo-dark">
                        <Link to={'/'}><img src={IMAGES.logo1} alt="" /></Link>
                    </div>
                    <div className="m-b50 contact-text">
                        <div className="dz-title">
                            <h4>About US</h4>
                            <div className="dz-separator style-1 text-primary mb-0"></div>
                        </div>
                        <p>Aliquam erat volutpat. Nunc erat massa, porttitor vel egestas sit amet, tristique at massa. Donec posuere odio neque, in ultricies lorem aliquet eu. Donec venenatis libero Link nulla placerat egestas.</p>
                        <Link to={'/about-us'} className="btn btn-primary btn-sm btn-rounded">READ MORE</Link>
                    </div>
                    <div className="dz-title">
                        <h4>Gallery</h4>
                        <div className="dz-separator style-1 text-primary mb-0"></div>
                    </div>
                    <div className="widget bg-white widget_gallery">
                        <ul id="lightgallery" className="lightgallery m-b0">
                          {
                            Sidebar.map((item, ind)=>(
                                <li key={ind}>
                                    <div 
                                        className="dlab-post-thum dlab-img-effect"
                                        >
                                        <span className="lightimg">
                                            <img src={item.image} alt="" />
                                        </span>
                                    </div>
                                </li>

                            ))
                          }
                           
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentSidebar