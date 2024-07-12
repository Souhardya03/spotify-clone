const authMiddleware = require("../middlewares/authmiddleware");
const express = require("express");
const router = express.Router();
const songCrontroller = require("../controllers/songController");
router.post(
	"/create-song",
	authMiddleware.requireSignIn,
	songCrontroller.createSong
);
router.get(
	"/get-songs",
	songCrontroller.getAllSongs
);
router.get(
	"/get-mysong",
	authMiddleware.requireSignIn,
	songCrontroller.getSongByArtistId
);
router.get(
	"/get-songbyname/:name",
	authMiddleware.requireSignIn,
	songCrontroller.getSongByName
)
module.exports = router;
