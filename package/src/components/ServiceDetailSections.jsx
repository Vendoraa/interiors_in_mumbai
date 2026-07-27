import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/theme';
import SERVICES, { localize } from '../seo/serviceContent';

const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const ServiceDetailSections = ({ serviceKey, location }) => {
  const base = SERVICES[serviceKey];
  if (!base) return null;
  const s = location ? localize(base, location) : base;
  const anchor = s.slug || slugify(serviceKey);
  const faqId = `faq-${anchor}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${anchor}-faq`,
    mainEntity: s.faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="service-detail" id={anchor}>
      <div className="dz-page-text">
        <h2 className="title mb-2">{s.title}</h2>

        <h3 className="h4 mt-4">What is {s.title}?</h3>
        <p>{s.what}</p>

        <h3 className="h4 mt-4">Why do you need {s.title}?</h3>
        <p>{s.whyNeed}</p>

        <h3 className="h4 mt-4">Benefits of {s.title}</h3>
        <ul className="list-check primary">
          {s.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <h3 className="h4 mt-4">Our {s.title} process</h3>
        <ol className="list-ordered">
          {s.process.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ol>

        <div className="row mt-4">
          <div className="col-md-6">
            <h3 className="h4">Cost range</h3>
            <p>{s.costRange}</p>
          </div>
          <div className="col-md-6">
            <h3 className="h4">Timeline</h3>
            <p>{s.timeline}</p>
          </div>
        </div>

        <h3 className="h4 mt-4">Materials we use</h3>
        <ul className="list-check primary">
          {s.materials.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>

        <h3 className="h4 mt-4" id={faqId}>Frequently asked questions</h3>
        <div className="accordion dz-accordion accordion-sm" id={`accordion-${anchor}`}>
          {s.faqs.map((item, i) => {
            const headId = `head-${anchor}-${i}`;
            const bodyId = `body-${anchor}-${i}`;
            const expanded = i === 0;
            return (
              <div className="accordion-item" key={i}>
                <h4 className="accordion-header" id={headId}>
                  <button
                    className={`accordion-button${expanded ? '' : ' collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${bodyId}`}
                    aria-expanded={expanded ? 'true' : 'false'}
                    aria-controls={bodyId}
                  >
                    {item.q}
                  </button>
                </h4>
                <div
                  id={bodyId}
                  className={`accordion-collapse collapse${expanded ? ' show' : ''}`}
                  aria-labelledby={headId}
                  data-bs-parent={`#accordion-${anchor}`}
                >
                  <div className="accordion-body">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="h4 mt-4">Related services</h3>
        <div className="tagcloud">
          {s.related.map((r, i) => (
            <Link key={i} to={`/services?service=${encodeURIComponent(r)}#${slugify(r)}`} className="m-r10">
              {r}
            </Link>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default ServiceDetailSections;
