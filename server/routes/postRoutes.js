import express from "express";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

router.route("/")
  .get(getPosts)
  .post(createPost);

router.route("/:id")
  .get(getPost)
  .put(updatePost)
  .delete(deletePost);

export default router;
