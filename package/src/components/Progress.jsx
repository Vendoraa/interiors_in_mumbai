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
                                <h2 className="title text-white m-b20">How We Run a Project</h2>
                                <p>We start with a site visit and a 3D design, so you can see the layout and finishes before we order anything. Once you approve the design and the fixed quote, our in-house carpenters, painters and electricians start work. One project manager stays with you until handover, and you get weekly updates on WhatsApp.</p>
                            </div>
                            <div className="progress-bx style-2 m-b40">
                                <div className="progress-info">
                                    <h4 className="title text-white">Projects completed on schedule</h4>
                                    <h4 className="progress-value text-white">94%</h4>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '94%' }}></div>
                                </div>
                            </div>
                            <div className="progress-bx style-2 m-b40">
                                <div className="progress-info">
                                    <h4 className="title text-white">Work from repeat clients and referrals</h4>
                                    <h4 className="progress-value text-white">70%</h4>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="progress-bx style-2">
                                <div className="progress-info">
                                    <h4 className="title text-white">Clients who would recommend us</h4>
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