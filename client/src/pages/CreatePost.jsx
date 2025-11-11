import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createPost } from "@/services/api";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await createPost(form);
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-8">
        ✍️ Create a New Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          placeholder="Post title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Textarea
          rows={6}
          placeholder="Write your post content..."
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Publish
        </Button>
      </form>
    </div>
  );
}

