import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
  isLoading: false,
  error: false,
};

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const res = await fetch(import.meta.env.VITE_BASEURL);
  const mov = await res.json();
  return mov;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    favourite: (state, action) => {},
    unfavourite: (state, action) => {},
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