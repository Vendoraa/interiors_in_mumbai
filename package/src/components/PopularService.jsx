import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const card = [
    { id: 1, delay: 0.1, icon: 'flaticon-blueprint-1', heading: "Custom Furniture", text: "Elevate your home with unique charm through our bespoke custom furniture. Crafted with precision and passion, our pieces redefine your space with individuality and style." },
    { id: 2, delay: 0.2, icon: 'flaticon-crane', heading: "Interior Design", text: "Transform your living spaces into curated masterpieces with our expert interior designing services. From concept to execution, we infuse style and functionality to create environments that reflect your unique taste and lifestyle." },
    { id: 3, delay: 0.3, icon: 'flaticon-interior-design-1', heading: "Painting", text: "Add a splash of personality to your home with our expert painting services. Transform spaces with vibrant colors and meticulous craftsmanship for a truly captivating ambiance." },
    { id: 4, delay: 0.6, icon: 'flaticon-furniture', heading: "Modular Kitchen", text: "Experience the epitome of modern convenience with our modular kitchen solutions. Tailored for efficiency and elegance, our designs seamlessly integrate style into every culinary masterpiece." },
    { id: 5, delay: 0.7, icon: 'flaticon-home', heading: "Electrical", text: "Energize your home with our top-notch electrical services. From wiring to lighting, we ensure safety and efficiency, illuminating your space with precision and reliability" },
    { id: 6, delay: 0.8, icon: 'flaticon-support', heading: "Space Saving", text: "Maximize your living spaces with our innovative space-saving solutions. Our designs seamlessly blend functionality and style, optimizing every inch to create a clutter-free and visually appealing environment." },

]

const PopularService = () => {
    const [addActive, setAddActive] = useState(1);
    const gridItemStyle = {
        minHeight: '400px', // Adjust the height as needed
    };

    return (
        <>
            <div className="container">
                <div className="section-head style-1">
                    <h6 className="sub-title text-primary">OUR SERVICES</h6>
                    <h2 className="title">Services we provide</h2>
                </div>
                <div className="row">
                    {
                        card.map((item, ind) => (
                            <div
                                key={ind}
                                className="col-lg-4 col-sm-6 aos-item"
                            >
                                <div
                                    className={`icon-bx-wraper style-3 m-b30 ${addActive === item.id ? 'active' : ''}`}
                                    onMouseEnter={() => setAddActive(item.id)}
                                    style={gridItemStyle}
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
