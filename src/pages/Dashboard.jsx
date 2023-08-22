// import React from "react";
import { getMovies } from "../features/Dashboard/GetMovies";
import { getMusic } from "../features/Dashboard/GetMusic";
import { getPodcast } from "../features/Dashboard/GetPodcast";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [results, setResults] = useState();

  // Define a state variable to store the keyword
  const [keyword, setKeyword] = useState("");

  // functions to search anything
  const searchMovies = async (keyword) => {
    const res = await dispatch(getMovies(keyword));
    setResults(res.payload);
  };

  const searchPodcasts = async (keyword) => {
    const res = await dispatch(getPodcast(keyword));
    setResults(res.payload);
  };

  const searchMusic = async (keyword) => {
    const res = await dispatch(getMusic(keyword));
    setResults(res.payload);
  };

  // Function to handle input change and update the keyword state
  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("user"));
    if (!profile) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <div className="search-div">
        <input
          type="text"
          className="search-input"
          placeholder="Search something"
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={searchMovies}>
          Search Movies
        </button>
        <button className="search-button" onClick={searchPodcasts}>
          Search Podcast
        </button>
        <button className="search-button" onClick={searchMusic}>
          Search Music
        </button>
      </div>

      {/* Display the current keyword state */}
      <p>Search keyword: {keyword}</p>
      <p>Search results:</p>
      <div style={{ width: "90%", height: "30vh", overflowY: "scroll" }}>
        {JSON.stringify(results)}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <button className="custom-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
