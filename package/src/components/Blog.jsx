import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants/theme';
import { useContentful } from '../useContentful';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getEntries } = useContentful();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Use the useContentful hook instead of direct fetch
        const response = await getEntries('blogPost', { order: '-sys.createdAt', limit: 3 });

        // Helper to create SEO-friendly slugs
        const createSlug = (title) => {
          return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        };

        if (response && response.items) {
          const blogPosts = response.items.map((item) => {
            const { sys, fields } = item;
            const slug = fields.slug || createSlug(fields.title || '');

            return {
              id: sys.id,
              featuredImage: fields.featuredImage?.fields?.file?.url
                ? `https:${fields.featuredImage.fields.file.url}`
                : IMAGES.pic1,
              title: fields.title || "Untitled Blog Post",
              description: fields.excerpt || fields.description || (fields.content?.substring(0, 120) + "..."),
              date: sys.createdAt || new Date().toISOString(),
              // Set the proper URL with slug, fallback to ID
              url: slug ? `/blog-details/${slug}` : `/blog-details/${sys.id}`
            };
          });
          setBlogs(blogPosts);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Fallback data in case of error
        setBlogs([
          {
            id: 'fallback1',
            featuredImage: IMAGES.pic1,
            title: 'Effortless Home Makeover',
            description: 'Transform your living space with these simple tips and tricks.',
            date: new Date().toISOString(),
            url: '/blog-details'
          },
          {
            id: 'fallback2',
            featuredImage: IMAGES.pic2,
            title: 'Power of Color',
            description: 'How to use color psychology to enhance your interior design.',
            date: new Date().toISOString(),
            url: '/blog-details'
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [getEntries]);

  return (
    <>
      {isLoading ? (
        <div className="text-center p-4">
          <h3>Loading blogs...</h3>
        </div>
      ) : (
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title text-primary">OUR BLOG</h6>
            <h2>Latest News Feeds</h2>
          </div>
          <div className="blog-area">
            <div className="row">
              {blogs.map((blog, index) => (
                <motion.div className="col-md-4" key={blog.id || index}
                  initial={{ y: "20%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                >
                  <div className="dz-card blog-grid style-2 aos-item h-100 overlay-post" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                    <div className="dz-media">
                      <Link to={blog.url}>
                        <img src={blog.featuredImage} alt={blog.title} />
                      </Link>
                    </div>
                    <div className="dz-info">
                      <div className="dz-meta">
                        <ul>
                          <li className="post-date" style={{ fontSize: '13px' }}>
                            {blog.date && (
                              <>
                                <strong>{new Date(blog.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</strong>
                              </>
                            )}
                          </li>
                        </ul>
                      </div>
                      <h5 className="dz-title"><Link to={blog.url}>{blog.title}</Link></h5>
                      <div className="read-more">
                        <Link to={blog.url} className="btn btn-primary btn-rounded btn-sm hover-icon" aria-label={`Read more about ${blog.title}`}>
                          <span>Read More</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
