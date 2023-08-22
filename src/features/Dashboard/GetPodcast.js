import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showToast } from "../../utils";

export const getPodcast = createAsyncThunk(
  "dash/getPodcast",
  async (keyword) => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: keyword,
        type: "podcasts",
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
      showToast("Error occured while trying to get podcast results", "error");
      console.error(error);
    }
  }
);

export const getPodcastSlice = createSlice({
  name: "getPodcast",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [getPodcast.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    [getPodcast.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getPodcast.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const selectGetPodcast = (state) => state.getPodcast;
export default getPodcastSlice.reducer;
