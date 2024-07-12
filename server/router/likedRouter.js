const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authmiddleware");
const LikedSongController = require("../controllers/LikedController");
router.post(
	"/add-to-liked-songs",
	authMiddleware.requireSignIn,
	LikedSongController.LikedSongbyUser
);
module.exports = router;
