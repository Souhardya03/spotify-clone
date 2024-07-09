const SongModel = require("../model/SongModel");

//Create Song
const createSong = async (req, res) => {
	try {
		const { name, thumbnail, track } = req.body;
		const artist = req.user._id;
		const song = await SongModel.create({ name, thumbnail, track, artist });
		res.status(200).json({ song });
	} catch (error) {
		console.log(error);
		console.log("Error from create song");
		return res.status(400).json({ err: "Song not uploaded" });
	}
};

// Get all songs
const getAllSongs = async (req, res) => {
	try {
		const songs = await SongModel.find();
		res.status(200).json({ songs });
	} catch (error) {
		console.log(error);
		console.log("Error from get all songs");
	}
};

//get song by artist id
const getSongByArtistId = async (req, res) => {
	try {
		const songs = await SongModel.find({ artist: req.user._id })
			.populate({ path: 'artist', select: '-password' });
		res.status(200).json({ songs });
	} catch (error) {
		console.error(error);
		console.log("Error from get song by artist id");
	}
};


//get song by name
const getSongByName = async (req, res) => {
	try {
		const { name } = req.params;
		const songs = await SongModel.find({ name: name });
		res.status(200).json({ songs });
	} catch (error) {
		console.log(error);
		console.log("Error from get song by name");
	}
};

module.exports = { createSong, getAllSongs, getSongByArtistId, getSongByName };
