import React from 'react';
import { Link } from 'react-router-dom';
import {
  STATS,
  CERTIFICATIONS,
  AWARDS,
  SERVICE_AREAS,
  WARRANTY,
  TESTIMONIALS,
  GOOGLE_REVIEW_URL,
} from '../seo/eeat';

export const StatsBand = () => (
  <section className="section-full content-inner-2 bg-gray">
    <div className="container">
      <div className="row text-center">
        {STATS.map((s, i) => (
          <div className="col-6 col-md-3 m-b30" key={i}>
            <div className="counter-bx">
              <h2 className="counter text-primary" style={{ fontSize: '42px', fontWeight: 700 }}>{s.value}</h2>
              <h4 className="m-b0">{s.label}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Certifications = () => (
  <section className="section-full content-inner-2">
    <div className="container">
      <div className="section-head style-1 text-center">
        <h6 className="sub-title text-primary">CREDENTIALS</h6>
        <h2 className="title">Certifications & Memberships</h2>
        <p>We are a registered, certified, and brand-authorised interior contracting firm in Mumbai.</p>
      </div>
      <div className="row">
        {CERTIFICATIONS.map((c, i) => (
          <div className="col-lg-4 col-md-6 m-b30" key={i}>
            <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
              <div className="icon-content">
                <h4 className="dlab-title m-b10">{c.name}</h4>
                <p className="m-b0">{c.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {AWARDS.length > 0 && (
        <div className="mt-4">
          <h3 className="h4 text-center">Awards & Recognition</h3>
          <ul className="list-check primary justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '0 30px' }}>
            {AWARDS.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </section>
);

export const ServiceAreas = () => (
  <section className="section-full content-inner-2 bg-gray">
    <div className="container">
      <div className="section-head style-1 text-center">
        <h6 className="sub-title text-primary">WHERE WE WORK</h6>
        <h2 className="title">Our Service Areas in Mumbai</h2>
        <p>Turnkey interior design and renovation across Mumbai and the suburbs.</p>
      </div>
      <div className="row text-center">
        {SERVICE_AREAS.map((area, i) => (
          <div className="col-6 col-md-3 m-b20" key={i}>
            <span className="tag m-b10" style={{ display: 'inline-block' }}>{area}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Warranty = () => (
  <section className="section-full content-inner-2">
    <div className="container">
      <div className="section-head style-1 text-center">
        <h6 className="sub-title text-primary">PEACE OF MIND</h6>
        <h2 className="title">Warranty & After-Sales Support</h2>
        <p>Every project is backed by a written warranty and dedicated after-sales service.</p>
      </div>
      <div className="row">
        {WARRANTY.map((w, i) => (
          <div className="col-lg-3 col-md-6 m-b30" key={i}>
            <div className="icon-bx-wraper style-3 left p-a30 box-hover w-100">
              <div className="icon-content">
                <h4 className="dlab-title m-b10">{w.title}</h4>
                <p className="m-b0">{w.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Testimonials = ({ limit } = {}) => {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;
  return (
    <section className="section-full content-inner">
      <div className="container">
        <div className="section-head style-1 text-center">
          <h6 className="sub-title text-primary">CLIENT STORIES</h6>
          <h2 className="title">What Our Customers Say</h2>
          <p>Real reviews from homeowners across Mumbai who trusted us with their interiors.</p>
        </div>
        <div className="row">
          {items.map((t, i) => (
            <div className="col-lg-4 col-md-6 m-b30" key={i}>
              <div className="testimonial-1" style={{ background: '#fff', padding: '30px', borderRadius: '8px' }}>
                <div className="testimonial-text">
                  <p>“{t.text}”</p>
                </div>
                <div className="testimonial-detail mt-3">
                  <h4 className="testimonial-name mb-0">{t.name}</h4>
                  <span className="testimonial-position text-primary">{t.area}</span>
                  <div className="mt-1" style={{ color: '#f5b50a' }} aria-label={`Rated ${t.rating} out of 5`}>
                    {'★'.repeat(t.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a className="btn btn-primary btn-rounded" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
            Read our Google Reviews <i className="m-l10 fas fa-star"></i>
          </a>
          <Link className="btn btn-outline-primary btn-rounded m-l10" to="/contact-us">Get a Free Quote</Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
