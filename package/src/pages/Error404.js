import React from 'react'
import { IMAGES } from '../constants/theme'
import CommanBanner from '../elements/CommanBanner'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>

            <div className="page-content bg-white">
                <CommanBanner mainTitle="Error 404" parentTitle="Home" pageName="Error 404" bgImage={IMAGES.bnr1} />

                <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg2})`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <div className="container">
                        <div className="error-page text-center">
                            <div className="dlab_error">404</div>
                            <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                            <Link to={'/'} className="btn btn-primary radius-no btn-rounded"><span className="p-lr15">BACK TO HOMEPAGE</span></Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Error404