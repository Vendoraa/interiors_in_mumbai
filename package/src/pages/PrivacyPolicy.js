import React from 'react';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import Faq from '../components/Faq';

const PrivacyPolicy = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CommanBanner mainTitle="Privacy Policy" parentTitle="Home" pageName="Privacy Policy" bgImage={IMAGES.bannerbg3} />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '500', fontSize: '18px', marginBottom: '10px' }}>PRIVACY POLICY</h6>
                            <h2 style={{ fontFamily: 'Merriweather, serif', fontWeight: '700', color: '#333', fontSize: '32px', marginBottom: '20px' }}>Our Commitment to Your Privacy</h2>
                        </div>
                        <div className="privacy-policy-content" style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.8', color: '#555', fontSize: '16px', padding: '0 15px' }}>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Introduction</h3>
                            <p style={{ marginBottom: '15px' }}>This Privacy Policy describes how <span style={{ color: 'green', fontWeight: 'bold' }}>Interiors in Mumbai</span> ("we," "us," or "our") collects, uses, and discloses your personal information when you use our website <span style={{ color: 'green', fontWeight: 'bold' }}>www.interiorsinmumbai.com</span> (the "Site").</p>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Information We Collect</h3>
                            <ul className="bullet-style" style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '15px' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Personal Information:</strong> This may include information that can be used to identify you, such as your name, email address, phone number, and mailing address. We only collect this information when you voluntarily provide it, such as when you contact us through a form or subscribe to our newsletter.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Non-Personal Information:</strong> This may include information that cannot be used to identify you, such as your browser type, operating system, IP address, browsing activity on the Site, and demographic information. We collect this information automatically through cookies and other tracking technologies.</li>
                            </ul>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Use of Information</h3>
                            <ul className="bullet-style" style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '15px' }}>
                                <li style={{ marginBottom: '10px' }}>To provide and improve the Site and our services.</li>
                                <li style={{ marginBottom: '10px' }}>To personalize your experience on the Site.</li>
                                <li style={{ marginBottom: '10px' }}>To respond to your inquiries and requests.</li>
                                <li style={{ marginBottom: '10px' }}>To send you marketing and promotional materials (with your consent).</li>
                                <li style={{ marginBottom: '10px' }}>To analyze how the Site is used.</li>
                            </ul>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Cookie Policy</h3>
                            <p style={{ marginBottom: '15px' }}>Our website uses cookies to enhance your browsing experience and analyze site traffic. This section explains what cookies are, how we use them, and your choices regarding cookies.</p>
                            <h4 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '20px', marginBottom: '12px' }}>What Are Cookies?</h4>
                            <p style={{ marginBottom: '15px' }}>Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help the website remember information about your visit, making it easier to use and more useful to you.</p>
                            <h4 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '20px', marginBottom: '12px' }}>Types of Cookies We Use</h4>
                            <ul className="bullet-style" style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '15px' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Strictly Necessary Cookies:</strong> These cookies are essential for the website to function properly and cannot be disabled. They do not store any personally identifiable information.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Analytics Cookies (Google Analytics):</strong> We use Google Analytics to understand how visitors interact with our website. These cookies collect information about:
                                    <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                                        <li>Pages visited and time spent on each page</li>
                                        <li>Browser type and device information</li>
                                        <li>Geographic location (city/country level)</li>
                                        <li>How you arrived at our site</li>
                                    </ul>
                                    <br />Google Analytics uses cookies like <code>_ga</code> (expires after 2 years) and <code>_gid</code> (expires after 24 hours).
                                </li>
                                <li style={{ marginBottom: '10px' }}><strong>Marketing Cookies (Meta Pixel/Facebook):</strong> We use Meta Pixel to measure the effectiveness of our advertising and show you relevant ads. This cookie (<code>_fbp</code>, expires after 3 months) tracks:
                                    <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                                        <li>Your interactions with our ads on Facebook/Instagram</li>
                                        <li>Conversions and events on our website</li>
                                        <li>Anonymous user behavior for retargeting</li>
                                    </ul>
                                </li>
                            </ul>
                            <h4 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '20px', marginBottom: '12px' }}>Managing Your Cookie Preferences</h4>
                            <p style={{ marginBottom: '15px' }}>You have full control over which cookies you allow:</p>
                            <ul className="bullet-style" style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '15px' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Cookie Banner:</strong> When you first visit our site, you'll see a cookie consent banner. You can choose to "Accept all" or "Reject all" cookies, or click "Manage preferences" to select which types of cookies you want to allow.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, this may affect your ability to use some features of our Site.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Opt-Out Links:</strong>
                                    <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                                        <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>Google Analytics Opt-out Browser Add-on</a></li>
                                        <li>Facebook Ads: <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>Facebook Ad Preferences</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <p style={{ marginBottom: '15px', padding: '12px', backgroundColor: '#f8f9fa', borderLeft: '4px solid #007bff' }}><strong>Note:</strong> Blocking certain cookies may impact your experience on our website and prevent us from providing certain features.</p>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Sharing of Information</h3>
                            <p style={{ marginBottom: '15px' }}>We may share your information with third-party service providers who help us operate the Site and provide our services. These third parties are obligated to keep your information confidential and use it only for the purposes we have disclosed.</p>
                            <p style={{ marginBottom: '15px' }}>We will not share your personal information with any third-party for their own marketing purposes without your consent.</p>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Data Retention</h3>
                            <p style={{ marginBottom: '15px' }}>We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy. We may also retain your information for legal and compliance purposes.</p>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Your Rights</h3>
                            <ul className="bullet-style" style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '15px' }}>
                                <li style={{ marginBottom: '10px' }}>The right to access your personal information.</li>
                                <li style={{ marginBottom: '10px' }}>The right to rectify any inaccurate personal information.</li>
                                <li style={{ marginBottom: '10px' }}>The right to request the deletion of your personal information.</li>
                                <li style={{ marginBottom: '10px' }}>The right to opt-out of receiving marketing communications from us.</li>
                            </ul>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Security</h3>
                            <p style={{ marginBottom: '15px' }}>We take reasonable steps to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is 100% secure.</p>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Children's Privacy</h3>
                            <p style={{ marginBottom: '15px' }}>Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us. We will take steps to remove the information from our servers.</p>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Changes to this Privacy Policy</h3>
                            <p style={{ marginBottom: '15px' }}>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Site.</p>
                            <h3 style={{ fontFamily: 'Merriweather, serif', fontWeight: '600', color: '#222', fontSize: '24px', marginBottom: '15px' }}>Contact Us</h3>
                            <p style={{ marginBottom: '15px' }}>If you have any questions about this Privacy Policy, please contact us at <a href="https://www.interiorsinmumbai.com" style={{ color: '#007bff', textDecoration: 'none' }}>www.interiorsinmumbai.com</a>.</p>
                        </div>
                    </div>
                </section>
                <section className="section-full content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg1})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <Faq />
                </section>
            </div>
        </>
    )
}
export default PrivacyPolicy;
