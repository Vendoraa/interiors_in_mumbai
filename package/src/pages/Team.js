import React from 'react';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { buildTeamGraph } from '../seo/schema';
import { TEAM } from '../seo/eeat';

function Team() {
  return (
    <>
      <SEO
        title="Our Team | Interior Designers & Turnkey Experts in Mumbai"
        description="Meet the architects, interior designers, project managers, and site supervisors behind Interiors in Mumbai. 15+ years of combined expertise across 1,200+ Mumbai homes."
        keywords="interior design team, architects mumbai, turnkey project managers, interior designers mumbai, shrishti interiors team"
      />
      <JsonLd data={buildTeamGraph(TEAM)} />
      <div className="page-content bg-white">
        <CommanBanner mainTitle="Our Team" parentTitle="Home" pageName="Team" bgImage={IMAGES.bannerbg3} />
        <section className="section-full content-inner">
          <div className="container">
            <div className="section-head style-1 text-center">
              <h6 className="sub-title text-primary">THE PEOPLE BEHIND THE WORK</h6>
              <h2 className="title">Meet Our Design & Execution Team</h2>
              <p>Experienced professionals who take your project from first sketch to final handover.</p>
            </div>
            <div className="row">
              {
                TEAM.map((item, index) => (
                  <div key={index} className="col-md-6 col-lg-4 m-b30">
                    <div className="card dz-team style-1">
                      <div className="card-media">
                        <img src={item.img} alt={`${item.name}, ${item.role} at Interiors in Mumbai`} loading="lazy" />
                      </div>
                      <div className="card-body">
                        <h5 className="dz-name m-b5">{item.name}</h5>
                        <span className="dz-position">{item.role}</span>
                        <p className="m-b0" style={{ fontSize: '14px', color: '#666' }}>{item.bio}</p>
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
  );
}

export default Team;