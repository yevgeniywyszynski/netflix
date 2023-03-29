import React from "react";
import styles from "./Featured.module.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

const Featured = ({ type }) => {
  return (
    <div className={styles.featured}>
      {type && (
        <div className={styles.categoryWrapper}>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select className={styles.selectWrapper} name="genre" id="genre">
            <option>Genre</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="adventure">Adventure</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
      )}
      <img
        className={styles.featuredImgBg}
        src="https://static.hbo.com/game-of-thrones-1-1920x1080.jpg"
        alt="logoNetflix"
      />
      <div className={styles.featuredInfoWrapper}>
        <div className={styles.logoFeaturedFilmWrapper}>
          <img
            className={styles.logoFeaturedFilm}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Logo_Game_of_Thrones.png/800px-Logo_Game_of_Thrones.png"
            alt="generalFilmImg"
          />
        </div>
        <span className={styles.featuredDescriptionFilm}>
          Game of Thrones is an American fantasy drama television series created
          by David Benioff and D. B. Weiss for HBO. It is an adaptation of A
          Song of Ice and Fire
        </span>
        <div className={styles.featuredBtnWrapper}>
          <button className={styles.btnPlay}>
            <PlayArrow />
            <span className={styles.infoBtnDesc}>Play</span>
          </button>
          <button className={styles.btnMore}>
            <InfoOutlined />
            <span className={styles.infoBtnDesc}>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
