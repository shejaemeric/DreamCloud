/* eslint-disable react/prop-types */
function Data(props) {
  const data = props.data;
  function formatMilliseconds(milliseconds) {
    const minutes = Math.floor(milliseconds / (1000 * 60));
    milliseconds %= 1000 * 60;

    const seconds = Math.floor(milliseconds / 1000);
    milliseconds %= 1000;

    return `${minutes}m : ${seconds}s`;
  }
  if (props.type === "movie") {
    return (
      <div>
        <div className="cellphone-container">
          <div className="movie">
            <div className="menu">
              <i className="material-icons"></i>
            </div>
            <div
              className="movie-img"
              style={{ backgroundImage: `url(${data["#IMG_POSTER"]})` }}
            ></div>
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>{data["#AKA"]}</h1>
                  <ul className="movie-gen">
                    <li>{`RANK - ${data["#RANK"]}`},</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid actors-row">
                <div className="col1">
                  <p className="movie-actors">{data["#ACTORS"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (props.type === "music") {
    const data1 = props.data.data;
    return (
      <div>
        <div className="cellphone-container">
          <div className="movie">
            <div className="menu">
              <i className="material-icons"></i>
            </div>
            <div
              className="movie-img"
              style={{
                backgroundImage: `url(${data1?.albumOfTrack?.coverArt?.sources[2].url})`,
              }}
            ></div>
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>{data1?.name}</h1>
                  <ul className="movie-gen">
                    <li>
                      {`DURATION - ${formatMilliseconds(
                        data1?.duration?.totalMilliseconds
                      )}`}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid actors-row">
                <div className="col1">
                  <p className="movie-actors">
                    {data1.artists?.items
                      .map((art) => art?.profile?.name)
                      .join(",")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (props.type === "podcast") {
    const data1 = props.data.data;
    console.log(props?.data?.data);
    return (
      <div>
        <div className="cellphone-container">
          <div className="movie">
            <div className="menu">
              <i className="material-icons"></i>
            </div>
            <div
              className="movie-img"
              style={{
                backgroundImage: `url(${data1?.coverArt?.sources[2].url})`,
              }}
            ></div>
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>{data1?.name}</h1>
                  <ul className="movie-gen">
                    <li>
                      {`PUBLISHER - ${formatMilliseconds(
                        data1?.publisher?.name
                      )}`}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid actors-row">
                <div className="col1">
                  <p className="movie-actors">
                    {data1.artists?.items
                      .map((art) => art?.profile?.name)
                      .join(",")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
