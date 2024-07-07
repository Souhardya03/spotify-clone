const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const authMiddlewares = require('../middlewares/authmiddleware.js');
const songController = require('../helper/uploadSong.js');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'upload_songs',
    format: async (req, file) => 'mp3', // specify the format as mp3
    public_id: (req, file) => `${file.fieldname}_${Date.now()}`,
  },
});

const upload = multer({ storage });

router.post('/upload', authMiddlewares.requireSignIn, authMiddlewares.isAdmin, upload.single('song'), songController.uploadSong);

module.exports = router;