import "./data.css";

export default function Data() {
  return (
    <div className="container">
      <div className="movie-card">
        <div
          className="movie-header"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundImage: `url("https://imgs.search.brave.com/_Vwg8OtR9z8Pnt6_sXxTDTAd7t9A3nHCjTgFWhFcsUI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvdC9wL3c1MzNf/YW5kX2gzMDBfYmVz/dHYyLzY5RUZnV1dQ/RldiUk5IbVFnWWRT/bnlKOTRHZS5qcGc")`,
          }}
        >
          <div className="header-icon-container"></div>
        </div>
        <div className="movie-content">
          <div className="movie-content-header">
            <a href="#">
              <h3 className="movie-title">Man of Steel</h3>
            </a>
          </div>
          <div className="movie-info">
            <div className="info-section">
              <label>Date</label>
              <span>Sun 8 Sept - 10:00PM</span>
            </div>
            <div className="info-section">
              <label>Ratings</label>
              <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
