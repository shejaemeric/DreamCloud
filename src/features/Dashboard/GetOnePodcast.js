import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils";

import axios from "axios";

export const getOnePodcast = createAsyncThunk(
  "dash/getOnePodcast",
  async (id) => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/podcast_episodes/",
      params: {
        id: id,
        offset: "0",
        limit: "50",
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
  }
);

export const getOnePodcastSlice = createSlice({
  name: "getOnePodcast",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [getOnePodcast.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    [getOnePodcast.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getOnePodcast.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const selectGetOnePodcast = (state) => state.getOnePodcast;
export default getOnePodcastSlice.reducer;
