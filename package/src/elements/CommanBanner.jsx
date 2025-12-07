import React from 'react'
import { Link } from 'react-router-dom';

const CommanBanner = (props) => {
    return (
        <div className="slidearea bannerside">
            <div className="side-contact-info">
                <ul>
                    <li><i className="fas fa-phone-alt"></i> +91 998 724 1424</li>
                    <li><i className="fas fa-envelope"></i> hello@interiorsinmumbai.com</li>
                </ul>
            </div>
            <div className="dz-bnr-inr style-1 overlay-left"
                style={{ backgroundImage: `url(${props.bgImage})` }}
            >
                <div className="container-fluid">
                    <div className="dz-bnr-inr-entry">
                        <h2>{props.mainTitle}</h2>
                        <nav className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"/"}>{props.parentTitle}</Link></li>
                                <li className="breadcrumb-item">{props.pageName}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommanBanner
