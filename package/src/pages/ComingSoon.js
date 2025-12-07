import React, { useState , useRef} from 'react'
import { IMAGES } from '../constants/theme';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';


const ComingSoon = () => {
  const [addfade, setAddfade] = useState(false);
  const [getIn, setGetIn] = useState(false);
  const d = new Date();
    
  const [timerDays, setTimerDays] = useState('00');	
	const [timerHours, setTimerHours] = useState('00');	
	const [timerMinutes, setTimerMinutes] = useState('00');	
	const [timerSeconds, setTimerSeconds] = useState('00');	
	let interval = useRef();
	
	const startTimer = () =>{
	
		var WebsiteLaunchDate = new Date();
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
		WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();
		
	
		const countdownDate = new Date(WebsiteLaunchDate +' 23:5').getTime();	
		interval = setInterval(()=>{
			const now = new Date().getTime();
			const distance = countdownDate - now;
			const days = Math.floor(distance / (1000*60*60*24));
			const hours = Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
			const minutes = Math.floor((distance % (1000*60*60)/(1000*60)));
			const seconds = Math.floor((distance % (1000*60))/1000);
			
			if(distance < 0){				
				clearInterval(interval.current);
			} else {				
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}	
		},1000);
	};
	
	//componentDidMount
 	useEffect(()=>{
		startTimer();
		return()=>{
			clearInterval(interval.current);
		};
	});


  return (
    <>

      <div className="page-wraper bg-white">
        <div className="dz-coming-soon style-4">
          <div className="sidenav-menu">
            <div className="logo">
              <Link to="/"><img src={IMAGES.comingsoonIcon} alt="" /></Link>
            </div>
            <ul className="dz-social-icon">
              <li><Link><span>Facebook</span></Link></li>
              <li><Link><span>Twitter</span></Link></li>
              <li><Link><span>Linkedin</span></Link></li>
            </ul>
          </div>
          <div className="clearfix dz-coming-bx">
            <div className="dz-content">
              <h2 className="dz-title ml2"><span>We Are Doing Great,</span><br></br><span>Almost Done...</span></h2>
              <div className="countdown">
                <div className="date">
                  <span className="days time">{timerDays}</span>
                  <span>Days</span>
                </div>
                <div className="date">
                  <span className="hours time">{timerHours}</span>
                  <span>Hours</span>
                </div>
                <div className="date">
                  <span className="mins time">{timerMinutes}</span>
                  <span>Minutes</span>
                </div>
                <div className="date">
                  <span className="secs time">{timerSeconds}</span>
                  <span>Second</span>
                </div>
              </div>
              <div className="dz-coming-btn" style={{ zIndex: 99 }}>
                <Link to={"#"} className="btn btn-primary openbtn m-r10 black btn-rounded" onClick={()=>setGetIn(true)}>GET IN TOUCH</Link>
                <button onClick={() => { setAddfade(true)}} data-bs-target="#exampleModal" className="btn btn-secondary btn-rounded" >SUBSCRIBE NOW</button>
              </div>
            </div>
          </div>
          <div className="slider-box">
            <img src={IMAGES.bg8} alt="" />
          </div>
        </div>
        <div className={`contact-sidebar ${getIn ? 'active' : ''}`}>
          <div className="contact-box">
              <div className="logo-contact logo-dark">
                  <Link to="/"><img src={IMAGES.logo1} alt="" /></Link>
              </div>
            <div className="m-b50 contact-text">
              <div className="dz-title">
                <h4>About US</h4>
                <div className="dz-separator style-1 text-primary mb-0"></div>
              </div>
              <p>Aliquam erat volutpat. Nunc erat massa, porttitor vel egestas sit amet, tristique at massa. Donec posuere odio neque, in ultricies lorem aliquet eu. Donec venenatis libero Link nulla placerat egestas.</p>
              <Link to="/about-us" className="btn btn-primary btn-sm btn-rounded">READ MORE</Link>
            </div>
            <div className="dz-title">
              <h4>Contact Info</h4>
              <div className="dz-separator style-1 text-primary mb-0"></div>
            </div>
            <div className="icon-bx-wraper left">
              <div className="icon-md m-r20">
                <span className="icon-cell"><i className="las la-phone-volume"></i></span>
              </div>
              <div className="icon-content">
                <h5 className="tilte">Call Now</h5>
                <p className="m-b0">+91 123 456 7890,<br></br> +91 987 654 3210</p>
              </div>
            </div>
            <div className="icon-bx-wraper left">
              <div className="icon-md m-r20">
                <span className="icon-cell"><i className="las la-envelope-open"></i></span>
              </div>
              <div className="icon-content">
                <h5 className="tilte">Location</h5>
                <p className="m-b0">info@gmail.com, services@gmail.com</p>
              </div>
            </div>
            <div className="icon-bx-wraper left">
              <div className="icon-md m-r20">
                <span className="icon-cell"><i className="las la-map-marker"></i></span>
              </div>
              <div className="icon-content">
                <h5 className="tilte">Email Now</h5>
                <p className="m-b0">15/B Miranda House, New York, US</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-close" onClick={()=>setGetIn(false)}></div>       
        <Modal className={`inquiry-modal `} show={addfade} onHide={setAddfade} centered>        
            <div className="inquiry-adv">
              <img src={IMAGES.modal} alt="" />
            </div>
            <div className="contact-modal">
              <div className="modal-header">
                <i className="flaticon-email"></i>
                <h5 className="modal-title" id="exampleModalLongTitle">SUBSCRIBE TO OUR NEWSLATTER</h5>
                <button onClick={() => { setAddfade(false)}}  className="btn-close" >&times;</button>
              </div>
              <div className="modal-body">                
                <form  className="dzForm">
                  <div className="form-group mb-3">
                    <input type="text" name="dzName" required className="form-control" placeholder="YOUR NAME" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="email" name="dzEmail" required className="form-control" placeholder="YOUR EMAIL ADDRESS" />
                  </div>
                  <div className="form-group text-center">
                    <button name="submit" type="submit" className="btn btn-primary btn-rounded">SUBSCRIBE NOW</button>
                  </div>
                </form>
              </div>
            </div>
           
        </Modal>

      </div>
    </>
  )
}

export default ComingSoon