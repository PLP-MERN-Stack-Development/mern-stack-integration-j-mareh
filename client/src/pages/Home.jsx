import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { getPosts } from "@/services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-8">
        📰 Latest Posts
      </h1>

      {posts.length === 0 && (
        <p className="text-gray-600 dark:text-gray-300">No posts yet. Create one!</p>
      )}

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card
            key={post._id}
            className="p-6 bg-white/90 dark:bg-gray-800/90 hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {post.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
              {post.content}
            </p>
            <Link
              to={`/post/${post._id}`}
              className="text-indigo-500 dark:text-indigo-300 hover:underline"
            >
              Read more →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}