/* eslint-disable react/prop-types */

import Navbar from "./Navbar";
import Data from "./Data";
import Footer from "./Footer";
import OneMovies from "./OneMovies";
import { useState } from "react";
import { getOneMovie } from "../features/Dashboard/GetOneMovie";
import { getOneMusic } from "../features/Dashboard/GetOneMusic";
import { getOnePodcast } from "../features/Dashboard/GetOnePodcast";
import { useDispatch } from "react-redux";
import Player from "react-material-music-player"; // default export
import { Track, PlayerInterface } from "react-material-music-player";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Stack } from "@mui/material";
import OnePodcast from "./OnePodcast";
import { showToast } from "../utils";

function Search({ handleInputChange, search, movies, podcasts, music }) {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);

  const [openPlayer, setOpenPlayer] = useState(false);
  const [selected, setSelected] = useState();
  const [selectedRes, setSelectedRes] = useState();
  const [selectedType, setSelectedType] = useState();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",

      justifyContent: "start",
      gap: "2vw",
    },
    title: {
      fontSize: "36px",
      color: "white",
      fontWeight: "bold",
      marginTop: "120px",
    },
  };
  const handleClose = () => {
    setOpenPopup(false);
  };

  const createTrack = (track) => {
    const data = track?.tracks[0];
    const newTrack = new Track(
      data?.id,
      data?.images
        ? data?.images[1].url
        : selected?.data?.albumOfTrack?.coverArt?.sources[0].url,
      data?.name,
      data?.artists[0].name,
      data?.preview_url
    );
    PlayerInterface.clearPlaylist();
    PlayerInterface.setPlaylist([]);
    PlayerInterface.setPlaylist([newTrack]);

    PlayerInterface.play();
    // PlayerInterface.setPlaylist(
    //   Track[
    //     {
    //       ID: data?.id,
    //       coverArt: data?.images
    //          data?.images[1].url
    //         : selectedType?.data?.albumOfTrack?.coverArt?.sources[2].url,
    //       title: data?.name,
    //       artist: data?.artists[0].name,
    //       source: data?.preview_url, // url to music file
    //     }
    //   ]
    // );

    // new Track(
    //     ID: string, // unique ID used in shuffling and sorting
    //     coverArt: string,
    //     title: string,
    //     artist: string,
    //     source: string // url to music file
    // )
    // PlayerInterface.setPlaylist(Track[])
  };

  const handleOpen = async (type, id, item) => {
    console.log(id);
    console.log(item);
    setSelected(item);
    const endPoint =
      type === "movie"
        ? getOneMovie
        : type === "music"
        ? getOneMusic
        : getOnePodcast;
    const result = await dispatch(endPoint(id));

    setSelectedType(type);
    if (type === "movie") {
      if (result.payload.trailer) {
        setSelected(result.payload);
        setOpenPopup(true);
        PlayerInterface.stop();
        setOpenPlayer(false);
      } else {
        showToast("Error: Could not get movie info...", "error");
      }
    } else if (type === "music") {
      createTrack(result.payload);
      setOpenPopup(false);
      setOpenPlayer(true);
    } else {
      setOpenPopup(true);
      PlayerInterface.stop();
      setOpenPlayer(false);
      setSelectedRes(result?.payload?.data?.podcastUnionV2?.episodesV2?.items);
    }
    console.log(result);
  };

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      background: {
        paper: "#0A1929",
      },
      action: {
        active: "#fff",
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
      },
      text: {
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
        primary: "#fff",
        secondary: "#AAB4BE",
      },
    },
  });

  return (
    <div style={{ paddingTop: "30px" }}>
      {selectedType === "podcast" ? (
        <OnePodcast
          open={openPopup}
          handleClose={handleClose}
          data={selected}
          results={selectedRes}
        />
      ) : (
        <OneMovies open={openPopup} handleClose={handleClose} data={selected} />
      )}

      {openPlayer && (
        <ThemeProvider theme={theme}>
          <Player sx={{ zIndex: 500 }} />
        </ThemeProvider>
      )}
      <Navbar
        includeSearch
        handleInputChange={handleInputChange}
        search={search}
      ></Navbar>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <input
          className=" mr-6 w-[440px] py-3 px-4 bg-transparent border-2 rounded-full outline-none"
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <button
          className=" bg-primaryPurple w-[64px] h-[64px] rounded-full "
          onClick={search}
        >
          <i className="fa-solid fa-magnifying-glass text-white text-[18px]"></i>
        </button>
      </Stack>

      {movies && podcasts && music ? (
        <div style={{ width: "96vw", margin: "auto" }}>
          <h2 style={styles.title}>Movies</h2>
          <div style={styles.container}>
            {movies?.map((item, index) => (
              <Data
                data={item}
                key={index}
                type="movie"
                onClick={() => handleOpen("movie", item["#IMDB_ID"], item)}
              ></Data>
            ))}
          </div>

          <h2 style={styles.title}>Musics</h2>
          <div style={styles.container}>
            {music?.map((item, index) => (
              <Data
                data={item}
                key={index}
                type="music"
                onClick={() => handleOpen("music", item?.data?.id, item)}
              ></Data>
            ))}
          </div>
          <h2 style={styles.title}>Podcasts</h2>
          <div style={styles.container}>
            {podcasts?.map((item, index) => (
              <Data
                data={item}
                key={index}
                type="podcast"
                onClick={() =>
                  handleOpen("podcast", item?.data?.uri?.split(":")[2], item)
                }
              ></Data>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ height: "100vh" }}></div>
      )}
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Search;
