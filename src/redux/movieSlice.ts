import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name : "movie",
  initialState: {
    moviesList: null,
  },
  reducers: {
    addMovies : (state, action) => {
      state.moviesList = action.payload;
    }
  }
})

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;