import React from 'react'
import { IMAGES } from '../constants/theme'
import { Link } from 'react-router-dom'

const Construction = () => {
  return (
  <>
      <div className="page-wraper">
        <div className="under-construct">
          <div className="inner-box">
            <div className="logo-header logo-dark">
              <Link to={'/'}><img src={IMAGES.logo1} alt=""/></Link>
            </div>
            <div className="dz-content">
              <h2 className="dz-title">SITE IS DOWN <br/>FOR <span className="text-primary">MAINTENANCE</span></h2>
              <p>This is the Technical Problems Page.<br/> Or any other page.</p>
            </div>
          </div>
        </div>
      </div>	
  </>
  )
}

export default Construction