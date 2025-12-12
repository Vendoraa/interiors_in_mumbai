import React from 'react';
import { Link } from 'react-router-dom';

const FloatingWhatsApp = () => {
    const phoneNumber = "919987241424";
    const message = encodeURIComponent("Hi, I am contacting you from interiors in mumbai Website.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="floating-whatsapp">
            <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-btn shadow-lg" aria-label="Chat on WhatsApp">
                <svg viewBox="0 0 24 24" className="whatsapp-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382C17.194 14.245 15.826 13.575 15.569 13.481C15.312 13.387 15.124 13.34 14.936 13.621C14.748 13.903 14.215 14.532 14.043 14.72C13.872 14.908 13.701 14.931 13.423 14.794C13.145 14.657 12.247 14.366 11.182 13.422C10.342 12.677 9.775 11.758 9.603 11.477C9.432 11.195 9.585 11.037 9.724 10.899C9.849 10.775 10.003 10.575 10.14 10.412C10.277 10.248 10.329 10.131 10.415 9.944C10.501 9.756 10.458 9.592 10.389 9.452C10.321 9.311 9.772 7.976 9.55 7.414C9.327 6.875 9.105 6.945 8.934 6.945C8.78 6.945 8.608 6.945 8.437 6.945C8.265 6.945 7.974 7.004 7.717 7.285C7.46 7.566 6.723 8.246 6.723 9.628C6.723 11.01 7.734 12.346 7.871 12.533C8.009 12.721 9.843 15.524 12.637 16.721C13.322 17.015 13.854 17.19 14.269 17.321C14.997 17.551 15.669 17.519 16.202 17.44C16.797 17.351 18.031 16.695 18.288 15.969C18.545 15.242 18.545 14.633 18.46 14.492C18.374 14.352 18.168 14.265 17.89 14.128H17.472Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.009 0C5.385 0 0 5.373 0 11.983C0 14.629 0.864 17.07 2.344 19.068L0.803 24L5.96 22.666C7.79 23.655 9.858 24.175 11.999 24.175H12.004C18.623 24.175 24 18.802 24 12.192C24 5.483 18.618 0 12.009 0ZM12.004 22.169H11.999C10.106 22.169 8.247 21.662 6.626 20.706L6.241 20.479L3.181 21.27L3.998 18.299L3.75 17.907C2.709 16.262 2.16 14.354 2.16 12.396C2.16 6.974 6.577 2.564 12.009 2.564C17.441 2.564 21.858 6.974 21.858 12.396C21.858 17.818 17.436 22.169 12.004 22.169Z" fill="white" />
                </svg>
            </Link>
            <style>{`
                .floating-whatsapp {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    z-index: 9999;
                }
                .whatsapp-btn {
                    width: 65px;
                    height: 65px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    animation: bounce 2s infinite;
                    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
                }
                .whatsapp-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
                    animation: none;
                }
                .whatsapp-icon {
                    width: 38px;
                    height: 38px;
                    fill: white;
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-10px);}
                    60% {transform: translateY(-5px);}
                }
            `}</style>
        </div>
    );
};

export default FloatingWhatsApp;
