import { createSlice } from "@reduxjs/toolkit";

const moviesSlce = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addTopRatedMovies,
  addPopularMovies,
  addNowPlayingMovies,
  addMovieTrailer,
  addUpcomingMovies,
} = moviesSlce.actions;
export default moviesSlce.reducer;
