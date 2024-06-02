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
    <div className="flex items-center gap-6 m-2 xs:flex-col xs:gap-1 xs:p-2 border border-black rounded-lg hover:scale-105 duration-200 cursor-pointer">
      <a
        href={movie.imdb_url}
        target="_blank"
        className="flex-1 xs:flex-initial"
      >
        <div className="flex xs:flex-col xs:items-center gap-1 p-2 font-mono ">
          <img
            src={poster}
            alt={movie.image}
            className="h-[100px] xs:w-[150px]"
          />
          <div className="flex flex-col gap-2 xs:gap-1">
            <h3 className="border-b xs:text-base sm:text-base text-lg">
              {movie.movie}
            </h3>
            <p className="border-b xs:text-base  sm:text-base text-lg">
              IMDb Rating : {movie.rating}
            </p>
          </div>
        </div>
      </a>
      <button
        className="w-fit p-1 h-fit mx-2 bg-blue-300 text-white rounded-sm xs:text-sm sm:text-base text-lg  hover:bg-blue-500"
        onClick={toggleFav}
      >
        {movie.isFav ? "Unfavourite" : "Favourite"}
      </button>
    </div>
  );
};

export default MovieCard;
