import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import SEO from '../components/SEO';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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

    setIsSubmitting(true);
    setFormStatus('Sending your message...');

    try {
      // Prepare EmailJS template parameters
      const templateParams = {
        from_name: `${formData.dzFirstName} ${formData.dzLastName}`,
        user_email: formData.dzEmail,
        phone_number: formData.dzPhoneNumber,
        subject: formData.dzOther,
        message: formData.dzMessage,
        submission_time: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'short'
        })
      };

      // Send email using EmailJS
      // IMPORTANT: Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_8f5xwpr',        // Replace with your Service ID
        'template_etleu4e',       // Replace with your Template ID
        templateParams,
        'lY5qAXLbSM__HqB2l'         // Replace with your Public Key
      );

      setFormStatus('✅ Thank you for getting in touch! We will respond shortly.');
      setFormSubmitted(true);

      // Clear form
      setFormData({
        dzFirstName: '',
        dzLastName: '',
        dzEmail: '',
        dzPhoneNumber: '',
        dzOther: '',
        dzMessage: ''
      });

      // Reset reCAPTCHA
      setCaptchaValue(null);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('❌ Error submitting the form. Please try emailing us directly at hello@interiorsinmumbai.com');
    } finally {
      setIsSubmitting(false);
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

              {formSubmitted ? (
                // Thank You Message
                <div className="text-center" style={{ padding: '60px 20px' }}>
                  <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                    padding: '50px 30px',
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(37, 99, 235, 0.1)'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 30px',
                      fontSize: '40px'
                    }}>
                      ✓
                    </div>
                    <h3 style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '20px',
                      fontFamily: 'Merriweather, serif'
                    }}>
                      Thank You!
                    </h3>
                    <p style={{
                      fontSize: '18px',
                      color: '#475569',
                      marginBottom: '10px',
                      lineHeight: '1.6'
                    }}>
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <p style={{
                      fontSize: '16px',
                      color: '#64748b',
                      marginBottom: '30px'
                    }}>
                    </p>
                    <div style={{ marginTop: '40px' }}>
                      <Link
                        to="/"
                        className="btn btn-primary btn-rounded"
                        style={{ marginRight: '10px' }}
                      >
                        Back to Home <i className="m-l10 fas fa-home"></i>
                      </Link>
                      <Link
                        to="/portfolio"
                        className="btn btn-outline-primary btn-rounded"
                      >
                        View Our Work <i className="m-l10 fas fa-images"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                // Contact Form
                <form className="dz-form dzForm contact-bx" onSubmit={handleSubmit}>
                  <div className={`dzFormMsg ${formStatus.includes('✅') ? 'text-success' : formStatus.includes('❌') ? 'text-danger' : ''}`} style={{ minHeight: '30px', fontWeight: '500', fontSize: '16px', marginBottom: '20px' }}>
                    {formStatus}
                  </div>
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                      <button
                        type="submit"
                        className="btn btn-primary btn-rounded"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'SENDING...' : 'SUBMIT'} <i className="m-l10 fas fa-caret-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContectUs;
