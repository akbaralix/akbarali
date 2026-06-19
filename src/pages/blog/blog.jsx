import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogPost";
import "./blog.css";

function Blog() {
  return (
    <div className="blog-container">
      <h2 style={{ marginBottom: "20px" }}>Blog</h2>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div>
            <div className="post-date">
              <p>{post.date}</p>
            </div>
            <div key={post.id} className="blog-card">
              <Link to={`/blog/${post.slug}`}>
                <div>
                  <h2>{post.title}</h2>
                </div>
                <div className="blog-img">
                  <img src={post.img} alt={post.title} />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
