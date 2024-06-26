import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import FavoritesPage from "./pages/FavoritesPage";
import ErrorPage from "./pages/ErrorPage";
import MovieDetails from "./pages/MovieDetails";
import CreateMoviePage from "./pages/CreateMoviePage";
import { Toaster, toast } from "react-hot-toast";
import WatchlistPage from "./pages/WatchlistPage";
import SearchPage from "./pages/SearchPage";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />

        <Route path="/movies/:movieId" element={<MovieDetails />} />
        
        <Route path="/movie/create" element={<CreateMoviePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
