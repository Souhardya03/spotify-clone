import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSpotify } from "../../context/Context";
const Login = () => {
	useEffect(() => {
		document.title = "Spotify | Login";
	}, []);
	const {loginUser,isLoggedIn} = useSpotify();
	const navigate = useNavigate();
	const [showpassword, setshowpassword] = useState(false);
	const [logindata, setlogindata] = useState({
		email: "",
		password: "",
	});
	if(isLoggedIn){
		return <Navigate to="/"/>
	}
	const handlechange = (e) => {
		setlogindata({ ...logindata, [e.target.name]: e.target.value });
	};
	const handlesubmit = (e) => {
		e.preventDefault();
		loginUser(logindata);
		navigate("/")
	};

	return (
		<div
			className="text-white flex justify-center h-screen p-2 lg:p-6"
			style={{ background: 'url("./assets/bg-colour.svg")' }}>
			<div className="flex lg:w-1/2 w-full p-6 bg-[#121212] rounded-md h-full justify-center">
				<div className="flex w-full items-center gap-6 flex-col">
					<div className="flex justify-center">
						<img
							src="./assets/iconmonstr-spotify-1-240.png"
							alt="spotify icon"
							className="w-10"
						/>
					</div>
					<div className="text-3xl font-semibold">Log in to Spotify</div>
					<div className="flex flex-col items-center  space-y-14 p-4 lg:p-8 w-full h-full ">
						<div className=" lg:w-[55%] w-full space-y-8">
							<div className="space-y-6">
								<div>
									<label
										htmlFor="email"
										className="text-sm">
										Email or username
									</label>
									<div className="rounded-[4px] focus-within:border-white focus-within:border-2 duration-150 border border-gray-400 w-full">
										<input
											type="text"
											placeholder="Email or username"
											name="email"
											value={logindata.email}
											onChange={handlechange}
											className="p-3  text-sm focus:outline-none placeholder:text-[16px] bg-transparent w-full rounded-sm"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="password"
										className="text-sm">
										Passowrd
									</label>
									<div className="flex focus-within:border-white focus-within:border-2 duration-150 rounded-[4px] items-center border border-gray-400 w-full">
										<input
											type={`${!showpassword ? "password" : "text"}`}
											placeholder="Password"
											name="password"
											value={logindata.password}
											onChange={handlechange}
											className="p-3 text-sm focus:outline-none placeholder:text-[16px] bg-transparent w-full rounded-sm"
										/>
										<div onClick={() => setshowpassword(!showpassword)}>
											<img
												src={`${
													showpassword
														? "https://img.icons8.com/material-outlined/24/ffffff/visible--v1.png"
														: "https://img.icons8.com/material/24/ffffff/blind.png"
												}`}
												className="w-8 pr-2"
												alt="blind"
											/>
										</div>
									</div>
								</div>
							</div>
							<div
								className="bg-green-600 hover:scale-105 duration-150 cursor-pointer p-3 text-center rounded-full font-semibold text-black"
								onClick={handlesubmit}>
								<div>Log In</div>
							</div>
						</div>
						<div className="w-full border border-[#252524]"></div>
						<div className="flex gap-1">
							<div className="text-[#a59e95] lg:text-sm text-sm">Don't have an account?</div>
							<Link
								to="/signup"
								className="underline lg:text-sm text-sm hover:text-green-500 duration-100 cursor-pointer">
								Sign up for Spotify.
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
