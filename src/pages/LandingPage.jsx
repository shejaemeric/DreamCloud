import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import { useState } from "react";
import { getMovies } from "../features/Dashboard/GetMovies";
import { getMusic } from "../features/Dashboard/GetMusic";
import { getPodcast } from "../features/Dashboard/GetPodcast";
import { useDispatch } from "react-redux";
import Search from "../components/Search";
import { getOneMovie } from "../features/Dashboard/GetOneMovie";
import { getOneMusic } from "../features/Dashboard/GetOneMusic";
import { getOnePodcast } from "../features/Dashboard/GetOnePodcast";

const LandingPage = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const [searched, setSearched] = useState(false);
  const [movies, setMovies] = useState();
  const [music, setMusic] = useState();
  const [podcasts, setPodcasts] = useState();
  const [oneMovies, setOneMovies] = useState();
  const [oneMusic, setOneMusic] = useState();
  const [onePodcasts, setOnePodcasts] = useState();

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

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
    if (keyword && keyword !== "") {
      searchMovies();
      searchPodcasts();
      searchMusic();
      setSearched(true);
    }
  };

  const searchOneMusic = async (id) => {
    const res = await dispatch(getOneMusic(id));
    setOneMusic(res.payload.tracks.items);
    console.log(res.payload.tracks.items);
  };

  const searchOneMovies = async (id) => {
    const res = await dispatch(getOneMovie(id));
    setOneMovies(res.payload.description);
    console.log(res.payload.description);
  };

  const searchOnePodcasts = async (id) => {
    const res = await dispatch(getOnePodcast(id));
    setOnePodcasts(res.payload.podcasts.items);
    console.log(res.payload.podcasts.items);
  };

  if (searched) {
    return (
      <Search
        handleInputChange={handleInputChange}
        search={search}
        movies={movies}
        podcasts={podcasts}
        music={music}
      />
    );
  }

  return (
    <div>
      <Hero
        searched={() => {
          setSearched(true);
        }}
        handleInputChange={handleInputChange}
        search={search}
      />
      <Sections />
      <Footer />
    </div>
  );
};

export default LandingPage;
