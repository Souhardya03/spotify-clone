import { createContext, useContext, useState } from "react";
import { openUploadWidget } from "../../utils/Cloudinary";
export const SpotifyContext = createContext();
export const SpotifyProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
	const apiUrl = process.env.REACT_APP_BACKEND_URL;
	//Register user
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
			console.log("Error fron register user context");
		}
	};
	//Login user
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
	//Logout user
	const logoutUser = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.location.reload();
	};

	const isLoggedIn = !!token;
	const authorizationToken = token;
	//Song Upload to cloudinary
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
					} else if (error) {
						reject(error);
					}
				}
			);
			myUploadWidget.open();
		});
	};

	//Song Upload
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

	//create playlist
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
			}}>
			{children}
		</SpotifyContext.Provider>
	);
};
export const useSpotify = () => useContext(SpotifyContext);
