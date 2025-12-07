import React from 'react'
import { Link } from 'react-router-dom'

const BlogGridCard2 = () => {
    return (
        <>
            <div className="col-xl-6 col-lg-6 card-container">
                <div className="dz-card blog-grid style-1 m-b50 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="dz-info">
                        <div className="dz-meta">
                            <ul>
                                <li className="">
                                    <strong>26</strong>
                                    <span>Apr</span>
                                </li>
                                <li className="post-category"><Link>Audio</Link></li>
                                <li className="post-user">By <Link> John Doe</Link>
                                </li>
                            </ul>
                        </div>
                        <h3 className="dz-title"><Link to="/blog-details">“ Praesent pharetra congue sem, nec euismod nisi fermentum sit amet ”</Link></h3>
                        <div className="dz-post-text text">
                            <p>You can align your image to the left, right, or center with Link caption, link and alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop an.</p>
                        </div>
                        <div className="read-more">
                            <Link className="btn btn-primary btn-rounded btn-sm hover-icon">
                                <span>Read More </span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogGridCard2