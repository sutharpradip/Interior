import React from "react";
import HeroSec from "../Components/HeroSec";
import { Link } from "react-router-dom";
import { Blogs } from "../Data";
import BlogCard from "../Components/BlogCard";

function Blog() {
  return (
    <>
      <HeroSec heading="Blogs" />

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto  pb-20">
          <div className="flex flex-wrap justify-center gap-y-10">
            {Blogs.map((blog, index) => (
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
    </>
  );
}

export default Blog;
