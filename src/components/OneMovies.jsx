import React from "react";
import Modal from "./Modal";

function OneMovies() {
  return (
    <Modal open={true}>
      <div class="card">
        <div class="card_left">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"
            alt="Movie Poster"
          />
        </div>
        <div class="card_right">
          <h1>KILL BILL: VOL. 1</h1>
          <div class="card_right__details">
            <ul>
              <li>2003</li>
              <li>111 min</li>
              <li>Action</li>
            </ul>
            <div class="card_right__rating">
              <div class="card_right__rating__stars">
                <fieldset class="rating">
                  <input id="star10" name="rating" type="radio" value="10" />
                  <label class="full" for="star10" title="10 stars"></label>
                  <input
                    id="star9half"
                    name="rating"
                    type="radio"
                    value="9 and a half"
                  />
                  <label class="half" for="star9half" title="9.5 stars"></label>
                  <input id="star9" name="rating" type="radio" value="9" />
                  <label class="full" for="star9" title="9 stars"></label>
                  <input
                    id="star8half"
                    name="rating"
                    type="radio"
                    value="8 and a half"
                  />
                  <label class="half" for="star8half" title="8.5 stars"></label>
                  <input id="star8" name="rating" type="radio" value="8" />
                  <label class="full" for="star8" title="8 stars"></label>
                </fieldset>
              </div>
            </div>
          </div>
          <div class="card_right__review">
            <p>
              The lead character, called 'The Bride,' was a member of the Deadly
              Viper Assassination Squad, led by her lover 'Bill.' Upon realizing
              she was pregnant with Bill's child, 'The Bride' decided to escape
              her life as a killer. She fled to Texas, met a young man, who, on
              the day of their wedding rehearsal was gunned down by....
            </p>
            <a
              href="http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl"
              target="_blank"
            >
              Read more
            </a>
          </div>
          <div class="card_right__button">
            <a
              href="https://www.youtube.com/watch?v=ot6C1ZKyiME"
              target="_blank"
            >
              WATCH TRAILER
            </a>
          </div>
        </div>
      </div>
      ;
    </Modal>
  );
}

export default OneMovies;
