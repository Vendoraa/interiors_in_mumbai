import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import CommanBanner from '../elements/CommanBanner';
import Progress from '../components/Progress';
import Faq from '../components/Faq';

const ImaGallery = [
    { id: 1, catagery: "Interior Design", img: IMAGES.portfolioLivingRoom, title: "Modern Living Room", location: "Mira Road" },
    { id: 2, catagery: "Interior Design", img: IMAGES.mumbai2bhk, title: "2BHK Apartment", location: "Andheri" },
    { id: 3, catagery: "Interior Design", img: IMAGES.mumbai3bhk, title: "3BHK Full Interiors", location: "Bandra" },
    { id: 4, catagery: "Interior Design", img: IMAGES.mumbaiKitchen, title: "Modular Kitchen", location: "Powai" },
    { id: 5, catagery: "Construction", img: IMAGES.service5, title: "Commercial Space", location: "Thane" },
    { id: 6, catagery: "Interior Design", img: IMAGES.service3, title: "Master Bedroom", location: "Mumbai" },
];

const Portfolio = () => {
    const [item, setItem] = useState(ImaGallery);
    const [active, setActive] = useState(false);
    const fiterItemes = (filterArr) => {
        setActive(filterArr);
        let updateItemes = ImaGallery.filter((CurEle) => {
            return CurEle.catagery === filterArr;
        });
        setItem(updateItemes);
    }

    return (
        <>
            <SEO
                title="Interior Design Portfolio | Projects in Mumbai"
                description="Interior design projects we have completed across Mumbai. Browse flats, kitchens and offices with the area, budget and timeline for each."
                keywords="Interior Design Portfolio, Mumbai Interior Projects, Home Design Gallery, Office Interior Portfolio, Recent Works"
            />
            <div className="page-content bg-white">
                <CommanBanner mainTitle="Portfolio" parentTitle="Home" pageName="Portfolio" bgImage={IMAGES.bannerbg3} />

                {/* Before/After Slider Section Removed */}

                <section className="content-inner line-img overflow-hidden">
                    <div className="site-filters style-1 clearfix center">
                        <ul className="filters" data-toggle="buttons">
                            <li onClick={() => { setItem(ImaGallery); setActive(false) }} className={`btn ${item === ImaGallery ? 'active' : undefined}`}
                            >
                                <button type="button" aria-label="Show all projects" aria-pressed={item === ImaGallery}>All</button>
                            </li>
                            <li
                                onClick={() => { fiterItemes('Interior Design') }}
                                className={`btn ${active === 'Interior Design' ? 'active' : undefined}`} >
                                <button type="button" aria-label="Show interior design projects" aria-pressed={active === 'Interior Design'}>Interior Design</button>
                            </li>
                            <li onClick={() => { fiterItemes('Construction') }}
                                className={`btn ${active === 'Construction' ? 'active' : undefined}`}
                            >
                                <button type="button" aria-label="Show construction projects" aria-pressed={active === 'Construction'}>Construction</button>
                            </li>
                            <li onClick={() => { fiterItemes('Architecture') }}
                                className={`btn ${active === 'Architecture' ? 'active' : undefined}`}
                            >
                                <button type="button" aria-label="Show architecture projects" aria-pressed={active === 'Architecture'}>Architecture</button>
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <ul id="masonry" className="row">
                            {
                                item.map((i, index) => (
                                    <li className="card-container col-xl-4 col-md-6 col-sm-6 architecture m-b30" key={index}>
                                        <div className="dz-box overlay style-1">
                                            <div className="dz-media">
                                                <img src={i.img} alt={`${i.title} in ${i.location} - interior design project by Interiors in Mumbai`} loading="lazy" />
                                            </div>
                                            <div className="dz-info">
                                                <h6 className="sub-title">{i.catagery.toUpperCase()}</h6>
                                                <h4 className="title m-b15"><Link to="/services">{i.title} <span>{i.location}</span></Link></h4>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
                <section className="section-full dz-content-bx style-2 text-white" >
                    <Progress />
                </section>
                <section className="section-full content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg1})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <Faq />
                </section>
            </div>
        </>
    )
}

export default Portfolio;