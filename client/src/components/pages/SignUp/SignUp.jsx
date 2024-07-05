import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSpotify } from "../../context/Context";

const SignUp = () => {
	const {registerUser} = useSpotify();
	const [showpassword, setshowpassword] = useState(false);
	const [signupdata, setsignupdata] = useState({
		firstName: "",
		lastName: "",
		email: "",
		username: "",
		password: "",
	});
	const handlechange = (e) => {
		setsignupdata({ ...signupdata, [e.target.name]: e.target.value });
	};
	const handlesubmit = (e) => {
		e.preventDefault();
		registerUser(signupdata);
	};
	useEffect(() => {
		document.title = "Spotify | Register";
	}, []);

	return (
		<div
			className="text-white flex justify-center h-full p-2 lg:p-6"
			style={{ background: 'url("./assets/bg-colour.svg")' }}>
			<div className="flex lg:w-1/2 p-6 bg-[#121212] rounded-md h-full justify-center">
				<div className="flex w-full items-center gap-6 flex-col">
					<div className="flex justify-center">
						<img
							src="./assets/iconmonstr-spotify-1-240.png"
							alt="spotify icon"
							className="w-10"
						/>
					</div>
					<div className="lg:text-3xl text-xl font-semibold">
						Sign up to start listening
					</div>
					<div className="flex flex-col items-center  space-y-12 p-2 lg:p-8 w-full h-full ">
						<div className=" lg:w-[60%] space-y-8">
							<div className="space-y-4">
								{/* firstname and lastname */}
								<div className="flex gap-2">
									<div>
										<label
											htmlFor="email"
											className="text-sm">
											Firstname
										</label>
										<div className="rounded-[4px] focus-within:border-white focus-within:border-2 duration-150 border border-gray-400 w-full">
											<input
												type="text"
												placeholder="Firstname"
												name="firstName"
												value={signupdata.firstName}
												onChange={handlechange}
												className="p-3   text-sm focus:outline-none placeholder:text-[16px] bg-transparent w-full rounded-sm"
											/>
										</div>
									</div>
									<div>
										<label
											htmlFor="email"
											className="text-sm">
											Lastname
										</label>
										<div className="rounded-[4px] focus-within:border-white focus-within:border-2 duration-150 border border-gray-400 w-full">
											<input
												type="text"
												placeholder="Lastname"
												name="lastName"
												onChange={handlechange}
												value={signupdata.lastName}
												className="p-3   text-sm focus:outline-none placeholder:text-[16px] bg-transparent w-full rounded-sm"
											/>
										</div>
									</div>
								</div>
								{/* email */}
								<div>
									<label
										htmlFor="email"
										className="text-sm">
										Email
									</label>
									<div className="rounded-[4px] focus-within:border-white focus-within:border-2 duration-150 border border-gray-400 w-full">
										<input
											type="text"
											placeholder="Email"
											name="email"
											onChange={handlechange}
											value={signupdata.email}
											className="p-3   text-sm focus:outline-none placeholder:text-[16px] bg-transparent w-full rounded-sm"
										/>
									</div>
								</div>
								{/* Username */}
								<div>
									<label
										htmlFor="email"
										className="text-sm">
										Username
									</label>
									<div className="rounded-[4px] focus-within:border-white focus-within:border-2 duration-150 border border-gray-400 w-full">
										<input
											type="text"
											placeholder="Username"
											name="username"
											onChange={handlechange}
											value={signupdata.username}
											className="p-3   text-sm focus:outline-none placeholder:text-[16px] bg-transparent w-full rounded-sm"
										/>
									</div>
								</div>
								{/* Password */}
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
											onChange={handlechange}
											value={signupdata.password}
											className="p-3   text-sm focus:outline-none placeholder:text-[16px] bg-transparent w-full rounded-sm"
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
							<div className="bg-green-600 hover:scale-105 duration-150 cursor-pointer p-3 text-center rounded-full font-semibold text-black" onClick={handlesubmit}>
								<div>Sign Up</div>
							</div>
						</div>
						<div className="w-full border border-[#252524]"></div>
						<div className="flex gap-1">
							<div className="text-[#a59e95]">Already have an account?</div>
							<Link
								to="/login"
								onClick={() => window.scrollTo(0, 0)}
								className="underline hover:text-green-500 duration-100 cursor-pointer">
								Log in here.
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
