import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./FavoriteList.module.scss";
import { useSelector } from "react-redux";
import { AccessTime, RemoveRedEye } from "@mui/icons-material";

export default function FavoriteList() {
  const myList = useSelector((state) =>
    state.films.allFilms.filter((e) => e.favorite)
  );

  return (
    <div className={styles.favoriteList}>
      <Navbar />
      {myList.length > 0 ? (
        <div className={styles.listContainer}>
          <p className={styles.title}>My List</p>
          <div className={styles.list}>
            {myList.length > 0
              ? myList.map((film) => (
                  <div key={film.id} className={styles.listWrapper}>
                    <div className={styles.favFilm}>
                      <div className={styles.favImgFimWrapper}>
                        <img
                          className={styles.favFilmImg}
                          src={film.thumbnail}
                          alt="favImgFilm"
                        />
                      </div>
                      <div className={styles.favFilmDescWrapper}>
                        <span className={styles.favFilmTitle}>
                          {film.title}
                        </span>
                        <div className={styles.filmInfo}>
                          <div className={styles.showMobile}>
                            <AccessTime />
                            <span className={styles.optionsFilm}>
                              {film.duration}
                            </span>
                          </div>
                          <span className={styles.ageLimit}>
                            +{film.ageLimit}
                          </span>
                          <div className={styles.showMobile}>
                            <RemoveRedEye />
                            <span className={styles.optionsFilm}>
                              {film.views}
                            </span>
                          </div>
                        </div>
                        <div className={styles.filmDesc}>{film.desc}</div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      ) : (
        <p className={styles.listNotFound}>My list is empty...</p>
      )}
    </div>
  );
}
