import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils";

import axios from "axios";

export const getMusic = createAsyncThunk("dash/getMusic", async (keyword) => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: keyword,
      type: "tracks",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },
    headers: {
      "X-RapidAPI-Key": "291956e6a0msh45c40c5ab4a881ep1bea65jsn220317b787e4",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
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

export const getMusicSlice = createSlice({
  name: "getMusic",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [getMusic.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    [getMusic.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getMusic.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const selectGetMusic = (state) => state.getMusic;
export default getMusicSlice.reducer;
