import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";

const Movies = () => {
  const movie = useSelector((state) => state.movies);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return isLoading ? <>Loading...</> : <div>Movies</div>;
};

export default Movies;
