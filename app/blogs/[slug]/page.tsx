import { POSTS } from "@/data/posts";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const BlogDetail = ({ params: { slug } }: Props) => {
  console.log(slug);
  const blog = POSTS.find((post) => post.slug === slug) || {};

  if (!blog) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-4xl py-8 m-auto">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-sm text-gray-500">By {blog.author} on {blog.date}</p>
      <p className="mt-2">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
