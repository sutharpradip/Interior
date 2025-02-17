import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog_image, blog_content, username, date }) {
  return (
    <>
      <Link className="blog-content">
        <div className="blog-img overflow-hidden rounded-2xl">
          <img src={blog_image} alt="blog_image" />
        </div>
        <div className="blog-text mt-4">
          <h4 className="text-md font-bold mb-1">{blog_content}</h4>
          <p className="text-gray-700">
            by <span className="font-semibold text-gray-900">{username}</span>{" "}
            on <span className="font-semibold text-gray-900">{date}</span>
          </p>
        </div>
      </Link>
    </>
  );
}

export default BlogCard;
