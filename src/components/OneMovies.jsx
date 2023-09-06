/* eslint-disable react/prop-types */
import "./oneMovie.css";
import Modal from "@mui/material/Modal";
import { showToast } from "../utils";

function OneMovies(props) {
  const data = props.data;

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgb(0 0 0 / 93%)",
        },
      }}
    >
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={data?.poster} />
            <h1>{data?.title}</h1>
            <h4>{`Year: ${data?.year}`}</h4>
            <span className="minutes">{`${data?.runtime}`} min</span>
            <p className="type">{`Release Date: ${data?.released}`} </p>
          </div>
          <div className="movie_desc">
            <p className="text">{data?.description}</p>
          </div>
          <div className="movie_social">
            <ul></ul>
          </div>
        </div>
        <div>
          <div style={{ textAlign: "center" }}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${
                data?.trailer?.split("?")[1].split("=")[1]
              }`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default OneMovies;
