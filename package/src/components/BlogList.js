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

  // Helper to create SEO-friendly slugs
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

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
          <h2>Latest Blog Posts</h2>
          <div className="row">
            {blogPosts.map(post => {
              const slug = post.fields.slug || createSlug(post.fields.title || '');
              const linkUrl = slug ? `/blog-details/${slug}` : `/blog-details/${post.sys.id}`;

              return (
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
                      <Link to={linkUrl} className="btn btn-primary">
                        Read More
                      </Link>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};