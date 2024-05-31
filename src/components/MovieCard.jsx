import React, { useState } from "react";
import poster from "../assets/poster.jpg";
import { useDispatch } from "react-redux";
import { favourite, unfavourite } from "../redux/movieSlice";
const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const toggleFav = () => {
    if (!movie.isFav) dispatch(favourite(movie));
    else dispatch(unfavourite(movie.id));
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
          {movie.isFav ? "Unfavourite" : "Favourite"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
