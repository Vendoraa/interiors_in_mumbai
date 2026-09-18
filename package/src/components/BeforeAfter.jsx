import React from 'react';
import { Link } from 'react-router-dom';
import { BEFORE_AFTER } from '../seo/eeat';

const BeforeAfter = () => (
  <section className="section-full content-inner-2 bg-gray">
    <div className="container">
      <div className="section-head style-1 text-center">
        <h6 className="sub-title text-primary">PROOF OF WORK</h6>
        <h2 className="title">Before & After Transformations</h2>
        <p>See how we turn bare shells and outdated homes into functional, beautiful spaces across Mumbai.</p>
      </div>
      <div className="row">
        {BEFORE_AFTER.map((item, i) => (
          <div className="col-lg-4 col-md-6 m-b30" key={i}>
            <div className="before-after-card" style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
              <div className="row g-0">
                <div className="col-6">
                  <img src={item.before} alt={`Before: ${item.title}`} className="w-100" style={{ height: '220px', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div className="col-6">
                  <img src={item.after} alt={`After: ${item.title}`} className="w-100" style={{ height: '220px', objectFit: 'cover' }} loading="lazy" />
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <h4 className="h5 m-b10">{item.title}</h4>
                <p className="m-b0" style={{ fontSize: '14px', color: '#666' }}>{item.text}</p>
                <div className="mt-2" style={{ fontSize: '12px', fontWeight: 600 }}>
                  <span className="text-primary">Left: Before</span> &nbsp;|&nbsp; <span className="text-primary">Right: After</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <Link className="btn btn-primary btn-rounded" to="/portfolio">View Full Portfolio</Link>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
