import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogPost";
import { usePosts } from "./usePosts";
import "./blog.css";

function Blog() {
  const { posts, isLoading, error } = usePosts();
  if (isLoading)
    return <div className="loading">Ma'lumotlar yuklanmoqda... 🔄</div>;
  return (
    <div className="blog-container">
      <h2 style={{ marginBottom: "20px" }}>Blog</h2>

      <div className="blog-grid">
        {posts.map((post) => (
          <div>
            <div className="post-date">
              <p>{new Date(post.data).toLocaleDateString("uz-UZ", {})}</p>
            </div>
            <div key={post.id} className="blog-card">
              <Link to={`/blog/${post.sluge}`}>
                <div>
                  <h2>{post.sarlavha}</h2>
                </div>
                <div className="blog-img">
                  <img src={post.rasm} alt={post.sarlavha} />
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
