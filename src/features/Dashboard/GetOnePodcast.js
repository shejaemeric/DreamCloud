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
        limit: "40",
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

// {
//     "data": {
//       "podcastUnionV2": {",
//         "name": "Stuff You Should Know",
//         "episodesV2": {
//           "items": [
//             {
//               "uid": "31474a9e0cf44e8c851b",
//               "entity": {
//                 "_uri": "spotify:episode:2ZbSUlJXjVGJcpeZGZaRfj",
//                 "data": {
//                   "__typename": "Episode",
//                   "id": "2ZbSUlJXjVGJcpeZGZaRfj",
//                   "uri": "spotify:episode:2ZbSUlJXjVGJcpeZGZaRfj",
//                   "name": "Selects: Body Odor: You Stink",
//                   "contents": [],
//                   "htmlDescription": "<p>Chuck and Josh end up making reduxes of past episodes on things like sweating and deodorant in this all-new episode on the science beneath what makes people smell. Learn all about your odor in this classic episode.</p><p>See <a href=\"https://omnystudio.com/listener\" rel=\"nofollow\">omnystudio.com/listener</a> for privacy information.</p>",
//                   "description": "Chuck and Josh end up making reduxes of past episodes on things like sweating and deodorant in this all-new episode on the science beneath what makes people smell. Learn all about your odor in this classic episode.See omnystudio.com/listener for privacy information.",
//                   "coverArt": {
//                     "sources": [
//                       {
//                         "url": "https://i.scdn.co/image/ab6765630000f68d863cc2d69ef7958af5cca4b5",
//                         "width": 64,
//                         "height": 64
//                       },
//                       {
//                         "url": "https://i.scdn.co/image/ab67656300005f1f863cc2d69ef7958af5cca4b5",
//                         "width": 300,
//                         "height": 300
//                       },
//                       {
//                         "url": "https://i.scdn.co/image/ab6765630000ba8a863cc2d69ef7958af5cca4b5",
//                         "width": 640,
//                         "height": 640
//                       }
//                     ]
//                   },
//                   "creator": null,
//                   "audio": {
//                     "items": [
//                       {
//                         "url": "https://p.scdn.co/mp3-preview/9ef3b85e21e3d8391857af600658a7c0418ceb39",
//                         "format": "OGG_VORBIS_96",
//                         "fileId": "9ef3b85e21e3d8391857af600658a7c0418ceb39"
//                       },
//                       {
//                         "url": "https://p.scdn.co/mp3-preview/d0c7b1b755fb47588ae6a84f0f50d6df71d061a8",
//                         "format": "AAC_24",
//                         "fileId": "d0c7b1b755fb47588ae6a84f0f50d6df71d061a8"
//                       },
//                       {
//                         "url": "https://p.scdn.co/mp3-preview/0c9e2507f3f9adb187ec0d14c22cc7db0cd132e8",
//                         "format": "MP4_128",
//                         "fileId": "0c9e2507f3f9adb187ec0d14c22cc7db0cd132e8"
//                       },
//                       {
//                         "url": "https://p.scdn.co/mp3-preview/b4556941b71da28e0977f321145d2fee4a1d82c9",
//                         "format": "MP4_128_DUAL",
//                         "fileId": "b4556941b71da28e0977f321145d2fee4a1d82c9"
//                       },
//                       {
//                         "url": "https://p.scdn.co/mp3-preview/b1fee7999d394a2c2c659505c62d031a26e0d514",
//                         "format": "MP4_128_CBCS",
//                         "fileId": "b1fee7999d394a2c2c659505c62d031a26e0d514"
//                       }
//                     ]
//                   },
//                   "audioPreview": {
//                     "url": "https://podz-content.spotifycdn.com/audio/clips/5anzndBIlzsHywYsUEoZj4/clip_534376_594376.mp3",
//                     "format": "MP3_96"
//                   },
//                   "duration": {
//                     "totalMilliseconds": 3347826
//                   },
//                   "contentRating": {
//                     "label": "NONE"
//                   },
//                   "releaseDate": {
//                     "isoString": "2023-09-02T09:00:00Z"
//                   },
//                   "playedState": {
//                     "playPositionMilliseconds": 0,
//                     "state": "NOT_STARTED"
//                   },
//                   "mediaTypes": [
//                     "AUDIO"
//                   ],
//                   "restrictions": {
//                     "paywallContent": false
//                   },
//                   "playability": {
//                     "playable": true,
//                     "reason": "PLAYABLE",
//                     "unplayabilityReasons": []
//                   },
//                   "sharingInfo": {
//                     "shareUrl": "https://open.spotify.com/episode/2ZbSUlJXjVGJcpeZGZaRfj?si=tcTq76bMStCcteXefmOg5Q",
//                     "shareId": "tcTq76bMStCcteXefmOg5Q"
//                   },
//                   "podcastV2": {
//                     "data": {
//                       "__typename": "Podcast",
//                       "uri": "spotify:show:0ofXAdFIQQRsCYj9754UFx",
//                       "name": "Stuff You Should Know",
//                       "coverArt": {
//                         "sources": [
//                           {
//                             "url": "https://i.scdn.co/image/ab6765630000f68d863cc2d69ef7958af5cca4b5",
//                             "width": 64,
//                             "height": 64
//                           },
//                           {
//                             "url": "https://i.scdn.co/image/ab67656300005f1f863cc2d69ef7958af5cca4b5",
//                             "width": 300,
//                             "height": 300
//                           },
//                           {
//                             "url": "https://i.scdn.co/image/ab6765630000ba8a863cc2d69ef7958af5cca4b5",
//                             "width": 640,
//                             "height": 640
//                           }
//                         ]
//                       },
//                       "trailerV2": null,
//                       "showTypes": []
//                     }
//                   },
//                   "type": "PODCAST_EPISODE",
//                   "segments": null,
//                   "contentInformation": null,
//                   "transcripts": {
//                     "items": []
//                   }
//                 }
//               }
//             }
//           ]
//         }
//       }
//     },
//   }
