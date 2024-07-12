const mongoose = require("mongoose");

const Song = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	thumbnail: {
		type: String,
		required: true,
	},
	track: {
		type: String,
		
	},
	artist:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
	duration:{
		type: Number,
		default:0
	}
});

const SongModel = mongoose.model("Song",Song);
module.exports = SongModel;
