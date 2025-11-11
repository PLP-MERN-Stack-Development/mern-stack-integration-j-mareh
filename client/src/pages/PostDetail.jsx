import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { getPostById } from "@/services/api";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then(setPost).catch(console.error);
  }, [id]);

  if (!post) return <p className="text-gray-500">Loading...</p>;

  return (
    <Card className="p-6 bg-white/90 dark:bg-gray-800/90 shadow-lg">
      <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
        {post.title}
      </h1>
      <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{post.content}</p>
    </Card>
  );
}
