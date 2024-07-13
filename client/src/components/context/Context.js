/* eslint-disable react-hooks/exhaustive-deps */
import {
	createContext,
	useContext,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { openUploadWidget } from "../../utils/Cloudinary";
import { Howl } from "howler";

export const SpotifyContext = createContext();
export const SpotifyProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
	const apiUrl = process.env.REACT_APP_BACKEND_URL;
	const [soundPlayed, setSoundPlayed] = useState(null);
	const [isPlaying, setisPlaying] = useState(false);
	const [currentSong, setCurrentSong] = useState(null);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	// Register user
	const registerUser = async (signupdata) => {
		try {
			const response = await fetch(`${apiUrl}/auth/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(signupdata),
			});
			const data = await response.json();
			if (response.ok) {
				localStorage.setItem("token", data.token);
				localStorage.setItem("user", JSON.stringify(data.user));
				setToken(data.token);
				setUser(data.user);
				alert("User Created");
			} else if (response.status === 400) {
				alert("User already exists");
			}
		} catch (error) {
			console.log(error);
			console.log("Error from register user context");
		}
	};

	// Login user
	const loginUser = async (loginData) => {
		try {
			const response = await fetch(`${apiUrl}/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(loginData),
			});
			const data = await response.json();
			if (response.ok) {
				localStorage.setItem("token", data.token);
				localStorage.setItem("user", JSON.stringify(data.user));
				setToken(data.token);
				setUser(data.user);
				// alert("User Logged In");
			} else if (response.status === 400) {
				alert("Invalid Credentials");
			}
		} catch (error) {
			console.log(error);
			console.log("Error from login user context");
		}
	};

	// Logout user
	const logoutUser = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.location.reload();
	};

	const isLoggedIn = !!token;
	const authorizationToken = token;

	// Song Upload to cloudinary
	const uploadSongWidget = () => {
		return new Promise((resolve, reject) => {
			let myUploadWidget = openUploadWidget(
				{
					cloudName: process.env.REACT_APP_CLOUD_NAME,
					uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
					sources: ["local"],
				},
				function (error, result) {
					if (!error && result.event === "success") {
						resolve(result.info);
						console.log(result.info);
					} else if (error) {
						reject(error);
					}
				}
			);
			myUploadWidget.open();
		});
	};

	// Song Upload
	const uploadSong = async (song) => {
		try {
			const response = await fetch(`${apiUrl}/song/create-song`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: authorizationToken,
				},
				body: JSON.stringify(song),
			});
			if (response.ok) {
				alert("Song Uploaded");
			} else if (response.status === 400) {
				alert("Song Upload Failed");
			}
		} catch (error) {
			console.log(error);
			console.log("Error from upload song of context");
		}
	};

	// Create playlist
	const createPlaylist = async (playlist) => {
		try {
			const response = await fetch(`${apiUrl}/playlist/create-playlist`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: authorizationToken,
				},
				body: JSON.stringify(playlist),
			});
			if (response.ok) {
				alert("Playlist Created");
			} else if (response.status === 400) {
				alert("Playlist Creation Failed");
			}
		} catch (error) {
			console.log(error);
			console.log("Error from create playlist of context");
		}
	};

	// Play and pause song
	const playSound = (songsrc) => {
		if (soundPlayed) {
			soundPlayed.stop();
			setSoundPlayed(null);
		}
		const sound = new Howl({
			src: [songsrc],
			html5: true,
			onend: () => setSoundPlayed(null), // Clear the state when the sound ends
			onplay: () => setDuration(sound.duration()),
			onseek: () => setCurrentTime(sound.seek()),
		});
		setSoundPlayed(sound);
		sound.play();
		setisPlaying(true);
	};

	// Toggle play pause
	const togglePlayPause = () => {
		if (isPlaying) {
			soundPlayed.pause();
			setisPlaying(false);
		} else {
			soundPlayed.play();
			setisPlaying(true);
		}
	};

	// Update currentTime as the song plays
	const updateCurrentTime = () => {
		if (soundPlayed) {
			setCurrentTime(soundPlayed.seek());
		}
	};

	// Set interval to update currentTime
	useLayoutEffect(() => {
		const interval = setInterval(updateCurrentTime, 1000);
		return () => clearInterval(interval);
	}, [soundPlayed]);

	// Current Song
	const firstUpdate = useRef(true);
	useLayoutEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		if (!currentSong) return;
		playSound(currentSong.track);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSong && currentSong.track]);

	// Get Playlist
	const [playlist, setPlaylist] = useState([]);
	const getyourPlaylist = async () => {
		const response = await fetch(`${apiUrl}/playlist/get-ownerplaylist`, {
			method: "GET",
			headers: {
				Authorization: authorizationToken,
			},
		});
		const data = await response.json();
		setPlaylist(data.playlist);
	};

	// Add song to playlist
	const addSongToPlaylist = async (playlistId) => {
		try {
			const response = await fetch(`${apiUrl}/playlist/add-song-to-playlist`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: authorizationToken,
				},
				body: JSON.stringify({
					songid: currentSong._id,
					playlistid: playlistId,
				}),
			});
			if (response.ok) {
				alert("Song added to playlist");
			}
		} catch (error) {
			console.log(error);
			console.log("Error from add song to playlist");
		}
	};

	// Get all playlist
	const [allPlaylist, setAllPlaylist] = useState([]);
	const getAllPlaylist = async () => {
		const response = await fetch(`${apiUrl}/playlist/get-allplaylist`, {
			method: "GET",
		});
		const data = await response.json();
		setAllPlaylist(data.playlists);
	};

	// Get single playlist
	const [singlePlaylist, setSinglePlaylist] = useState([]);
	const getSinglePlaylist = async (playlistId) => {
		setLoading(true);
		try {
			const response = await fetch(
				`${apiUrl}/playlist/get-playlist/${playlistId}`,
				{
					method: "GET",
				}
			);
			const data = await response.json();
			setSinglePlaylist(data.playlist);
		} catch (error) {
			console.error("Error fetching single playlist:", error);
		}
		setLoading(false);
	};

	// Change next song
	const [changenextsong, setchangenextsong] = useState(false);
	const nextsong = () => {
		setchangenextsong(true);
	};

	// Change previous song
	const [changeprevioussong, setchangeprevioussong] = useState(false);
	const previoussong = () => {
		setchangeprevioussong(true);
	};

	// Get all songs
	const [allSongs, setAllSongs] = useState([]);
	const getAllSongs = async () => {
		const response = await fetch(`${apiUrl}/song/get-songs`, {
			method: "GET",
		});
		const data = await response.json();
		setAllSongs(data.songs);
	};

	return (
		<SpotifyContext.Provider
			value={{
				registerUser,
				loginUser,
				user,
				isLoggedIn,
				logoutUser,
				uploadSongWidget,
				uploadSong,
				createPlaylist,
				apiUrl,
				authorizationToken,
				playSound,
				togglePlayPause,
				setCurrentSong,
				currentSong,
				isPlaying,
				playlist,
				getyourPlaylist,
				addSongToPlaylist,
				getAllPlaylist,
				allPlaylist,
				getSinglePlaylist,
				singlePlaylist,
				nextsong,
				changenextsong,
				setchangenextsong,
				previoussong,
				changeprevioussong,
				setchangeprevioussong,
				loading,
				setLoading,
				getAllSongs,
				allSongs,
				soundPlayed,
				currentTime,
				duration,
				setCurrentTime,
			}}
		>
			{children}
		</SpotifyContext.Provider>
	);
};
export const useSpotify = () => useContext(SpotifyContext);
