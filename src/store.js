import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import getMoviesReducer from "./features/Dashboard/GetMovies";
import getPodcastReducer from "./features/Dashboard/GetPodcast";
import getMusicReducer from "./features/Dashboard/GetMusic";
import getUserReducer from "./features/Dashboard/GetUser";

const reducer = {
  getMusic: getMusicReducer,
  getMovies: getMoviesReducer,
  getPodcast: getPodcastReducer,
  getUser: getUserReducer,
};

const middleware = [];

if (process.env.NODE_ENV === `development`) {
  middleware.push(logger);
}

export default configureStore({
  reducer,
  middleware: [thunk, ...middleware],
});
