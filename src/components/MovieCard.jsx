import React, { useState } from "react";
import poster from "../assets/poster.jpg";
import { useDispatch } from "react-redux";
import { favourite, unfavourite } from "../redux/movieSlice";
const MovieCard = ({ movie, fav }) => {
  const [isfav, setFav] = useState(fav);
  const dispatch = useDispatch();
  const toggleFav = () => {
    console.log("previously isfav : ", isfav, " fav : ", fav);
    setFav(!isfav);
    if (!isfav) dispatch(favourite(movie));
    else dispatch(unfavourite(movie.id));
    console.log("after isfav : ", isfav, " fav : ", fav);
  };
  return (
    <div className="flex gap-1 border p-1 rounded-sm self-center">
      <img src={poster} alt={movie.image} className="h-[100px]" />
      <div className="flex flex-col gap-2">
        <h3 className="border-b">{movie.movie}</h3>
        <p className="border-b">IMDb Rating : {movie.rating}</p>
        <button
          className="w-fit p-1 bg-blue-300 rounded-sm"
          onClick={toggleFav}
        >
          {isfav ? "Unfavourite" : "Favourite"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
