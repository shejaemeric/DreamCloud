import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import getMoviesReducer from "./features/Dashboard/GetMovies";
import getPodcastReducer from "./features/Dashboard/GetPodcast";
import getMusicReducer from "./features/Dashboard/GetMusic";
import getUserReducer from "./features/Dashboard/GetUser";
import getOneMovieReducer from "./features/Dashboard/GetOneMovie";
import getOnePodcastReducer from "./features/Dashboard/GetOnePodcast";
import getOneMusicReducer from "./features/Dashboard/GetOneMusic";

const reducer = {
  getMusic: getMusicReducer,
  getMovies: getMoviesReducer,
  getPodcast: getPodcastReducer,
  getUser: getUserReducer,
  getOneMovie: getOneMovieReducer,
  GetOneMusic: getOneMusicReducer,
  GetOnePodcast: getOnePodcastReducer,
};

const middleware = [];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === `development`) {
  middleware.push(logger);
}

export default configureStore({
  reducer,
  middleware: [thunk, ...middleware],
});
