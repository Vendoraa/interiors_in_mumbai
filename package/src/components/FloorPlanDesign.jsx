import React, { useState } from 'react'
import { IMAGES } from '../constants/theme'
import CommanBanner from '../elements/CommanBanner'
import Brand from '../components/Brand'
import Testimonial2 from '../components/Testimonial2'
import { Link } from 'react-router-dom'

const ServicesDetail = () => {
  const [selectedService, setSelectedService] = useState("Interior Design");

  const renderContent = () => {
    switch (selectedService) {
      case "Floor Plan Design":
        return (
          <>
            <h2 className="title mb-2">Floor Plan Design</h2>
            <p>We redraw your flat's layout before any work starts. That means checking wall positions, door swings, plumbing lines and window light, then working out where the bed, wardrobe and kitchen units will actually fit.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic3} className="m-b30  w-100" alt="Floor plan layout drawing for a Mumbai apartment"/>
                <p className="m-b0">For new flats we work from the builder's plan. For older homes we measure on site, because Mumbai buildings rarely match the original drawing. You get a scaled plan you can hand to any contractor.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic4} className="m-b30 w-100" alt="Detailed floor plan blueprint with furniture layout"/>
                <p className="m-b0">We usually share two or three layout options so you can compare storage against open space. Most clients finalise the plan in one or two rounds of changes.</p>
              </div>
            </div>
          </>
        );
      case "Custom Furniture":
        return (
          <>
            <h2 className="title mb-2">Custom Furniture</h2>
            <p>Wardrobes, beds, TV units, study tables and storage benches built to your wall sizes. Nothing is bought off a catalogue and cut down to fit.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic5} className="m-b30  w-100" alt="Custom wardrobe and storage unit built for a Mumbai flat"/>
                <p className="m-b0">We use BWP or BWR plywood for wet areas and MR plywood elsewhere, with Hettich or Hafele hinges and channels. Laminate, acrylic or PU finish, whichever suits your budget.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic6} className="m-b30 w-100" alt="Handcrafted custom furniture with soft-close fittings"/>
                <p className="m-b0">Carpentry is done at our Mira Road workshop and assembled at your site, so there is less dust and noise in your building. A standard 2BHK set takes about 4 to 6 weeks.</p>
              </div>
            </div>
          </>
        );
      case "Painting":
        return (
          <>
            <h2 className="title mb-2">Painting</h2>
            <p>Interior and exterior painting for flats, bungalows and shops. We do the putty, primer and two coats properly instead of skipping steps to finish faster.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic7} className="m-b30  w-100" alt="Interior wall painting in a Mumbai apartment"/>
                <p className="m-b0">We use Asian Paints, Berger or Nerolac, and you can pick from their shade cards at our office. Furniture and flooring are covered with plastic sheets before we start.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic8} className="m-b30 w-100" alt="Freshly painted living room wall"/>
                <p className="m-b0">A 2BHK interior repaint usually takes 5 to 7 days. We work around your society's permitted hours and clear the debris when we leave.</p>
              </div>
            </div>
          </>
        );
      case "Electrical":
        return (
          <>
            <h2 className="title mb-2">Electrical</h2>
            <p>Wiring, rewiring, lighting points and switchboard work for homes and offices. All work is done by licensed electricians.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic9} className="m-b30  w-100" alt="Electrical wiring and switchboard installation"/>
                <p className="m-b0">We use Polycab or Finolex wire and Legrand, Schneider or Anchor switches. Concealed conduit work is done before plastering so nothing is left exposed.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic10} className="m-b30 w-100" alt="Ceiling light and wiring setup in a flat"/>
                <p className="m-b0">MCB and ELCB protection is included as standard. If you are renovating an old flat, we check the existing load before adding AC or geyser points.</p>
              </div>
            </div>
          </>
        );
      case "Space Saving":
        return (
          <>
            <h2 className="title mb-2">Space Saving</h2>
            <p>Most Mumbai flats lose usable space to bad planning, not to small size. We look at your layout and find the storage that is already there but unused.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic11} className="m-b30  w-100" alt="Loft storage and space saving unit in a small flat"/>
                <p className="m-b0">Common fixes: loft storage above doorways, a bed with drawers underneath, a fold-down study table, and a wardrobe that runs floor to ceiling instead of stopping short.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic12} className="m-b30 w-100" alt="Multi-purpose furniture layout for a compact home"/>
                <p className="m-b0">We plan this at the drawing stage, so the extra storage does not eat into your walking space or block windows.</p>
              </div>
            </div>
          </>
        );
      case "Modular Kitchen":
        return (
          <>
            <h2 className="title mb-2">Modular Kitchen</h2>
            <p>L-shape, U-shape, parallel and straight kitchens built to your kitchen's actual measurements. We plan the work triangle first, then the shutters and storage.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic13} className="m-b30  w-100" alt="L-shape modular kitchen with granite counter"/>
                <p className="m-b0">BWP plywood carcass, soft-close Hettich or Hafele hardware, and a granite or quartz counter. Tall units, corner carousels and cutlery trays are included where they fit.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic14} className="m-b30 w-100" alt="Modular kitchen with tall unit and drawer storage"/>
                <p className="m-b0">Shutter options include laminate, acrylic, PU and membrane. A standard kitchen is installed in 3 to 5 weeks, and we handle the plumbing and electrical points too.</p>
              </div>
            </div>
          </>
        );
      case "Interior Design":
      default:
        return (
          <>
            <h2 className="title mb-2">Interior Design</h2>
            <p>Full home interiors from the first site visit to final handover. You get a layout plan, 3D views and a fixed quote before any material is ordered.</p>
            <div className="row">
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic1} className="m-b30  w-100" alt="Living room interior designed for a Mumbai apartment"/>
                <p className="m-b0">We handle false ceiling, flooring, painting, carpentry, electrical and plumbing under one contract. One project manager stays with you from start to finish.</p>
              </div>
              <div className="col-lg-6">
                <img src={IMAGES.ServicePic2} className="m-b30 w-100" alt="Finished bedroom interior with custom wardrobe"/>
                <p className="m-b0">A 2BHK turnkey project typically takes 8 to 12 weeks. Civil and carpentry work carries a 10-year written warranty.</p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
  <>
      <div className="page-content bg-white">
      <CommanBanner mainTitle="Service Details" parentTitle="Home" pageName="Service Details" bgImage={IMAGES.bnr5} />
      <section className="section-full content-inner-2" style={{backgroundImage:`url(${IMAGES.ServicesDetailBg2})`, backgroundPosition:'right bottom', backgroundSize:'100%', backgroundRepeat:'no-repeat'}}>
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

export default ServicesDetail
