import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils";

import axios from "axios";

export const getOneMovie = createAsyncThunk("dash/getOneMovie", async (id) => {
  const options = {
    method: "GET",
    url: "https://mdblist.p.rapidapi.com/",
    params: { i: id },
    headers: {
      "X-RapidAPI-Key": "291956e6a0msh45c40c5ab4a881ep1bea65jsn220317b787e4",
      "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    showToast("Error occured while trying to music results", "error");
    console.error(error);
  }
});

export const getOneMovieSlice = createSlice({
  name: "getOneMovie",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [getOneMovie.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    [getOneMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getOneMovie.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const selectGetOneMovie = (state) => state.getOneMovie;
export default getOneMovieSlice.reducer;
