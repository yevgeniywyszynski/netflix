import React from "react";
import Featured from "../../components/Featured/Featured";
import FilmList from "../../components/FilmList/FilmList";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Featured type={"movie"} />
      <FilmList />
      <FilmList />
      <FilmList />
      <FilmList />
    </div>
  );
};

export default Home;
