import React from 'react'
import CountUp from 'react-countup'
import '../assets/vendor/magnific-popup/magnific-popup.min.css'


const VideoCounter = () => {
    return (
        <>
            <div className="dz-content-inner">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 counter-info aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item">
                                <div className="counter-bx">
                                    <h2 className="counter text-primary">
                                        <CountUp end={987} duration={5} />
                                    </h2>
                                    <h3 className="m-b0">Project <br />Completed</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item">
                                <div className="counter-bx">
                                    <h2 className="counter text-primary">
                                        <CountUp end={987} duration={5} />
                                    </h2>
                                    <h3 className="m-b0">Client <br />Satisfaction</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item">
                                <div className="counter-bx">
                                    <h2 className="counter text-primary">
                                        <CountUp end={874} duration={5} />
                                    </h2>
                                    <h3 className="m-b0">Cup Of <br />Coffee Meet</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCounter