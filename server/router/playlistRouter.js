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
	playlistCrontroller.getPlaylist
);
router.get(
	"/get-allplaylist",
	playlistCrontroller.getAllPlaylists
);
router.get(
	"/get-ownerplaylist",
	authMiddleware.requireSignIn,
	playlistCrontroller.getPlaylistByOwnerId
);
router.post(
	"/add-song-to-playlist",
	authMiddleware.requireSignIn,
	playlistCrontroller.addSongToPlaylist
)
module.exports = router;
