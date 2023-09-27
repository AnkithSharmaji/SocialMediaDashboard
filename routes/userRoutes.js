const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/userController');

// Route to get user profile (requires authentication)
router.get('/profile', getUserProfile);

module.exports = router;
