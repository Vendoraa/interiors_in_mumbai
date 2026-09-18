import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants/theme';
import CommanBanner from '../elements/CommanBanner';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { buildService } from '../seo/schema';
import ServiceDetailSections from '../components/ServiceDetailSections';
import SERVICES, { SERVICE_ORDER } from '../seo/serviceContent';

const ServicesDetail = () => {
  const [selectedService, setSelectedService] = useState("Interior Design");

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service && SERVICES[service]) {
      setSelectedService(service);
      const slug = SERVICES[service].slug;
      setTimeout(() => {
        const el = document.getElementById(slug);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  const meta = SERVICES[selectedService] || SERVICES["Interior Design"];
  const serviceSchema = buildService({
    name: selectedService,
    description: meta.what,
    serviceType: 'Interior Design & Turnkey Contracting',
    url: window.location.href,
  });

  return (
    <>
      <SEO
        title={`${selectedService} Services in Mumbai`}
        description={meta.what}
        keywords={`${selectedService} Mumbai, ${selectedService.toLowerCase()} services, interior contractors mumbai`}
      />
      <JsonLd data={serviceSchema} />
      <div className="page-content bg-white">
        <CommanBanner mainTitle={selectedService} parentTitle="Home" pageName="Service Details" bgImage={IMAGES.bannerbg3} />
        <section className="section-full content-inner-2" style={{ backgroundImage: `url(${IMAGES.ServicesDetailBg2})`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7 aos-item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
                {SERVICE_ORDER.map((key) => (
                  <ServiceDetailSections key={key} serviceKey={key} />
                ))}
              </div>
              <div className="col-lg-4 col-md-5 m-b30 aos-item right" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                <div className="sticky-top">
                  <div className="widget ext-sidebar-menu">
                    <ul className="menu">
                      {SERVICE_ORDER.map((key) => (
                        <li key={key} className={selectedService === key ? "active" : ""}>
                          <Link to={`/services?service=${encodeURIComponent(key)}#${SERVICES[key].slug}`}>{key}</Link>
                        </li>
                      ))}
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
