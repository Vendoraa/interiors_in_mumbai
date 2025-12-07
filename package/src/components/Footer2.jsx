import React from 'react'
import { IMAGES } from '../constants/theme'
import { Link } from 'react-router-dom'

const Footer2 = () => {
	// Fetch the current year dynamically
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className="site-footer style-1" id="footer">

				<div className="container">
					<div className="row">
						<div className="col-lg-5 aos-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
							<div className="footer-bg" style={{ backgroundImage: `url(${IMAGES.footerBgimg})` }}></div>
						</div>
						<div className="col-lg-7">
							<div className="footer-top">
								<div className="row">
									<div className="col-md-12 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
										<div className="footer-logo logo-light">
											<Link to="/" aria-label="Home"><img src={IMAGES.footerLogoImg} alt="Footer Logo" /></Link>
										</div>
									</div>
									<div className="col-md-5 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
										<div className="widget widget_services">
											<h4 className="footer-title">Useful Links</h4>
											<ul>
												<li><Link to="/index">Home</Link></li>
												<li><Link to="/about-us">About Us</Link></li>
												<li><Link to="/services-details">Services</Link></li>
												<li><Link to="/portfolio">Portfolio</Link></li>
												<li><Link to="/blog-grid">Blogs</Link></li>
												<li><Link to="/contact-us">Contact Us</Link></li>
											</ul>
										</div>
									</div>
									<div className="col-md-7 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
										<div className="widget widget_about">
											<h4 className="footer-title">About Us</h4>
											<p>In Mumbai, for over 35 years, we've built a reputation for custom craftsmanship. From dream kitchens to stunning remodels, we bring your vision to life. Contact us today to start your project.</p>
											<h6 style={{ color: 'white' }}>Tel: +91 998 724 1424 </h6>
											<h6 style={{ color: 'white' }}>Email: hello@interiorsinmumbai.com </h6>
											<ul className="social-list style-1">
												<li><Link to="https://www.facebook.com/dexignzone/" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
												<li><Link to="https://www.instagram.com/dexignzone/" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></Link></li>
												<li><Link to="https://twitter.com/dexignzones/" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></Link></li>
												<li><Link to="https://www.youtube.com/@dexignzone1723" target="_blank" aria-label="YouTube"><i className="fab fa-youtube"></i></Link></li>
												<li><Link to="https://wa.me/919987241424?text=Hi,%20I%20am%20contacting%20you%20from%20interiors%20in%20mumbai%20Website." target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-6 text-center text-md-start">
								<span className="copyright-text">Copyright © {currentYear} <Link to="https://interiorsinmumbai.com/" className="text-primary" target="_blank">Interiors in Mumbai</Link> All rights reserved.</span>
							</div>
							<div className="col-md-6 text-center text-md-end">
								<ul className="footer-link d-inline-block">
									<li><Link to="/privacy-policy" >Privacy Policy</Link></li>
									<li><Link>Terms & Condition</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer2
