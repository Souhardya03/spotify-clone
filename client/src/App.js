import "./App.css";
import Home from "./components/pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import Search from "./components/pages/Search/Search";
import Content from "./components/pages/Content/Content";
import MyLibrary from "./components/pages/MyLibrary/MyLibrary";
function App() {
	return (
		<>
			<Routes>
				<Route element={<Home />}>
					<Route
						path="/"
						element={<Content />}
					/>
					<Route
						path="/search"
						element={<Search />}
					/>
					<Route
						path="/my-songs"
						element={<MyLibrary />}
					/>
				</Route>
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
