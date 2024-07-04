const UserModel = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const authHelper = require("../helper/authHelper");
// Register
const registerController = async (req, res) => {
	try {
		const { firstName, lastName, email, username, password } = req.body;
		const existusername = await UserModel.findOne({ username });
		const existemail = await UserModel.findOne({ email });
		if (existusername || existemail)
			return res.status(400).json({ err: "User Already Exists" });
		const hashedPassword = await authHelper.hashPassword(password);
		const user = await UserModel.create({
			firstName,
			lastName,
			email,
			username,
			password:hashedPassword,
		});
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "10d",
		});
		return res.status(200).json({ user, token });
	} catch (error) {
		console.log(error);
		console.log("error from register controller");
	}
};

//Login
const loginController = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await UserModel.findOne({ email });
		if (!user) return res.status(400).json({ err: "User Not Found" });
		const isMatch = await authHelper.comparePassword(password, user.password);
		if (!isMatch) return res.status(400).json({ err: "Invalid Username or Password" });
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "35d",
		});
		return res.status(200).json({success:"Login Successfull", user, token });
	} catch (error) {
		console.log(error);
		console.log("Error from login controller");
	}
};


module.exports = { registerController,loginController };
