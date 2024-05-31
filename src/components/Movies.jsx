import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";
import Loader from "./Loading";
import MovieCard from "./MovieCard";

const Movies = () => {
  const movie = useSelector((state) => state.movies);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(fetchMovies());
    console.log(movie);
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <main className="mx-auto p-4 h-full bg-slate-100 ">
      <h2 className="text-center text-3xl font-bold font-sans">All Movies</h2>
      {error && (
        <div className="text-red-700 text-xl text-center">
          Some error occured during fetch movie api call
        </div>
      )}
      {movie &&
        movie.map((mov) => <MovieCard movie={mov} key={mov.id} fav={false} />)}
    </main>
  );
};

export default Movies;
