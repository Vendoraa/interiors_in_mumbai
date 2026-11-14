import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import CountUp from 'react-countup'
import pic1 from '../assets/images/work/mumbai_2bhk.webp'
import pic2 from '../assets/images/work/mumbai_3bhk.webp'
import pic3 from '../assets/images/work/mumbai_kitchen.webp'

const accordian = [
    { icon: "flaticon-crane", key: 0, heading: "Custom Furniture", text: "Wardrobes, beds, TV units and study tables built to fit your exact wall sizes. We use BWP plywood and branded hardware, so it lasts in Mumbai's humidity." },
    { icon: "flaticon-interior-design", key: 1, heading: "Modular Kitchen", text: "L-shape, U-shape, parallel or straight kitchens with soft-close drawers and tall units. Most kitchens are installed in 3 to 5 weeks." },
    { icon: "flaticon-blueprint", key: 2, heading: "Painting", text: "Interior and exterior painting with proper surface prep and priming. We use Asian Paints and Berger, and cover your furniture before we start." },
    { icon: "flaticon-crane", key: 3, heading: "Electrical", text: "New wiring, rewiring, lighting and switchboard work. We use Polycab or Finolex wire and Legrand or Schneider switches, with MCB and ELCB safety." },
]

const Working = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="dz-media">
                        <div className="img1 aos-item">
                            <img src={pic1} alt="Interior design consultation process" />
                        </div>

                        <div className="img2 aos-item" data-aos="fade-up">
                            <img src={pic2} alt="3D design and planning" />
                        </div>
                        <div className="img3 aos-item">
                            <img src={pic3} alt="Project execution and delivery" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className="year-exp">
                        <h2 className="year aos-item counter" data-aos="fade-up">
                            <CountUp
                                end={15}
                                duration={8}
                            />
                        </h2>
                        <h3 className="text aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">Years Of Working Experience</h3>
                    </div>
                    <p className="m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">We started in 2009 and have completed more than 1,200 homes across Mumbai. Our carpenters, painters and electricians are on our own payroll, so the same team that designs your home also builds it. Call us for a free site visit and a rough budget range.</p>
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
