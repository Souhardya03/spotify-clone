const authMiddleware = require("../middlewares/authmiddleware");
const express = require("express");
const router = express.Router();
const playlistCrontroller = require("../controllers/playlistController");
router.post(
	"/create-playlist",
	authMiddleware.requireSignIn,
	playlistCrontroller.createPlaylist
);
router.get(
	"/get-playlist/:playlistid",
	authMiddleware.requireSignIn,
	playlistCrontroller.getPlaylist
);
router.get(
	"/get-allplaylist",
	authMiddleware.requireSignIn,
	playlistCrontroller.getAllPlaylists
);
router.get(
	"/get-ownerplaylist/:OwnerId",
	authMiddleware.requireSignIn,
	playlistCrontroller.getPlaylistByOwnerId
);
router.post(
	"/add-song-to-playlist",
	authMiddleware.requireSignIn,
	playlistCrontroller.addSongToPlaylist
)
module.exports = router;
