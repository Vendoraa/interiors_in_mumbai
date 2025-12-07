import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useContentful } from '../useContentful';


export const BlogList = () => {
  const { getEntries, loading, error } = useContentful();
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await getEntries('blogPost');
      if (response) {
        console.log('Fetched blog posts:', response.items.map(post => ({ id: post.sys.id, title: post.fields.title })));
        setBlogPosts(response.items);
      }
    };

    fetchBlogPosts();
  }, [getEntries]);

  if (loading) {
    return (
      <div className="content-inner">
        <div className="container">
          <div className="loading">Loading blog posts...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="content-inner">
        <div className="container">
          <div className="error">Error: {error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-inner">
      <div className="container">
        <div className="blog-list">
          <h1>Latest Blog Posts</h1>
          <div className="row">
            {blogPosts.map(post => (
              <div key={post.sys.id} className="col-lg-6 col-md-6">
                <article className="blog-post">
                  {post.fields.featuredImage && (
                    <div className="post-media">
                      <img
                        src={post.fields.featuredImage.fields.file.url}
                        alt={post.fields.featuredImage.fields.description || post.fields.title}
                      />
                    </div>
                  )}
                  <div className="post-content">
                    <h2>{post.fields.title}</h2>
                    <p>{post.fields.excerpt || post.fields.description}</p>
                    <Link to={`/blog/${post.sys.id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};