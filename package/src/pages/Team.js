import React from "react";
import CommanBanner from "../elements/CommanBanner";
import { IMAGES } from "../constants/theme";
import { Link } from "react-router-dom";



const teamCard = [
    { teamImg: IMAGES.team1, name: "Engineer", skill: "Engineer" },
    { teamImg: IMAGES.team2, name: "Lindsey Botosh", skill: "Manager Effiect" },
    { teamImg: IMAGES.team3, name: "Kaylynn Donin", skill: "CEO Factory" },
    { teamImg: IMAGES.team4, name: "Jakob Bothman", skill: "Sinior architect" },
    { teamImg: IMAGES.team5, name: "Phillip Schleifer", skill: "Co-Founder" },
    { teamImg: IMAGES.team6, name: "Lindsey Botosh", skill: "Architect" },
]

function Team(){
    return (
        <>
            <div className="page-content bg-white">
                <CommanBanner mainTitle="Team" parentTitle="Home" pageName="Team" bgImage={IMAGES.bannerbg4} />
                <section className="section-full content-inner">
                    <div className="container">
                        <div className="row">
                            {
                                teamCard.map((item, index) => (
                                    <div key={index} className="col-md-6 col-lg-4 m-b30">
                                        <div className="card dz-team style-1">
                                            <div className="card-media">
                                                <img src={item.teamImg} alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="dz-name m-b5"><Link to={"#"}>{item.name}</Link></h5>
                                                <span className="dz-position">{item.skill}</span>
                                                <ul className="dz-social">
                                                    <li><Link to={"#"}><i className="fab fa-skype"></i></Link></li>
                                                    <li><Link to={"#"}><i className="fab fa-facebook"></i></Link></li>
                                                    <li><Link to={"#"}><i className="fab fa-google-plus"></i></Link></li>
                                                    <li><Link to={"#"}><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link to={"#"}><i className="fab fa-youtube"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


export default Team;