import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/filmSlice";
import styles from "./FilmItem.module.scss";
import { useNavigate } from "react-router-dom";
import {
  Add,
  Check,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

export default function FilmItem({ index, film }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isHover, setIsHover] = useState(false);

  const startWatch = (slug) => {
    navigate(`/watcher?title=${slug}`, { state: { film } });
  };

  const handleAddFilm = (addFilm) => {
    dispatch(addList(addFilm));
  };

  return (
    <div
      className={styles.filmItem}
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={styles.filmItemImgWrapper}>
        <img className={styles.itemImg} src={film.thumbnail} alt="filmItem" />
        {isHover && (
          <>
            <video src={film.preview} autoPlay={true} loop />
            <div className={styles.filmContainer}>
              <div className={styles.iconsWrapper}>
                <PlayArrow
                  className={styles.iconFilmItem}
                  onClick={() => startWatch(film.slug)}
                />
                {film.favorite ? (
                  <Check
                    className={styles.iconFilmItem}
                    onClick={() => handleAddFilm(film)}
                  />
                ) : (
                  <Add
                    className={styles.iconFilmItem}
                    onClick={() => handleAddFilm(film)}
                  />
                )}
                <ThumbUpAltOutlined className={styles.iconFilmItem} />
                <ThumbDownAltOutlined className={styles.iconFilmItem} />
              </div>
              <div className={styles.filmInfo}>
                <span className={styles.optionsFilm}>{film.duration}</span>
                <span className={styles.ageLimit}>+{film.ageLimit}</span>
                <span className={styles.optionsFilm}>{film.views}</span>
              </div>
              <div className={styles.filmDesc}>{film.desc}</div>
              <div className={styles.genreTypeFilmItem}>{film.genre}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
