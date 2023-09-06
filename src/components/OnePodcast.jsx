/* eslint-disable react/prop-types */
import "./onePodcast.css";
import Modal from "@mui/material/Modal";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import Player from "react-material-music-player"; // default export
import { Track, PlayerInterface } from "react-material-music-player";
import { green, purple } from "@mui/material/colors";

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    type: "dark", // Use dark mode
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          // Set the text color for ListItem components here
          color: "blue",
        },
      },
    },
  },
});
const items = [
  { title: "Item 1" },
  { title: "Item 2" },
  { title: "Item 3" },
  // Add more items as needed
];

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

function OnePodcast(props) {
  const [selectedRes, setSelectedRes] = useState(null);
  const [openPlayer, setOpenPlayer] = useState(false);
  const data = props.data.data;

  const createTrack = (selectedRes) => {
    const newTrack = new Track(
      selectedRes?.id,
      data?.coverArt?.sources[1].url,
      data?.name,
      data?.publisher?.name,
      selectedRes?.audioPreview?.url
    );
    setOpenPlayer(true);
    PlayerInterface.clearPlaylist();
    PlayerInterface.setPlaylist();
    PlayerInterface.setPlaylist([newTrack]);
    PlayerInterface.play();
  };

  return (
    <Modal
      open={props.open}
      onClose={() => {
        PlayerInterface.stop();
        props.handleClose();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgb(0 0 0 / 93%)",
        },
      }}
    >
      <div>
        <div className="movie_card" id="bright" style={{ alignItems: "start" }}>
          <div className="info_section" style={{ flexBasis: "35vw" }}>
            {openPlayer && (
              <ThemeProvider theme={theme}>
                <Player sx={{ zIndex: 500, width: "100%" }} />
              </ThemeProvider>
            )}
            <div className="movie_header">
              <img className="locandina" src={data?.coverArt?.sources[1].url} />
              <h1 style={{ fontSize: "24px" }}>{data?.name}</h1>
              <h4>{`PUBLISHER - ${data?.publisher?.name}`}</h4>
            </div>
            <br />
            <div
              className="movie_desc"
              style={{ maxHeight: "40vh", overflowY: "scroll" }}
            >
              <p className="text">
                {selectedRes?.description ??
                  props.results[0].entity?.data?.description}
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", flexBasis: "45vw" }}>
            <div
              style={{
                textAlign: "center",
                height: "80vh",
                overflowY: "scroll",
              }}
            >
              <ThemeProvider theme={darkTheme}>
                <List>
                  {props.results?.map((item, index) => (
                    <ListItem
                      sx={{
                        color: "white",
                        border: "1px solid #1a1a1a",
                        bgcolor: "#030303cc",
                      }}
                      key={index}
                      onClick={() => {
                        setSelectedRes(item.entity?.data);
                      }}
                    >
                      <ListItemText
                        sx={{ color: "white" }}
                        style={{
                          color: "#fff !important",
                          bgcolor: "#fff",

                          px: 1,
                          py: 2,
                          " span": {
                            color: "white !important",
                          },
                        }}
                        primary={`${item.entity?.data?.name}`} // Auto-numbering // Set text color
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          color="primary"
                          sx={{ backgroundColor: "#3382a6" }}
                          edge="end"
                          aria-label="play"
                          onClick={() => {
                            setSelectedRes(item.entity?.data);
                            createTrack(item.entity?.data);
                          }}
                        >
                          <PlayArrowIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

// item.entity?.data?.audio?.items[0].url

export default OnePodcast;
