import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils";

import axios from "axios";

export const getMovies = createAsyncThunk("dash/getMovies", async (keyword) => {
  const options = {
    method: "GET",
    url: `https://imdb-search2.p.rapidapi.com/${keyword}`,
    headers: {
      "X-RapidAPI-Key": "291956e6a0msh45c40c5ab4a881ep1bea65jsn220317b787e4",
      "X-RapidAPI-Host": "imdb-search2.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    showToast("Error occured while trying to get movies", "error");
    console.error(error);
  }
});

export const getMoviesSlice = createSlice({
  name: "getMovies",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const selectGetMovies = (state) => state.getMovies;
export default getMoviesSlice.reducer;
