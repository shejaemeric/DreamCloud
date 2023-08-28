/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "./Navbar";
import Data from "./Data";
import Footer from "./Footer";
import OneMovies from "./OneMovies";

function Search({ handleInputChange, search, movies, podcasts, music }) {
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

  return (
    <div style={{ paddingTop: "30px" }}>
      {/* <OneMovies /> */}
      <Navbar
        includeSearch
        handleInputChange={handleInputChange}
        search={search}
      ></Navbar>
      {movies && podcasts && music ? (
        <div style={{ width: "96vw", margin: "auto" }}>
          <h2 style={styles.title}>Movies</h2>
          <div style={styles.container}>
            {movies?.map((item, index) => (
              <Data data={item} key={index} type="movie"></Data>
            ))}
          </div>

          <h2 style={styles.title}>Musics</h2>
          <div style={styles.container}>
            {music?.map((item, index) => (
              <Data data={item} key={index} type="music"></Data>
            ))}
          </div>
          <h2 style={styles.title}>Podcasts</h2>
          <div style={styles.container}>
            {podcasts?.map((item, index) => (
              <Data data={item} key={index} type="podcast"></Data>
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
