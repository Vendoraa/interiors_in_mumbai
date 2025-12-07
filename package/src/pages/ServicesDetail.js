import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants/theme';
import CommanBanner from '../elements/CommanBanner';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesDetail = () => {
  const [selectedService, setSelectedService] = useState("Interior Design");
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract the query parameter to set the initial selected service.
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [location]);

  useEffect(() => {
    setIsLoaded(true);
  }, [selectedService]);

  const renderContent = () => {
    switch (selectedService) {
      case "Floor Plan Design":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 0.5 }}>
            <h2 className="title mb-2">Expert Floor Plan Design Services</h2>
            <p>Our floor plan design services ensure your space is used to its fullest potential. We create detailed plans that reflect your lifestyle and needs, making sure every square foot is optimized for both form and function.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic3} className="m-b30 w-100" alt="" />
                <p className="m-b0">Whether you're building a new home or renovating an existing space, our floor plans provide a solid foundation for your project. We consider flow, natural light, and your personal preferences to create a layout that works for you.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic4} className="m-b30 w-100" alt="" />
                <p className="m-b0">Our team collaborates with you to ensure the final design meets all your requirements. From initial sketches to detailed blueprints, we provide comprehensive floor plan services that pave the way for successful construction and remodeling projects.</p>
              </div>
            </div>
          </motion.div>
        );
      case "Custom Furniture":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 0.5 }}>
            <h2 className="title mb-2">Bespoke Custom Furniture</h2>
            <p>Our custom furniture services offer personalized pieces designed to fit your unique style and space. From concept to creation, we ensure each piece meets your exact specifications and enhances your home's aesthetic.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic5} className="m-b30 w-100" alt="" />
                <p className="m-b0">Using high-quality materials and expert craftsmanship, we create furniture that is both beautiful and functional. Let us help you bring your vision to life with pieces that are tailored to your needs.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic6} className="m-b30 w-100" alt="" />
                <p className="m-b0">Whether you're looking for a statement piece or practical storage solutions, our custom furniture designs will transform your home. Contact us to start designing your perfect piece today.</p>
              </div>
            </div>
          </motion.div>
        );
      case "Painting":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 0.5 }}>
            <h2 className="title mb-2">Professional Painting Services</h2>
            <p>Our painting services provide a fresh, vibrant look to your home. Whether you're looking to update a single room or your entire house, our skilled painters deliver high-quality results with attention to detail.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic7} className="m-b30 w-100" alt="" />
                <p className="m-b0">We use premium paints and techniques to ensure a flawless finish. From color consultation to final touch-ups, we handle every step of the process with professionalism and care.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic8} className="m-b30 w-100" alt="" />
                <p className="m-b0">Transform your space with a fresh coat of paint. Our team is dedicated to providing exceptional service and ensuring your complete satisfaction.</p>
              </div>
            </div>
          </motion.div>
        );
      case "Electrical":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 0.5 }}>
            <h2 className="title mb-2">Reliable Electrical Services</h2>
            <p>Our electrical services ensure your home is safe and up to code. From installations to repairs, our experienced electricians provide reliable solutions for all your electrical needs.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic9} className="m-b30 w-100" alt="" />
                <p className="m-b0">We handle everything from lighting design to wiring and maintenance. Trust us to keep your home's electrical systems running smoothly and efficiently.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic10} className="m-b30 w-100" alt="" />
                <p className="m-b0">Safety and quality are our top priorities. Our team is committed to providing electrical services that meet the highest standards of excellence.</p>
              </div>
            </div>
          </motion.div>
        );
      case "Space Saving":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 0.5 }}>
            <h2 className="title mb-2">Innovative Space Saving Solutions</h2>
            <p>Maximize your home's potential with our space-saving solutions. We design and implement strategies that make the most of your available space, creating functional and organized living areas.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic11} className="m-b30 w-100" alt="" />
                <p className="m-b0">From built-in storage to multifunctional furniture, our solutions are tailored to your needs. Let us help you create a home that is both stylish and practical.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic12} className="m-b30 w-100" alt="" />
                <p className="m-b0">Our team works with you to identify the best ways to optimize your space. Whether you're dealing with a small apartment or a large home, we have the expertise to create a more efficient living environment.</p>
              </div>
            </div>
          </motion.div>
        );
      case "Modular Kitchen":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 0.5 }}>
            <h2 className="title mb-2">Modern Modular Kitchen Designs</h2>
            <p>Upgrade your kitchen with our modular kitchen designs. We create stylish, functional kitchens that are customized to fit your space and lifestyle.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic13} className="m-b30 w-100" alt="" />
                <p className="m-b0">Our modular kitchens are designed for efficiency and ease of use. With smart storage solutions and modern appliances, we create kitchens that make cooking and entertaining a joy.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic14} className="m-b30 w-100" alt="" />
                <p className="m-b0">We offer a wide range of styles and finishes to choose from, ensuring your kitchen reflects your personal taste. Contact us today to start designing your dream kitchen.</p>
              </div>
            </div>
          </motion.div>
        );
      case "Interior Design":
      
      default:
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 0.5 }}>
      <h2 className="title mb-2">Transform Your Space with Expert Interior Design</h2>
      <p>Discover the perfect blend of style and functionality. Our expert team specializes in transforming homes into beautiful, personalized spaces. Whether you're looking for a modern makeover or a classic touch, we cater to all your interior design needs.</p>
      <div className="row">
        <div className="col-lg-6">
          <img src={IMAGES.ServicePic1} className="m-b30 w-100" alt="" />
          <p className="m-b0">Our experienced designers work closely with you to bring your vision to life. From selecting the perfect color palette to choosing the right furniture, we ensure every detail is just right.</p>
        </div>
        <div className="col-lg-6">
          <img src={IMAGES.ServicePic2} className="m-b30 w-100" alt="" />
          <p className="m-b0">Quality craftsmanship and attention to detail are at the heart of what we do. We take pride in delivering interiors that not only look stunning but also stand the test of time.</p>
        </div>
      </div>
    </motion.div>
  );
}
};

return (
<>
<div className="page-content bg-white">
<CommanBanner mainTitle="Services" parentTitle="Home" pageName="Service Details" bgImage={IMAGES.bnr5} />
<section className="section-full content-inner-2" style={{ backgroundImage: `url(${IMAGES.ServicesDetailBg2})`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-7 aos-item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
        <div className="service-detail">
          <div className="dz-page-text">
            {renderContent()}
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-5 m-b30 aos-item right" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
        <div className="sticky-top">
          <div className="widget ext-sidebar-menu">
            <ul className="menu">
              <li className={selectedService === "Interior Design" ? "active" : ""}>
                <Link onClick={() => setSelectedService("Interior Design")}>Interior Design</Link>
              </li>
              <li className={selectedService === "Floor Plan Design" ? "active" : ""}>
                <Link onClick={() => setSelectedService("Floor Plan Design")}>Floor Plan Design</Link>
              </li>
              <li className={selectedService === "Custom Furniture" ? "active" : ""}>
                <Link onClick={() => setSelectedService("Custom Furniture")}>Custom Furniture</Link>
              </li>
              <li className={selectedService === "Painting" ? "active" : ""}>
                <Link onClick={() => setSelectedService("Painting")}>Painting</Link>
              </li>
              <li className={selectedService === "Electrical" ? "active" : ""}>
                <Link onClick={() => setSelectedService("Electrical")}>Electrical</Link>
              </li>
              <li className={selectedService === "Space Saving" ? "active" : ""}>
                <Link onClick={() => setSelectedService("Space Saving")}>Space Saving</Link>
              </li>
              <li className={selectedService === "Modular Kitchen" ? "active" : ""}>
                <Link onClick={() => setSelectedService("Modular Kitchen")}>Modular Kitchen</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</>
)
}

export default ServicesDetail;
