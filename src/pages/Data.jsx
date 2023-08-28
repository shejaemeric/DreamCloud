import "./data.css";

export default function Data() {
  return (
    <div className="cellphone-container">
      <div className="movie">
        <div className="menu">
          <i className="material-icons"></i>
        </div>
        <div className="movie-img"></div>
        <div className="text-movie-cont">
          <div className="mr-grid">
            <div className="col1">
              <h1>Interstellar</h1>
              <ul className="movie-gen">
                <li>PG-13 /</li>
                <li>2h 49min /</li>
                <li>Adventure, Drama, Sci-Fi,</li>
              </ul>
            </div>
          </div>
          <div className="mr-grid summary-row">
            <div className="col2">
              <h5>SUMMARY</h5>
            </div>
            <div className="col2">
              <ul className="movie-likes">
                <li>
                  <i className="material-icons">&#xE813;</i>124
                </li>
                <li>
                  <i className="material-icons">&#xE813;</i>3
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-grid">
            <div className="col1">
              <p className="movie-description">
                A group of elderly people are giving interviews about having
                lived in a climate of crop blight and constant dust reminiscent
                of The Great Depression of the 1930's. The first one seen is an
                elderly woman stating her father was a farmer, but did not start
                out that way.{" "}
              </p>
            </div>
          </div>
          <div className="mr-grid actors-row">
            <div className="col1">
              <p className="movie-actors">
                Matthew McConaughey, Anne Hathaway, Jessica Chastain
              </p>
            </div>
          </div>
          <div className="mr-grid action-row">
            <div className="col2">
              <div className="watch-btn">
                <h3>
                  <i className="material-icons">&#xE037;</i>WATCH TRAILER
                </h3>
              </div>
            </div>
            <div className="col6 action-btn">
              <i className="material-icons">&#xE161;</i>
            </div>
            <div className="col6 action-btn">
              <i className="material-icons">&#xE866;</i>
            </div>
            <div className="col6 action-btn">
              <i className="material-icons">&#xE80D;</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
