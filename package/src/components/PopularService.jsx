import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const card = [
    { id: 1, delay: 0.1, icon: 'flaticon-blueprint-1', heading: "Custom Furniture", text: "Wardrobes, beds, TV units and study tables built to fit your exact wall sizes. We use BWP plywood and branded hardware, so it lasts in Mumbai's humidity." },
    { id: 2, delay: 0.2, icon: 'flaticon-crane', heading: "Interior Design", text: "Full home interiors from layout plan to final handover. You get 3D designs and a fixed quote before any work starts, so there are no surprises later." },
    { id: 3, delay: 0.3, icon: 'flaticon-interior-design-1', heading: "Painting", text: "Interior and exterior painting with proper surface prep and priming. We use Asian Paints and Berger, and cover your furniture before we start." },
    { id: 4, delay: 0.6, icon: 'flaticon-furniture', heading: "Modular Kitchen", text: "L-shape, U-shape, parallel or straight kitchens with soft-close drawers and tall units. Most kitchens are installed in 3 to 5 weeks." },
    { id: 5, delay: 0.7, icon: 'flaticon-home', heading: "Electrical", text: "New wiring, rewiring, lighting and switchboard work. We use Polycab or Finolex wire and Legrand or Schneider switches, with MCB and ELCB safety." },
    { id: 6, delay: 0.8, icon: 'flaticon-support', heading: "Space Saving", text: "Loft storage, pull-out units and multi-use furniture for small Mumbai flats. We find the storage you didn't know you had." },

]

const PopularService = () => {
    const [addActive, setAddActive] = useState(1);

    return (
        <>
            <div className="container">
                <div className="section-head style-1">
                    <h6 className="sub-title text-primary">OUR SERVICES</h6>
                    <h2 className="title">Services we provide</h2>
                </div>
                <div className="card-grid cols-3">
                    {
                        card.map((item, ind) => (
                            <div
                                key={ind}
                                className="aos-item"
                            >
                                <div
                                    className={`icon-bx-wraper style-3 ${addActive === item.id ? 'active' : ''}`}
                                    onMouseEnter={() => setAddActive(item.id)}
                                >
                                    <div className="icon-xl m-b30">
                                        <Link className="icon-cell"><i className={item.icon}></i></Link>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title m-b10"><Link></Link></h4>
                                        <h3 className="title m-b30">{item.heading}</h3>
                                        <p className="m-b30">{item.text}</p>
                                        <Link
                                            to={`/services-details?service=${encodeURIComponent(item.heading)}`}
                                            className="btn btn-primary btn-rounded btn-sm hover-icon"
                                            aria-label={`Read more about ${item.heading}`}
                                        >
                                            <span>Read More</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default PopularService
