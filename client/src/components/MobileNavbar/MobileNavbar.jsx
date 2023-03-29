import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobileNavbar.module.scss";

export default function MobileNavbar() {
  return (
    <>
      <nav className={styles.pagesLinkWrapperMobile}>
        <ul className={styles.linkList}>
          <Link className={styles.link} to="/home">
            HOME
          </Link>
          <Link className={styles.link} to="/series">
            SERIES
          </Link>
          <Link className={styles.link} to="/movies">
            MOVIES
          </Link>
          <Link className={styles.link} to="/new">
            NEW AND POPULAR
          </Link>
          <Link className={styles.link} to="/mylist">
            MY LIST
          </Link>
        </ul>
      </nav>
    </>
  );
}
