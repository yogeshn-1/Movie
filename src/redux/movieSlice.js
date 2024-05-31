import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
  favMovies: [],
  isLoading: false,
  error: false,
};

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const res = await fetch(import.meta.env.VITE_BASEURL);
  const movie = await res.json();
  movie.sort((movA, movB) => movB.rating - movA.rating);
  movie.forEach((mov) => (mov.isFav = false));
  return movie;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    favourite: (state, action) => {
      state.movies.forEach((mov) => {
        mov.id === action.payload.id ? (mov.isFav = true) : mov;
      });
      state.favMovies.push({ ...action.payload, isFav: true });
    },
    unfavourite: (state, action) => {
      state.favMovies = state.favMovies.filter(
        (mov) => mov.id !== action.payload
      );
      state.movies.forEach((mov) =>
        mov.id === action.payload ? (mov.isFav = false) : mov
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const { favourite, unfavourite } = movieSlice.actions;
export default movieSlice.reducer;
