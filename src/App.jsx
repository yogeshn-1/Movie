import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import { FavouriteMovies } from "./components/FavouriteMovies";
import Header from "./components/Header";

function App() {
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
