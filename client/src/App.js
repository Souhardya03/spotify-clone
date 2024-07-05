import "./App.css";
import Home from "./components/pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<SignUp />}
				/>
			</Routes>
		</>
	);
}

export default App;
