import React from 'react';
import { IMAGES } from '../constants/theme';

const Progress = () => {
    return (
        <>
            <div className="dz-content-inner bg-dark" style={{ backgroundImage: `url(${IMAGES.bg2_1})`, backgroundPosition: ' center' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 content-inner-1 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="section-head style-1">
                                <h6 className="sub-title text-primary">OUR STRATEGY</h6>
                                <h2 className="title text-white m-b20">Distinctive Interiors, Flawless Execution</h2>
                                <p>Our strategy is simple: <strong>Client-Centric Design + Quality Execution</strong>. We start by understanding your lifestyle and needs, then create a 3D visualization so you know exactly what you're getting. Our in-house team of skilled craftsmen then brings that vision to life with precision and care, ensuring a seamless experience from concept to completion.</p>
                            </div>
                            <div className="progress-bx style-2 m-b40">
                                <div className="progress-info">
                                    <h4 className="title text-white">Design Innovation</h4>
                                    <h4 className="progress-value text-white">95%</h4>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div className="progress-bx style-2 m-b40">
                                <div className="progress-info">
                                    <h4 className="title text-white">Project Management</h4>
                                    <h4 className="progress-value text-white">100%</h4>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                            <div className="progress-bx style-2">
                                <div className="progress-info">
                                    <h4 className="title text-white">Client Satisfaction</h4>
                                    <h4 className="progress-value text-white">98%</h4>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '98%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                            <div className="content-media right">
                                <img src={IMAGES.service2} alt="Interior design strategy and execution" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress;