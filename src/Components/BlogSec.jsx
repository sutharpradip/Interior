import React from "react";
import { Link } from "react-router-dom";
import { Blogs } from "../Data";
import BlogCard from "./BlogCard";

function BlogSec() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto  pb-20">
        <div className="flex justify-between">
          <h2 className="text-3xl text-gray-800  font-medium">Recent Blog</h2>
          <Link
            to="/blogs"
            className="underline font-semibold text-gray-800 text-sm"
          >
            view all blogs
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-y-4">
          {Blogs.slice(0, 3).map((blog, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-3">
              <BlogCard
                blog_image={blog.image}
                blog_content={blog.content}
                username={blog.username}
                date={blog.date}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSec;
