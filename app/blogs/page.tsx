import { POSTS } from "@/data/posts";
import Link from "next/link";

const Blogs = () => {
  return <div className="max-w-4xl py-8 m-auto">
    <h1 className="text-3xl font-bold">Blogs</h1>

    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
            POSTS.map(post => (
                <Link key={post.id} className="bg-slate-200 p-4 shadow-md" href={`blogs/${post.slug}`}>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p className="text-sm text-gray-500">By {post.author} on {post.date}</p>
                    <p className="mt-2">{post.content}</p>
                </Link>
            ))
        }
    </div>
  </div>;
};

export default Blogs;
