import React, { useState } from 'react';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const cards = [
  { id: '01', icon: "flaticon-telephone", title: "Text Now", detail: "+91 998 724 1424,", detail2: "+91 836 965 8010" },
  { id: '02', icon: "flaticon-email", title: "Email", detail: "hello@interiorsinmumbai.com," },
  { id: '03', icon: "flaticon-placeholder", title: "Location", detail: "Shop 7, Aashirwad Bldg,", detail2: "Mira Road East, Mumbai" },
]

const ContectUs = () => {
  const [formData, setFormData] = useState({
    dzFirstName: '',
    dzLastName: '',
    dzEmail: '',
    dzPhoneNumber: '',
    dzOther: '',
    dzMessage: ''
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setFormStatus('Please complete the CAPTCHA.');
      return;
    }

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.status === 200) {
        setFormStatus('Thank you for getting in touch! We will respond shortly.');
        setFormData({
          dzFirstName: '',
          dzLastName: '',
          dzEmail: '',
          dzPhoneNumber: '',
          dzOther: '',
          dzMessage: ''
        });
      } else {
        setFormStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setFormStatus('Error submitting the form. Please try again later.');
    }
  };

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <>
      <SEO
        title="Contact Us | Get Your Free Interior Design Consultation"
        description="Get in touch with Interiors in Mumbai for your next interior design project. Contact us for appointments, quotes, and consultations."
        keywords="Contact Interior Designers Mumbai, Interior Design Consultation, Book Appointment, Interiors in Mumbai Contact, Office Location"
      />
      <div className="page-content bg-white">
        <CommanBanner mainTitle="Contact Us" parentTitle="Home" pageName="Contact Us" bgImage={IMAGES.bnr2} />
        <section className="content-inner">
          <div className="container">
            <div className="row">
              {
                cards.map((i) => (
                  <div key={i.id} className="col-lg-4 col-md-12 m-b30 aos-item">
                    <div className="icon-bx-wraper style-8 bg-white" data-name={i.id}>
                      <div className="icon-md m-r20">
                        <span className="icon-cell text-primary"><i className={i.icon}></i></span>
                      </div>
                      <div className="icon-content">
                        <h4 className="tilte m-b10">{i.title}</h4>
                        <p className="m-b0">{i.detail}<br />{i.detail2}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        <section className="content-inner-1 pt-0">
          <div className="map-iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.731080445125!2d72.8679797747259!3d19.294057345091755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b040bdb92279%3A0x4e768a3c2acf50a!2sCinemax%20Rd!5e0!3m2!1sen!2sus!4v1711261820644!5m2!1sen!2sus" className="align-self-stretch radius-sm" style={{ border: 0, width: '100%', minHeight: '100%' }} allowFullScreen title="Google Map Location"></iframe>
          </div>
          <div className="container">
            <div className="contact-area aos-item">
              <div className="section-head style-1 text-center">
                <h6 className="sub-title text-primary">Contact Us</h6>
                <h2 className="title">Get In Touch With Us</h2>
              </div>
              <form className="dz-form dzForm contact-bx" onSubmit={handleSubmit}>
                <div className="dzFormMsg">{formStatus}</div>
                <div className="row sp10">
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="dzFirstName"
                        placeholder="First Name"
                        value={formData.dzFirstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="dzLastName"
                        placeholder="Last Name"
                        value={formData.dzLastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        required
                        name="dzEmail"
                        placeholder="Email"
                        value={formData.dzEmail}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="dzPhoneNumber"
                        placeholder="Phone No."
                        value={formData.dzPhoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="dzOther"
                        placeholder="Subject"
                        value={formData.dzOther}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <textarea
                        name="dzMessage"
                        rows="5"
                        className="form-control"
                        placeholder="Message"
                        value={formData.dzMessage}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <ReCAPTCHA
                      sitekey="6LftpxUrAAAAALKd87FzA7HSmLYUIvl-EtyJzo7B"
                      onChange={onCaptchaChange}
                    />
                  </div>
                  <div className="col-sm-12 text-center">
                    <button name="submit" className="btn btn-primary btn-rounded">
                      SUBMIT <i className="m-l10 fas fa-caret-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContectUs;
