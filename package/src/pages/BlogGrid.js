import React, { useState, useEffect } from 'react'
import CommanBanner from '../elements/CommanBanner'
import { IMAGES } from '../constants/theme'
import { useContentful } from '../useContentful';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { buildArticle, SITE_URL } from '../seo/schema';
import { Link } from 'react-router-dom';

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getEntries } = useContentful();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getEntries('blogPost', { order: '-sys.createdAt' });
        if (response && response.items) {
          setBlogs(response.items);
        } else {
          setError('No blog posts found');
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [getEntries]);

  // Format date from Contentful timestamp
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' })
    };
  };

  // Helper to create SEO-friendly slugs
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  return (
    <>
      <SEO
        title="Blog | Interior Design Ideas & Tips"
        description="Interior design blog by Interiors in Mumbai - home renovation tips, modular kitchen ideas, Vastu guidance, and Mumbai interior decor trends from expert designers."
        keywords="interior design blog, home renovation ideas, decor trends mumbai, interior decorator blog, modular kitchen tips"
      />
      {blogs.length > 0 && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: blogs.map((blog, index) => {
              const { fields, sys } = blog;
              const imageUrl = fields.featuredImage?.fields?.file?.url
                ? `https:${fields.featuredImage.fields.file.url}`
                : IMAGES.blogGridPic1;
              const slug = fields.slug || createSlug(fields.title || '');
              const linkUrl = slug ? `/blog-details/${slug}` : `/blog-details/${sys.id}`;
              return {
                '@type': 'ListItem',
                position: index + 1,
                url: `${SITE_URL}${linkUrl}`,
                item: buildArticle({
                  headline: fields.title,
                  description: fields.excerpt || fields.content?.substring(0, 120) + '...',
                  image: imageUrl,
                  datePublished: sys.createdAt,
                  url: `${SITE_URL}${linkUrl}`,
                }),
              };
            }),
          }}
        />
      )}
      <CommanBanner mainTitle="Blog" parentTitle="Home" pageName="Blog" bgImage={IMAGES.bnr1} />
      <div className="page-content bg-white">
        <div className="content-inner">
          <div className="container">
            {loading ? (
              <div className="text-center p-4">
                <h3>Loading blog posts...</h3>
              </div>
            ) : error ? (
              <div className="alert alert-danger text-center">
                {error}
              </div>
            ) : (
              <>
                <div className="row" id="masonry">
                  {/* Contentful blog posts */}
                  {!loading && blogs.length > 0 ? (
                    blogs.map((blog, index) => {
                      const { fields, sys } = blog;
                      const imageUrl = fields.featuredImage?.fields?.file?.url ?
                        `https:${fields.featuredImage.fields.file.url}` :
                        IMAGES.blogGridPic1;
                      const dateInfo = formatDate(sys.createdAt);

                      // Use existing slug or create one from title
                      const slug = fields.slug || createSlug(fields.title || '');
                      // Fallback to ID if no title/slug (rare)
                      const linkUrl = slug ? `/blog-details/${slug}` : `/blog-details/${sys.id}`;

                      return (
                        <div key={sys.id} className="col-xl-6 col-lg-6 card-container">
                          <div className="dz-card blog-grid style-1 m-b50 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={200 * (index % 3)}>
                            <div className="dz-media">
                              <Link to={linkUrl}>
                                <img src={imageUrl} alt={fields.title || "Blog post"} />
                              </Link>
                            </div>
                            <div className="dz-info">
                              <div className="dz-meta">
                                <ul>
                                  <li className="post-date">
                                    <strong>{dateInfo.day}</strong>
                                    <span>{dateInfo.month}</span>
                                  </li>
                                  {fields.category && (
                                    <li className="post-category">
                                      <Link rel="category tag">{fields.category}</Link>
                                    </li>
                                  )}
                                </ul>
                              </div>
                              <h3 className="dz-title">
                                <Link to={linkUrl}>{fields.title}</Link>
                              </h3>
                              <div className="dz-post-text text">
                                <p>{fields.excerpt || fields.content?.substring(0, 120) + "..."}</p>
                              </div>
                              <div className="read-more">
                                <Link to={linkUrl} className="btn btn-primary btn-rounded btn-sm hover-icon">
                                  <span>Read More </span>
                                  <i className="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-12 text-center">
                      <p>No blog posts available at the moment.</p>
                    </div>
                  )}
                </div>

                {/* Pagination - can be updated to work with Contentful pagination */}
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                    <nav aria-label="Blog Pagination">
                      <ul className="pagination text-center m-b30">
                        <li className="page-item"><Link className="page-link prev"><i className="la la-angle-left"></i></Link></li>
                        <li className="page-item"><Link className="page-link active">1</Link></li>
                        <li className="page-item"><Link className="page-link">2</Link></li>
                        <li className="page-item"><Link className="page-link">3</Link></li>
                        <li className="page-item"><Link className="page-link next"><i className="la la-angle-right"></i></Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogGrid