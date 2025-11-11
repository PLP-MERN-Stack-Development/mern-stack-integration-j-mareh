// server/routes/uploadRoutes.js
import express from "express";
import upload from "../utils/upload.js";

const router = express.Router();

// POST /api/upload
router.post("/", upload.single("image"), (req, res) => {
  res.send({
    message: "Image uploaded successfully",
    imageUrl: `/uploads/${req.file.filename}`,
  });
});

export default router;
