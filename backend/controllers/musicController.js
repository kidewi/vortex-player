const Music = require('../models/musicModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

exports.uploadMusic = [
  upload.single('file'),
  async (req, res) => {
    const { title } = req.body;
    const { file } = req;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    try {
      const music = await Music.create({
        user: req.user.id,
        title,
        filePath: file.path
      });
      res.status(201).json(music);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }
];

exports.getMusic = async (req, res) => {
  try {
    const music = await Music.find({ user: req.user.id });
    res.json(music);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
