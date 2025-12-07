import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import CountUp from 'react-countup'
import pic1 from '../assets/images/work/mumbai_2bhk.png'
import pic2 from '../assets/images/work/mumbai_3bhk.png'
import pic3 from '../assets/images/work/mumbai_kitchen.png'

const accordian = [
    { icon: "flaticon-crane", key: 0, heading: "Custom Furniture", text: "Elevate your home with unique charm through our bespoke custom furniture. Crafted with precision and passion, our pieces redefine your space with individuality and style." },
    { icon: "flaticon-interior-design", key: 1, heading: "Modular Kitchen", text: "Experience the epitome of modern convenience with our modular kitchen solutions. Tailored for efficiency and elegance, our designs seamlessly integrate style into every culinary masterpiece." },
    { icon: "flaticon-blueprint", key: 2, heading: "Painting", text: "Add a splash of personality to your home with our expert painting services. Transform spaces with vibrant colors and meticulous craftsmanship for a truly captivating ambiance." },
    { icon: "flaticon-crane", key: 3, heading: "Electrical", text: "Energize your home with our top-notch electrical services. From wiring to lighting, we ensure safety and efficiency, illuminating your space with precision and reliability" },
]

const Working = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="dz-media">
                        <div className="img1 aos-item">
                            <img src={pic1} alt="" />
                        </div>

                        <div className="img2 aos-item" data-aos="fade-up">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="img3 aos-item">
                            <img src={pic3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className="year-exp">
                        <h2 className="year aos-item counter" data-aos="fade-up">
                            <CountUp
                                end={35}
                                duration={8}
                            />
                        </h2>
                        <h3 className="text aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">Years Of Working Experience</h3>
                    </div>
                    <p className="m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">Over 35 years, we've custom-crafted homes in Mumbai. From painting to remodels, our experienced team tackles it all, including custom furniture and electrical work. We collaborate closely to bring your vision to life. Contact us today for your next project.</p>
                    <div className="accordion dz-accordion about-faq" id="aboutFaq">
                        <Accordion>
                            {
                                accordian.map((i, ind) => (
                                    <Accordion.Item eventKey={`${i.key}`} key={ind}>
                                        <div>
                                            <Accordion.Header className="accordion-header" id="flush-headingOne">
                                                <i className={i.icon}></i>
                                                {i.heading}
                                                <span className="toggle-close"></span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {i.text}
                                            </Accordion.Body>
                                        </div>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Working
