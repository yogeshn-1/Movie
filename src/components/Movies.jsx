import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "./Loading";
import MovieCard from "./MovieCard";

const Movies = () => {
  const movie = useSelector((state) => state.movies);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  return isLoading ? (
    <Loader />
  ) : (
    <main className="mx-auto p-4 h-full max-w-5xl ">
      <h2 className="text-center text-3xl font-bold font-sans m-2">
        All Movies
      </h2>
      {error && (
        <div className="text-red-700 text-xl text-center">
          Some error occured during fetch movie api call
        </div>
      )}
      {movie && movie.map((mov) => <MovieCard movie={mov} key={mov.id} />)}
    </main>
  );
};

export default Movies;
