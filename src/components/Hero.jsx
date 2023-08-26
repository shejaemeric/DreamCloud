import Navbar from "./Navbar";
import { getMovies } from "../features/Dashboard/GetMovies";
import { getMusic } from "../features/Dashboard/GetMusic";
import { getPodcast } from "../features/Dashboard/GetPodcast";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./data.css";

const Hero = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [movies, setMovies] = useState();
  const [music, setMusic] = useState();
  const [podcasts, setPodcasts] = useState();

  // Define a state variable to store the keyword
  const [keyword, setKeyword] = useState("");
  const [searched, setSearched] = useState(false);

  // functions to search anything
  const searchMovies = async () => {
    const res = await dispatch(getMovies(keyword));
    setMovies(res.payload.description);
    console.log(res.payload.description);
  };

  const searchPodcasts = async () => {
    const res = await dispatch(getPodcast(keyword));
    setPodcasts(res.payload.podcasts.items);
    console.log(res.payload.podcasts.items);
  };

  const searchMusic = async () => {
    const res = await dispatch(getMusic(keyword));
    setMusic(res.payload.tracks.items);
    console.log(res.payload.tracks.items);
  };

  const search = () => {
    props.searched();
    if (keyword && keyword !== "") {
      searchMovies();
      searchPodcasts();
      searchMusic();
      setSearched(true);
    }
  };

  // Function to handle input change and update the keyword state
  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <div className="hero bg-black/30">
        <Navbar />

        <div className="flex flex-col justify-center gap-8 h-full pl-10">
          <h1 className=" font-bold text-5xl w-[50%] ">
            Unlimited movies, music, and more
          </h1>
          <p className="w-[40%] text-[20px]">
            All your forms of entertainment in one place for free anywhere,
            anytime
          </p>

          <div>
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
              <i class="fa-solid fa-magnifying-glass text-white text-[18px]"></i>
            </button>
          </div>

          <p className="w-1/2 text-white/60">
            <span className=" font-semibold">Trending searches: </span>
            Travis Scott Utopia, Oppenheimer, Mission Impossible, Barbie,Post
            Malone mourning, Pink Tape Lil uzi vert,Top Gun Maverick, Jujutsu
            Kaisen 0, Nf Hope, The Flash, The Joe Rogan Experience, Full Send
            Podcast, Impaulsive podcast...
          </p>
        </div>
      </div>
      {searched && movies && music && podcasts && (
        <div>
          <h2>Movies</h2>
          {/* ======================================================== */}
          {movies.map((item) => {
            <div className="list">
              <div className="container">
                <div className="movie-card">
                  <div
                    className="movie-header"
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                      backgroundImage: `url("${item?.IMG_POSTER}")`,
                    }}
                  >
                    <div className="header-icon-container"></div>
                  </div>
                  <div className="movie-content">
                    <div className="movie-content-header">
                      <a href="#">
                        <h3 className="movie-title">{item?.Title}</h3>
                      </a>
                    </div>
                    <div className="movie-info">
                      <div className="info-section">
                        <label>Year</label>
                        <span>{item.YEAR}</span>
                      </div>
                      <div className="info-section">
                        <label>RANK</label>
                        <span>{item.RANK}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>;
          })}

          {/* ========================================================= */}

          <h2>Music</h2>
          {/* ======================================================== */}
          {podcasts.map((item) => {
            <div className="list">
              <div className="container">
                <div className="movie-card">
                  <div
                    className="movie-header"
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                      backgroundImage: `url("${item?.data?.coverArt?.sources[0].url}")`,
                    }}
                  >
                    <div className="header-icon-container"></div>
                  </div>
                  <div className="movie-content">
                    <div className="movie-content-header">
                      <a href="#">
                        <h3 className="movie-title">{item?.data?.name}</h3>
                      </a>
                    </div>
                    <div className="movie-info">
                      <div className="info-section">
                        <label>Date</label>
                        <span>Sun 8 Sept - 10:00PM</span>
                      </div>
                      <div className="info-section">
                        <label>Views</label>
                        <span>3M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>;
          })}
          {/* ========================================================= */}
          <h2>Movies</h2>
          {/* ======================================================== */}
          <div className="list">
            {movies.map((item, index) => {
              return (
                <div className="container" key={index}>
                  <div className="movie-card">
                    <div
                      className="movie-header"
                      style={{
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        backgroundImage: `url("${item?.data?.coverArt?.sources[0].url}")`,
                      }}
                    >
                      <div className="header-icon-container"></div>
                    </div>
                    <div className="movie-content">
                      <div className="movie-content-header">
                        <a href="#">
                          <h3 className="movie-title">{item?.data?.name}</h3>
                        </a>
                      </div>
                      <div className="movie-info">
                        <div className="info-section">
                          <label>Date</label>
                          <span>Sun 8 Sept - 10:00PM</span>
                        </div>
                        <div className="info-section">
                          <label>Views</label>
                          <span>1M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* ========================================================= */}
        </div>
      )}
    </div>
  );
};

export default Hero;
