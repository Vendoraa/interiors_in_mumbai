import React from 'react'
import { IMAGES } from '../constants/theme'
import { Link } from 'react-router-dom'

const LargeSidebar = () => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 m-b30 dz-order-1">
                <aside className="side-bar sticky-top left">
                    <div className="widget widget_categories">
                        <div className="widget-title">
                            <h4 className="title">Categories</h4>
                            <div className="dz-separator style-1 text-primary mb-0"></div>
                        </div>
                        <ul>
                            <li className="cat-item"><Link>Residence</Link></li>
                            <li className="cat-item"><Link>Beauty</Link></li>
                            <li className="cat-item"><Link>Fashion</Link></li>
                            <li className="cat-item"><Link>Images</Link></li>
                            <li className="cat-item"><Link>Lifestyle</Link></li>
                        </ul>
                    </div>
                    <div className="widget recent-posts-entry">
                        <div className="widget-title">
                            <h4 className="title">Recent Posts</h4>
                            <div className="dz-separator style-1 text-primary mb-0"></div>
                        </div>
                        <div className="widget-post-bx">
                            <div className="widget-post clearfix">
                                <div className="dz-media">
                                    <Link to="/blog-details"><img src={IMAGES.post1} alt="Interior design blog post - recent project" /></Link>
                                </div>
                                <div className="dz-info">
                                    <h4 className="title"><Link to="/blog-details">Fusce mollis felis quis tristique</Link></h4>
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"> 7 March, 2020 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-post clearfix">
                                <div className="dz-media">
                                    <Link to="/blog-details"><img src={IMAGES.post2} alt="Interior design blog post - featured work" /></Link>
                                </div>
                                <div className="dz-info">
                                    <h4 className="title"><Link to="/blog-details">We Completed Our New Hotel Project</Link></h4>
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"> 7 March, 2020 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-post clearfix">
                                <div className="dz-media">
                                    <Link to="/blog-details"><img src={IMAGES.post3} alt="" /></Link>
                                </div>
                                <div className="dz-info">
                                    <h4 className="title"><Link to="/blog-details">We Are Building Global Company Offices</Link></h4>
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"> 7 March, 2020 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-post clearfix">
                                <div className="dz-media">
                                    <Link to="/blog-details"><img src={IMAGES.post4} alt="" /></Link>
                                </div>
                                <div className="dz-info">
                                    <h4 className="title"><Link to="/blog-details">About Our Board of Directors</Link></h4>
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"> 7 March, 2020 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget widget widget_categories">
                        <div className="widget-title">
                            <h4 className="title">Archives</h4>
                            <div className="dz-separator style-1 text-primary mb-0"></div>
                        </div>
                        <ul>
                            <li><Link>January</Link>(3)</li>
                            <li><Link>Fabruary</Link>(4)</li>
                            <li><Link>March</Link>(4)</li>
                            <li><Link>April</Link>(3)</li>
                            <li><Link>May</Link>(4)</li>
                            <li><Link>Jun</Link>(1)</li>
                            <li><Link>July</Link>(4)</li>
                        </ul>
                    </div>
                    <div className="widget widget_tag_cloud">
                        <div className="widget-title">
                            <h4 className="title">Search</h4>
                            <div className="dz-separator style-1 text-primary mb-0"></div>
                        </div>
                        <div className="search-bx">
                            <form role="search" method="post">
                                <div className="input-group">
                                    <input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn btn-primary sharp radius-no"><i className="la la-search scale3"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default LargeSidebar