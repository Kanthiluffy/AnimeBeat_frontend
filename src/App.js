import "./output.css";
import {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import ArtistLoggedInHomeComponent from "./routes/ArtistLoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import SearchPage from "./routes/SearchPage";
import Library from "./routes/Library";
import SinglePlaylistView from "./routes/SinglePlaylistView";
import {useCookies} from "react-cookie";
import songContext from "./contexts/songContext";
import ArtistLogin from "./routes/ArtistLogin";
import ArtistRegister from "./routes/ArtistRegister";
import AdminDashboard from "./components/AdminDashboard";


function App() {
    const [currentSong, setCurrentSong] = useState(null);
    const [soundPlayed, setSoundPlayed] = useState(null);
    const [isPaused, setIsPaused] = useState(true);
    const [cookie, setCookie] = useCookies(["token", "role"]);
    
    return (
        <div className="w-screen h-screen font-poppins">
            <BrowserRouter>
                {cookie.token ? (
                    <songContext.Provider
                        value={{
                            currentSong,
                            setCurrentSong,
                            soundPlayed,
                            setSoundPlayed,
                            isPaused,
                            setIsPaused,
                        }}
                    >
                        <Routes>
                            {cookie.role === "user" && (
                                <>
                                    {/* <Route path="/uploadSong" element={<UploadSong />} /> */}
                                    <Route path="/home" element={<LoggedInHomeComponent />} />
                                    <Route path="/myMusic" element={<MyMusic />} />
                                    <Route path="/search" element={<SearchPage />} />
                                    <Route path="/library" element={<Library />} />
                                    <Route path="/playlist/:playlistId" element={<SinglePlaylistView />} />
                                    <Route path="*" element={<Navigate to="/home" />} />
                                </>
                            )}
                            {cookie.role === "artist" && (
                                <>
                                <Route path="/home" element={<ArtistLoggedInHomeComponent />} />
                                    <Route path="/uploadSong" element={<UploadSong />} />
                                    <Route path="/myMusic" element={<MyMusic />} />
                                    <Route path="/search" element={<SearchPage />} />
                                    <Route path="/library" element={<Library />} />
                                    <Route path="/playlist/:playlistId" element={<SinglePlaylistView />} />
                                    <Route path="*" element={<Navigate to="/home" />} />
                                </>
                            )}
                        </Routes>
                    </songContext.Provider>
                ) : (
                    <Routes>
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/artistlogin" element={<ArtistLogin />} />
                        <Route path="/artistsignup" element={<ArtistRegister />} />
                        <Route path="/home" element={<HomeComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/signup" element={<SignupComponent />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                )}
            </BrowserRouter>
        </div>
    );
}
const HelloComponent = () => {
    return <div>This is hello from component</div>;
};
export default App;