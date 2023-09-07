import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils";

import axios from "axios";

export const getOneMusic = createAsyncThunk("dash/getOneMusic", async (id) => {
  console.log(id);
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/tracks/",
    params: {
      ids: id,
    },
  headers: {
    'X-RapidAPI-Key': 'f1d23fd19fmshaeef04c8c4629e4p197180jsn3943ae586bd7',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
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

export const getOneMusicSlice = createSlice({
  name: "getOneMusic",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [getOneMusic.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    [getOneMusic.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getOneMusic.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const selectGetOneMusic = (state) => state.getOneMusic;
export default getOneMusicSlice.reducer;

// Example data:
// {
//     "tracks": [
//       {
//         "album": {
//           "album_type": "single",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/3t8WiyalpvnB9AObcMufiE"
//               },
//               "id": "3t8WiyalpvnB9AObcMufiE",
//               "name": "Mahmut Orhan",
//               "type": "artist",
//               "uri": "spotify:artist:3t8WiyalpvnB9AObcMufiE"
//             },
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/40Hr91B6wn9pO83Gj0JMrP"
//               },
//               "id": "40Hr91B6wn9pO83Gj0JMrP",
//               "name": "Ali Arutan",
//               "type": "artist",
//               "uri": "spotify:artist:40Hr91B6wn9pO83Gj0JMrP"
//             },
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/5xkqotsRPu6KQ4PiWjSGQf"
//               },
//               "id": "5xkqotsRPu6KQ4PiWjSGQf",
//               "name": "Selin",
//               "type": "artist",
//               "uri": "spotify:artist:5xkqotsRPu6KQ4PiWjSGQf"
//             }
//           ],
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b273fa258529452f4ed34cc961b1",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e02fa258529452f4ed34cc961b1",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d00004851fa258529452f4ed34cc961b1",
//               "width": 64
//             }
//           ],
//           "name": "In Control (feat. Selin)",
//           "release_date": "2020-10-30",
//           "release_date_precision": "day",
//           "total_tracks": 1,
//           "type": "album",
//           "uri": "spotify:album:1B68g8b4wpedNDvvQLAoCe"
//         },

//         "disc_number": 1,
//         "duration_ms": 179232,
//         "explicit": false,
//         "id": "4WNcduiCmDNfmTEz7JvmLv",
//         "is_local": false,
//         "is_playable": true,
//         "name": "In Control (feat. Selin)",
//         "popularity": 57,
//         "preview_url": "https://p.scdn.co/mp3-preview/315b151078df729934712ed1cc21e11506c64017?cid=f6a40776580943a7bc5173125a1e8832",
//         "track_number": 1,
//         "type": "track",
//         "uri": "spotify:track:4WNcduiCmDNfmTEz7JvmLv"
//       }
//     ]
//   }
