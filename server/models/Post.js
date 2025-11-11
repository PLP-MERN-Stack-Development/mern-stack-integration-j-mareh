import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  username: String,
  text: String,
  createdAt: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String },
    comments: [commentSchema],
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
