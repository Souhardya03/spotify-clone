import { createContext, useContext, useState } from "react";
export const SpotifyContext = createContext();
export const SpotifyProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

	//Register user
	const registerUser = async (signupdata) => {
		try {
			const response = await fetch("http://localhost:8080/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(signupdata),
			});
			const data = await response.json();
			console.log(data);
			if (response.ok) {
				localStorage.setItem("token", data.token);
				localStorage.setItem("user", JSON.stringify(data.user));
				setToken(data.token);
				setUser(data.user);
				alert("User Created");
			}
			else if(response.status===400){
				alert("User already exists")
			}
		} catch (error) {
			console.log(error);
			console.log("Error fron register user context");
		}
	};
	//Login user
	const loginUser = async (loginData) => {
		try {
			const response = await fetch("http://localhost:8080/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(loginData),
			});
			const data = await response.json();
			console.log(data);
			if (response.ok) {
				localStorage.setItem("token", data.token);
				localStorage.setItem("user", JSON.stringify(data.user));
				setToken(data.token);
				setUser(data.user);
				alert("User Logged In");
			}
			else if(response.status===400){
				alert("Invalid Credentials")
			}
		} catch (error) {
			console.log(error);
			console.log("Error from login user context");
		}
	};

	return (
		<SpotifyContext.Provider value={{ registerUser, loginUser }}>
			{children}
		</SpotifyContext.Provider>
	);
};
export const useSpotify = () => useContext(SpotifyContext);
