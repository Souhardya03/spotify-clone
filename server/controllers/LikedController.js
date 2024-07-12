const SongModel = require("../model/SongModel");
const UserModel = require("../model/UserModel");
const LikedSongbyUser = async (req, res) => {
	const { songid } = req.body;
	const userid = req.user._id;
	const song = await SongModel.findById(songid);
	if (!song) return res.status(404).send({ message: "Song not found" });
	const User = await UserModel.findById(userid);
    User.likedSongs.push(song);
    await User.save();
    res.status(200).send({ message: "Song added to liked songs" });
};
module.exports = {LikedSongbyUser};
