import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils";

import axios from "axios";

export const getOneMovie = createAsyncThunk("dash/getOneMovie", async (id) => {
  console.log(id);
  const options = {
    method: "GET",
    url: "https://mdblist.p.rapidapi.com/",
    params: { i: id },
  headers: {
    'X-RapidAPI-Key': 'f1d23fd19fmshaeef04c8c4629e4p197180jsn3943ae586bd7',
    'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
  }
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    showToast("Error occured while trying to music results", "error");
    console.error(error);
  }
});

//link for recharge:https://rapidapi.com/linaspurinis/api/mdblist

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

// example response:

// {
//     "title": "Jaws",
//     "year": 1975,
//     "released": "1975-06-19",
//     "description": "When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.",
//     "runtime": 124,
//     "score": 86,
//     "language": "en",
//     "country": "us",
//     "certification": "PG",
//     "status": "released",
//     "trailer": "http://youtube.com/watch?v=U1fu_sA7XhE",
//     "poster": "https://image.tmdb.org/t/p/original/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg",
//     "backdrop": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//3nYlM34QhzdtAvWRV5bN4nLtnTc.jpg",
//     "response": true,
//     "apiused": 1
//   }
