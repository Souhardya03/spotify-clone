const mongoose = require("mongoose");

const Playlist = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	thumbnail: {
		type: String,
		required: true,
	},
	owner:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    songs: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Song',
    }],
});

const PlaylistModel = mongoose.model("Playlist",Playlist);
module.exports = PlaylistModel;
