const PlaylistModel = require("../model/PlaylistModel");
const SongModel = require("../model/SongModel");
//create playlist
const createPlaylist = async (req, res) => {
	try {
		const { name, thumbnail, songs } = req.body;
		const owner = req.user._id;
		const playlist = await PlaylistModel.create({
			name,
			thumbnail,
			owner,
			songs,
		});
		res.status(200).json({ playlist });
	} catch (error) {
		console.log(error);
		console.log("Error from create playlist");
		res.status(400).json({ error: error.message });
	}
};

//get all playlists
const getAllPlaylists = async (req, res) => {
	try {
		const playlists = await PlaylistModel.find();
		res.status(200).json({ playlists });
	} catch (error) {
		console.log(error);
		console.log("Error from get all playlists");
	}
};

//get playlist by playlistid
const getPlaylist = async (req, res) => {
	try {
		const { playlistid } = req.params;
		const playlist = await PlaylistModel.findById(playlistid);
		res.status(200).json({ playlist });
	} catch (error) {
		console.log(error);
		console.log("Error from get playlist");
	}
};

//get playlist by owner id
const getPlaylistByOwnerId = async (req, res) => {
	try {
		const OwnerId = req.user._id;
		const playlist = await PlaylistModel.find({ owner: OwnerId }).populate({ path: "owner",select:"-password" });
		res.status(200).json({ playlist });
	} catch (error) {
		console.log(error);
		console.log("Error from get playlist by owner id");
	}
};


//add song to playlist
const addSongToPlaylist = async (req, res) => {
	try {
		const curruser = req.user;
		const { songid, playlistid } = req.body;
		const playlist = await PlaylistModel.findById(playlistid);
		if (!playlist) return res.status(304).json({ err: "Playlist not found" });
		if (!playlist.owner.equals(curruser._id))
			return res.status(400).json({ err: "Not allowed" });
		const song = await SongModel.findById(songid);
		if (!song) return res.status(304).json({ err: "Song not found" });
		playlist.songs.push(song);
		await playlist.save();
		res.status(200).json({ playlist });
	} catch (error) {
		console.log(error);
		console.log("Error from add song to playlist");
	}
};

module.exports = {
	createPlaylist,
	getPlaylist,
	getPlaylistByOwnerId,
	getAllPlaylists,
	addSongToPlaylist,
};
