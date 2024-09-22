const BlogPost = require('../models/BlogPost');

// Get all blog posts
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};
