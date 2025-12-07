import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContentful } from '../useContentful';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import html2pdf from 'html2pdf.js';

const BlogDetail = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getEntries } = useContentful();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getEntries('blogPost', { order: '-sys.createdAt' });
        if (response && response.items) {
          const blogPosts = response.items.map((item) => {
            const { sys, fields } = item;
            return {
              id: sys.id,
              featuredImage: fields.featuredImage?.fields?.file?.url
                ? `https:${fields.featuredImage.fields.file.url}`
                : '',
              title: fields.title || 'Untitled Blog Post',
              description: fields.excerpt || fields.description || '',
              date: sys.createdAt || new Date().toISOString(),
              url: `/blog-details/${sys.id}`,
            };
          });
          setBlogs(blogPosts);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [getEntries]);

  const handleDownloadPDF = (blogId) => {
    const blogElement = document.getElementById(`blog-${blogId}`);
    if (blogElement) {
      const options = {
        margin: 1,
        filename: `blog-post-${blogId}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
      html2pdf().set(options).from(blogElement).save();
    }
  };

  return (
    <div className="page-content bg-white">
      <CommanBanner mainTitle="Our Blog" parentTitle="Home" pageName="Blog Details" bgImage={IMAGES.bannerbg3} />
      <div className="container" style={{ padding: '60px 15px' }}>
        <div className="section-head style-1 text-center" style={{ marginBottom: '40px' }}>
          <h6 className="sub-title text-primary" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '500', fontSize: '18px', marginBottom: '10px' }}>OUR BLOG</h6>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontWeight: '700', fontSize: '32px', color: '#333' }}>Latest News Feeds</h2>
        </div>
        {isLoading ? (
          <div className="text-center p-4">
            <h3>Loading blogs...</h3>
          </div>
        ) : (
          <div className="row">
            {blogs.map((blog, index) => (
              <motion.div className="col-md-4" key={blog.id || index}
                initial={{ y: '20%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 * index }}
              >
                <div className="dz-card blog-grid style-2 h-100 overlay-post" id={`blog-${blog.id}`}>
                  <div className="dz-media">
                    <Link to={blog.url}>
                      <img src={blog.featuredImage} alt={blog.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    </Link>
                  </div>
                  <div className="dz-info text-center" style={{ marginTop: '15px' }}>
                    <h5 className="dz-title" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '500', fontSize: '18px', color: '#333' }}>
                      <Link to={blog.url}>{blog.title}</Link>
                    </h5>
                    <div className="dz-meta" style={{ fontSize: '14px', color: '#777' }}>
                      {blog.date && (
                        <>
                          <strong>{new Date(blog.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</strong>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
