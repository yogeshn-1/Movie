import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export const FavouriteMovies = () => {
  const favMovies = useSelector((state) => state.favMovies);
  return (
    <main className="mx-auto p-4 max-w-5xl ">
      <h2 className="text-center text-3xl font-bold font-sans">
        Favourite Movies
      </h2>
      {favMovies?.length === 0 ? (
        <div className="text-center text-2xl font-mono text-red-400 m-4">
          You have no favourite movies{" "}
        </div>
      ) : (
        favMovies?.map((mov) => <MovieCard movie={mov} key={mov.id} />)
      )}
    </main>
  );
};
