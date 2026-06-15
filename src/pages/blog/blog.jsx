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
          <div key={post.id} className="blog-card">
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <img src={post.img} alt={post.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
