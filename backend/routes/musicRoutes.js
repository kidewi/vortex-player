const express = require('express');
const { uploadMusic, getMusic } = require('../controllers/musicController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/upload', protect, uploadMusic);
router.get('/', protect, getMusic);

module.exports = router;
