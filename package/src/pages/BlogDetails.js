import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import { useContentful } from '../useContentful';
import html2pdf from 'html2pdf.js';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getEntry, getEntries, clearCache } = useContentful();
  const blogRef = useRef(null);
  const navigate = useNavigate();
  
  // Prevent unnecessary re-renders with memoized functions
  const fetchBlogDetail = useCallback(async (postId) => {
    if (!postId) {
      setError('Blog ID not provided');
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      console.log('Fetching blog with ID:', postId);
      const entry = await getEntry(postId);
      
      if (entry) {
        console.log('Blog data retrieved');
        setBlog(entry);
        setError(null);
      } else {
        setError('Blog post not found');
      }
    } catch (err) {
      console.error('Error fetching blog post:', err);
      setError('Failed to fetch blog details');
    } finally {
      setLoading(false);
    }
  }, [getEntry]);

  const fetchRecentPosts = useCallback(async () => {
    try {
      // Always get the 3 most recent posts
      const response = await getEntries('blogPost', { 
        order: '-sys.createdAt',
        limit: 3
      });
      
      if (response && response.items && response.items.length > 0) {
        setRecentPosts(response.items);
      } else {
        console.log('No posts returned from Contentful');
        // Fallback posts
        setRecentPosts([
          {
            sys: { id: 'fallback1', createdAt: new Date().toISOString() },
            fields: {
              title: 'Effortless Home Makeover',
              featuredImage: { fields: { file: { url: '//images.ctfassets.net/as5c0n8s85du/5n9SzWvMFnCZ3jBS7FMjNs/256b5a58d8d66f941d3202758f2df45e/img59.jpg' } } }
            }
          },
          {
            sys: { id: 'fallback2', createdAt: new Date().toISOString() },
            fields: {
              title: 'Modern Interior Design Trends',
              featuredImage: { fields: { file: { url: '//images.ctfassets.net/as5c0n8s85du/31qYygMsWT5fZgTQ20Djjq/8aeca0c6eec19b33d4e25b5cb0c41cce/img60.jpg' } } }
            }
          },
          {
            sys: { id: 'fallback3', createdAt: new Date().toISOString() },
            fields: {
              title: 'Color Schemes for Your Home',
              featuredImage: { fields: { file: { url: '//images.ctfassets.net/as5c0n8s85du/60n0N7YOCgTqP9lNqLZ8BY/c797f50511a9a0a7d9a621710b390714/img61.jpg' } } }
            }
          }
        ]);
      }
    } catch (err) {
      console.error('Error fetching recent posts:', err);
      setRecentPosts([
        // ... fallback posts (same as above)
      ]);
    }
  }, [getEntries]);

  // Fixed: Properly navigate to the new post when clicked
  const handleRecentPostClick = useCallback((postId, event) => {
    event.preventDefault();
    
    if (postId === id) return; // Don't do anything if clicking the current post
    
    // Use React Router's navigate function to change URL and trigger proper navigation
    navigate(`/blog-details/${postId}`);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id, navigate]);

  // Initial load and ID changes
  useEffect(() => {
    // Store blog ref for stability
    if (blog) {
      blogRef.current = blog;
    }
    
    // Only fetch if we don't have the blog post yet or if ID changed
    if (!blog || (blog && blog.sys.id !== id)) {
      fetchBlogDetail(id);
    }
    
    fetchRecentPosts();
  }, [id, fetchBlogDetail, fetchRecentPosts, blog]);

  // Clear cache when navigating away from the page
  useEffect(() => {
    return () => {
      console.log('Clearing cache on unmount');
      clearCache();
    };
  }, [clearCache]);

  // Format date functions
  const formatDate = (dateString) => {
    if (!dateString) return { day: '--', month: '---' };
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      year: date.getFullYear()
    };
  };

  const formatRecentPostDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'long', 
      year: 'numeric'
    });
  };

  // Content helper functions
  const getBlogContent = (fields) => {
    return fields.content || fields.description || fields.body || fields.plainContent || '';
  };

  const formatPlainTextContent = (content) => {
    if (!content) return '';
    
    if (content.includes('<p>') || content.includes('<div>')) {
      return { __html: content };
    }
    
    const paragraphs = content.split('\n').filter(p => p.trim() !== '');
    return { __html: paragraphs.map(p => `<p>${p}</p>`).join('') };
  };

  // Ensure the blog title is available before rendering the button
  const handleDownloadPDF = () => {
    console.log('Download as PDF button clicked');
    const blogElement = document.getElementById('blog-content');
    if (!blogElement) {
      console.error('Blog content element not found');
      return;
    }
    console.log('Blog content element found:', blogElement);

    const title = blog?.title || 'untitled-blog'; // Fallback title
    console.log('Sanitized title for PDF:', title);

    const sanitizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const options = {
      margin: 1,
      filename: `${sanitizedTitle}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf()
      .set(options)
      .from(blogElement)
      .save()
      .then(() => console.log('PDF download initiated'))
      .catch((error) => console.error('Error generating PDF:', error));
  };

  // Use the blog from state or from ref as a fallback
  const currentBlog = blog || blogRef.current;

  return (
    <>
      <CommanBanner mainTitle="Blog Details" parentTitle="Home" pageName="Blog Details" bgImage={IMAGES.bnr1} />
      <div className="page-content bg-white">
        <div className="content-inner">
          <div className="container">
            {loading && !currentBlog ? (
              <div className="text-center p-4">
                <h3>Loading blog details...</h3>
              </div>
            ) : error && !currentBlog ? (
              <div className="alert alert-danger text-center">
                {error}
              </div>
            ) : currentBlog ? (
              <div className="row">
                <div className="col-xl-8 col-lg-8">
                  <div className="blog-single dz-card sidebar enhanced-blog-content">
                    <div className="dz-media">
                      <img src={currentBlog.fields.featuredImage?.fields?.file?.url ? 
                        `https:${currentBlog.fields.featuredImage.fields.file.url}` : IMAGES.blogGridPic1} 
                        alt={currentBlog.fields.title || "Blog image"} 
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="dz-info m-b30">
                      <div className="dz-meta">
                        <ul>
                          <li className="post-date">
                            <strong>{formatDate(currentBlog.sys.createdAt).day}</strong>
                            <span>{formatDate(currentBlog.sys.createdAt).month}</span>
                          </li>
                          {currentBlog.fields.category && (
                            <li className="post-category">
                              <Link rel="category tag">{currentBlog.fields.category}</Link>
                            </li>
                          )}
                          <li className="post-user">
                            By <Link>{currentBlog.fields.author || 'Admin'}</Link>
                          </li>
                        </ul>
                      </div>
                      <h2 className="dz-title blog-title">{currentBlog.fields.title}</h2>
                      
                      {/* Blog content section */}
                      <div id="blog-content" className="dz-post-text">
                        <div 
                          dangerouslySetInnerHTML={formatPlainTextContent(getBlogContent(currentBlog.fields))} 
                          className="blog-content" 
                        />
                        
                        {!getBlogContent(currentBlog.fields) && (
                          <div className="alert alert-info">
                            No content available for this blog post.
                          </div>
                        )}
                      </div>

                      <div className="text-center mt-4">
                        <button
                          className="btn btn-primary btn-rounded btn-lg hover-icon"
                          onClick={handleDownloadPDF}
                        >
                          Download as PDF
                        </button>
                      </div>

                      {/* Tags */}
                      {currentBlog.fields.tags && currentBlog.fields.tags.length > 0 && (
                        <div className="dz-share-post">
                          <div className="post-tags">
                            <strong>Tags:</strong>
                            {currentBlog.fields.tags.map((tag, index) => (
                              <Link key={index} rel="tag">{tag}</Link>
                            ))}
                          </div>
                          <div className="dz-social-icon">
                            <ul>
                              <li><a className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
                              <li><a className="fab fa-twitter" href="https://twitter.com/"></a></li>
                              <li><a className="fab fa-linkedin" href="https://www.linkedin.com/"></a></li>
                              <li><a className="fab fa-instagram" href="https://www.instagram.com/"></a></li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Sidebar - Restored sticky-top class for scrolling behavior */}
                <div className="col-xl-4 col-lg-4">
                  <aside className="side-bar sticky-top">
                    {/* Dynamic Recent Posts Widget */}
                    <div className="widget style-1 recent-posts-entry">
                      <div className="widget-title">
                        <h4 className="title">Recent Posts</h4>
                      </div>
                      <div className="widget-post-bx">
                        {recentPosts.length > 0 ? (
                          recentPosts.map((post) => (
                            <div className="widget-post clearfix" key={post.sys.id}>
                              <div className="dz-media">
                                <a 
                                  href={`/blog-details/${post.sys.id}`} 
                                  onClick={(e) => handleRecentPostClick(post.sys.id, e)}
                                >
                                  <img 
                                    src={post.fields.featuredImage?.fields?.file?.url ? 
                                      `https:${post.fields.featuredImage.fields.file.url}` : 
                                      IMAGES.recentPicture1} 
                                    alt={post.fields.title || "Recent blog"}
                                  />
                                </a>
                              </div>
                              <div className="dz-info">
                                <h6 className="title">
                                  <a 
                                    href={`/blog-details/${post.sys.id}`}
                                    onClick={(e) => handleRecentPostClick(post.sys.id, e)}
                                  >
                                    {post.fields.title || "Untitled Post"}
                                  </a>
                                </h6>
                                <div className="dz-meta">
                                  <ul>
                                    <li className="post-date">
                                      {formatRecentPostDate(post.sys.createdAt)}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-3 text-center">
                            <p>Loading recent posts...</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            ) : (
              <div className="text-center p-4">
                <h3>No blog post found</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced CSS for better blog content formatting and typography */}
      <style jsx="true">{`
        /* Enhanced typography for blog content */
        .enhanced-blog-content {
          font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        .blog-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #333;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }
        
        .blog-content {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #444;
          max-width: 100%;
          overflow-wrap: break-word;
        }
        
        .blog-content p {
          margin-bottom: 1.8rem;
          font-size: 1.125rem;
          line-height: 1.8;
        }
        
        .blog-content h1 {
          font-size: 2.25rem;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          color: #222;
          line-height: 1.3;
        }
        
        .blog-content h2 {
          font-size: 1.875rem;
          margin-top: 2.25rem;
          margin-bottom: 1.25rem;
          font-weight: 700;
          color: #222;
          line-height: 1.4;
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: #333;
          line-height: 1.4;
        }
        
        .blog-content h4 {
          font-size: 1.25rem;
          margin-top: 1.75rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: #333;
          line-height: 1.5;
        }
        
        .blog-content h5, .blog-content h6 {
          font-size: 1.125rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: #444;
          line-height: 1.6;
        }
        
        .blog-content ul, .blog-content ol {
          margin: 0 0 1.8rem 1.25rem;
          padding-left: 1rem;
        }
        
        .blog-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        
        .blog-content blockquote {
          border-left: 4px solid #var(--primary);
          padding: 1rem 1.5rem;
          margin: 1.8rem 0;
          font-style: italic;
          background-color: rgba(0,0,0,0.03);
          border-radius: 0.25rem;
          color: #555;
        }
        
        .blog-content blockquote p:last-child {
          margin-bottom: 0;
        }
        
        .blog-content a {
          color: var(--primary);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        
        .blog-content a:hover {
          border-bottom-color: var(--primary);
        }
        
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.8rem 0;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .blog-content hr {
          margin: 2.5rem 0;
          border: 0;
          border-top: 1px solid #eee;
        }
        
        .blog-content table {
          width: 100%;
          margin: 1.8rem 0;
          border-collapse: collapse;
        }
        
        .blog-content table th,
        .blog-content table td {
          padding: 0.75rem;
          border: 1px solid #eee;
        }
        
        .blog-content table th {
          background-color: #f8f8f8;
          font-weight: 600;
        }
        
        /* Responsive typography */
        @media (max-width: 768px) {
          .blog-title {
            font-size: 2rem;
          }
          
          .blog-content {
            font-size: 1.05rem;
          }
          
          .blog-content h1 {
            font-size: 1.875rem;
          }
          
          .blog-content h2 {
            font-size: 1.625rem;
          }
          
          .blog-content h3 {
            font-size: 1.375rem;
          }
        }
        
        @media (max-width: 576px) {
          .blog-title {
            font-size: 1.75rem;
          }
          
          .blog-content {
            font-size: 1rem;
          }
          
          .blog-content h1 {
            font-size: 1.625rem;
          }
          
          .blog-content h2 {
            font-size: 1.5rem;
          }
          
          .blog-content h3 {
            font-size: 1.25rem;
          }
        }
        
        /* Improved image handling */
        .dz-media img {
          width: 100%;
          max-height: 500px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 2rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        
        /* Enhanced sidebar styling */
        .widget-post .dz-media img {
          height: 80px;
          width: 80px;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .widget-post .dz-media img:hover {
          transform: scale(1.05);
        }
        
        /* Fix for sticky sidebar to ensure proper scrolling */
        .sticky-top {
          position: -webkit-sticky;
          position: sticky;
          top: 100px;
          z-index: 1;
        }
        
        /* First letter styling for paragraphs */
        .blog-content > p:first-of-type::first-letter {
          font-size: 3.5rem;
          font-weight: 700;
          float: left;
          margin-right: 0.5rem;
          line-height: 0.8;
          color: var(--primary);
        }

        /* Code blocks and pre-formatted text */
        .blog-content pre, .blog-content code {
          background-color: #f7f7f7;
          border-radius: 4px;
          font-family: monospace;
          padding: 0.2rem 0.4rem;
          font-size: 0.9rem;
          color: #d63384;
        }
        
        .blog-content pre {
          padding: 1rem;
          margin: 1.5rem 0;
          overflow-x: auto;
          line-height: 1.5;
        }
      `}</style>
    </>
  )
}

export default BlogDetails;