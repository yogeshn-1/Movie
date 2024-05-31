import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavouriteMovies } from "./components/FavouriteMovies";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./redux/movieSlice";
import Movies from "./components/Movies";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/fav-movies" element={<FavouriteMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
