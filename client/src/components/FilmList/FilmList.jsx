import React, { useRef, useState } from "react";
import styles from "./FilmList.module.scss";
import { useSelector } from "react-redux";
import { ArrowBackIosNew, ArrowForwardIosOutlined } from "@mui/icons-material";
import FilmItem from "../FilmItem/FilmItem";

export default function FilmList() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isClickSlide, setIsClickSlide] = useState(false);

  const listRef = useRef();

  const reduxFilmList = useSelector((state) => state.films.allFilms);

  const handleClick = (direction) => {
    setIsClickSlide(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className={styles.filmList}>
      <span className={styles.listTitle}>Continue to watch</span>
      <div className={styles.listWrappper}>
        <ArrowBackIosNew
          style={{ display: !isClickSlide && "none" }}
          className={styles.sliderArrowLeft}
          onClick={() => handleClick("left")}
        />
        <div className={styles.moviesContainer} ref={listRef}>
          {reduxFilmList.map((film) => (
            <div key={film.id}>
              <FilmItem index={film.id} film={film} />
            </div>
          ))}
        </div>
        <ArrowForwardIosOutlined
          className={styles.sliderArrowRight}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
