const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getPostById } = require('../controllers/postController');

// Route to create a new post
router.post('/', createPost);

// Route to get all posts
router.get('/', getAllPosts);

// Route to get a post by ID
router.get('/:id', getPostById);

module.exports = router;
