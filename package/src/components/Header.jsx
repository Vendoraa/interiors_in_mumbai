import React, { useEffect, useReducer } from 'react'
import { IMAGES } from '../constants/theme'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu } from './Menu';
import logo2 from './../assets/images/interiors_in_mumbai_logo.svg';

const reducer = (previousState, updatedState) => ({
    ...previousState,
    ...updatedState,
});
const initialState = {
    activeSubmenu: "",
}

const Header = () => {
    const [open, setOpen] = useState();
    const [headerFix, setheaderFix] = useState(false);
    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setheaderFix(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    // For menu


    const [state, setState] = useReducer(reducer, initialState);
    const handleSubmenuActive = (status) => {
        setState({ activeSubmenu: status })
        if (state.activeSubmenu === status) {
            setState({ activeSubmenu: "" })
        }
    }

    function LogoComponent() {
        const [logoVal, setLogoVal] = useState("");
        useEffect(() => {
            const setLogo = document.querySelector("body").getAttribute('data-primary');
            setLogoVal(setLogo);
        }, []);
        return (
            <Link to="/" aria-label="Home">
                {
                    logoVal === "color-skin-2" ?
                        <img src={logo2} alt="Interiors in Mumbai logo" />
                        :
                        <img src={IMAGES.logo1} alt="Interiors in Mumbai logo" />
                }
            </Link>
        )
    }
    return (
        <>
            <header className="site-header mo-left header style-1" >
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix">
                        <div className="container-fluid clearfix">
                            <div className="logo-header mostion logo-dark">
                                <LogoComponent />
                            </div>
                            <button
                                onClick={() => {
                                    setOpen(!open);
                                }}
                                className={`navbar-toggler collapsed navicon justify-content-end ${!open ? '' : 'open'}`}
                                aria-label="Toggle navigation"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <div className="extra-icon-box">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h6 className="title">Shop 7, Aashirwad Bldg, Mira Road East</h6>
                                    </div>
                                    <div className="extra-icon-box">
                                        <i className="fas fa-phone-alt"></i>
                                        <h6 className="title">+91 998 724 1424</h6>
                                    </div>
                                </div>
                            </div>
                            <div className={`header-nav navbar-collapse collapse justify-content-end ${open ? 'show' : ''}`} id="navbarNavDropdown">
                                <div className="logo-header logo-dark">
                                    <Link to={"/"} aria-label="Home"><img src={IMAGES.logo1} alt="Interiors in Mumbai logo" /></Link>
                                </div>
                                <ul className="nav navbar-nav navbar navbar-left">
                                    {Menu.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={item.to}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        );
                                    })}

                                </ul>
                                <div className="dz-social-icon">
                                    <ul>
                                        <li><Link to={process.env.REACT_APP_FACEBOOK_URL || "https://www.facebook.com/interiorsinmumbai"} target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to={process.env.REACT_APP_INSTAGRAM_URL || "https://www.instagram.com/interiorsinmumbai"} target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link to={process.env.REACT_APP_TWITTER_URL || "https://twitter.com/interiorsinmumbai"} target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to={process.env.REACT_APP_YOUTUBE_URL || "https://www.youtube.com/@interiorsinmumbai"} target="_blank" aria-label="YouTube"><i className="fab fa-youtube"></i></Link></li>
                                        <li><Link to={process.env.REACT_APP_WHATSAPP_URL || "https://wa.me/919987241424?text=Hi,%20I%20am%20contacting%20you%20from%20interiors%20in%20mumbai%20Website."} target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header
