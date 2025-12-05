import express from "express";
import { adminMiddleware, authMiddleware } from "../Middlewares/Middleware.js";
import upload from "../Config/Multer.js";
import { approvePost, createPost, deletePost, getPost, getUnapprovedPosts } from "../Controllers/postController.js";


const router = express.Router();

router.post("/create",authMiddleware, upload.single("image"),createPost)
router.patch("/:id/approve",authMiddleware,adminMiddleware,approvePost)
router.get("/getpost",getPost)
router.get("/unapprovedpost",authMiddleware,adminMiddleware,getUnapprovedPosts)
router.delete("/delete/:id",authMiddleware,adminMiddleware,deletePost)



export default router;