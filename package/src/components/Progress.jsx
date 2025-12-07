import React from 'react'
import { IMAGES } from '../constants/theme'

const Progress = () => {
    return (
        <>
            <div className="dz-content-inner bg-dark" style={{ backgroundImage: `url(${IMAGES.bg2_1})`, backgroundPosition: ' center' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 content-inner-1 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="section-head style-1">
                                <h6 className="sub-title text-primary">OUR STRATEGY</h6>
                                <h2 className="title text-white m-b20">Distinctive Interior For Special Ideas</h2>
                                <p>Fusce accumsan felis sed purus sollicitudin posuere. Vivamus id pharetra augue. Phasellus molestie ornare lacus mattis iaculis. Nulla dui dui, convallis et venenatis id, condimentum ut justo.</p>
                            </div>
                            <div className="progress-bx style-2 m-b40">
                                <div className="progress-info">
                                    <h4 className="title text-white">Architecture</h4>
                                    <h4 className="progress-value text-white">90%</h4>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="progress-bx style-2 m-b40">
                                <div className="progress-info">
                                    <h4 className="title text-white">3D Design</h4>
                                    <h4 className="progress-value text-white">80%</h4>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="progress-bx style-2">
                                <div className="progress-info">
                                    <h4 className="title text-white">Interior Design</h4>
                                    <h4 className="progress-value text-white">95%</h4>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                            <div className="content-media right">
                                <img src={IMAGES.progress} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Progress