import Post from "../Models/postSchema.js";

//create post

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let imageUrl = "";
    //if file uploaded then upload to cloudinary
    if (req.file && req.file.path) {
      imageUrl = req.file.path;
    }

    const newPost = new Post({
      title,
      description,
      image: imageUrl,
      user: req.user._id,
    });
    console.log(newPost);

    await newPost.save();
    res
      .status(200)
      .json({ message: "Post created successfully", data: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get post

export const getPost = async (req, res) => {
  try {
    const posts = await Post.find({ approved: true }).populate("user", "name");
    res.status(200).json({ message: "Posts fetched successfully",posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get unapproved posts

export const getUnapprovedPosts = async (req, res) => {
  try {
    const posts = await Post.find({ approved: false }).populate("user", "name");
    res.status(200).json({ message: "Posts fetched successfully", posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//approve the post

export const approvePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    res.status(200).json({ message: "Post approved successfully", data: post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete post

export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
