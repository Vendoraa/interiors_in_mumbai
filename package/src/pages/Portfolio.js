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
    { id: 3, catagery: "Interior Design", img: IMAGES.mumbai3bhk, title: "Luxury 3BHK", location: "Bandra" },
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
                title="Interior Design Portfolio | Luxury Projects Mumbai"
                description="View our portfolio of stunning interior design projects in Mumbai. From luxury apartments to modern offices, see how we transform spaces."
                keywords="Interior Design Portfolio, Mumbai Interior Projects, Luxury Home Design Gallery, Office Interior Portfolio, Recent Works"
            />
            <div className="page-content bg-white">
                <CommanBanner mainTitle="Portfolio" parentTitle="Home" pageName="Portfolio" bgImage={IMAGES.bnr8} />
                <section className="content-inner line-img overflow-hidden">
                    <div className="site-filters style-1 clearfix center">
                        <ul className="filters" data-toggle="buttons">
                            <li onClick={() => { setItem(ImaGallery); setActive(false) }} className={`btn ${item === ImaGallery ? 'active' : undefined}`}
                            >
                                <Link aria-label="Show all projects">All</Link>
                            </li>
                            <li
                                onClick={() => { fiterItemes('Interior Design') }}
                                className={`btn ${active === 'Interior Design' ? 'active' : undefined}`} >
                                <Link aria-label="Show interior design projects">Interior Design</Link>
                            </li>
                            <li onClick={() => { fiterItemes('Construction') }}
                                className={`btn ${active === 'Construction' ? 'active' : undefined}`}
                            >
                                <Link aria-label="Show construction projects">Construction</Link>
                            </li>
                            <li onClick={() => { fiterItemes('Architecture') }}
                                className={`btn ${active === 'Architecture' ? 'active' : undefined}`}
                            >
                                <Link aria-label="Show architecture projects">Architecture</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <ul id="masonry" className="row lightgallery">
                            {
                                item.map((i, index) => (
                                    <li className="card-container col-xl-4 col-md-6 col-sm-6 architecture m-b30" key={index}>
                                        <div className="dz-box overlay style-1">
                                            <div className="dz-media">
                                                <img src={i.img} alt={i.title} />
                                            </div>
                                            <div className="dz-info">
                                                <span data-exthumbimage={i.img} data-src={i.img} className="view-btn lightimg" title={i.title}></span>
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