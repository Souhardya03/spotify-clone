import "./App.css";
import Home from "./components/pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import Search from "./components/pages/Search/Search";
import Content from "./components/pages/Content/Content";
import MyLibrary from "./components/pages/MyLibrary/MyLibrary";
import PlaylistPage from "./components/pages/Playlist/PlaylistPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<Content />} />
                <Route path="search" element={<Search />} />
                <Route path="my-songs" element={<MyLibrary />} />
                <Route path="playlist/:id" element={<PlaylistPage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}

export default App;
