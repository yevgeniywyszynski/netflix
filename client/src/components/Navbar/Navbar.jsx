import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import {
  Search,
  Notifications,
  ArrowDropDown,
  MenuOpen,
  Close,
} from "@mui/icons-material";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

export const Navbar = () => {
  const [isScroling, setScroling] = useState(false);
  const [burger, setBurger] = useState(false);

  window.onscroll = () => {
    setScroling(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScroling ? styles.scrolNavbar : styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.left}>
          <div className={styles.imgLogoWrapper}>
            <Link to="/home">
              <img
                className={styles.imgLogo}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                alt="logoNetflix"
              />
            </Link>
          </div>
          <nav className={styles.pagesLinkWrapper}>
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
        </div>
        <div className={styles.right}>
          <Search className={styles.navIcon} />
          <span>KIDS</span>
          <Notifications className={styles.navIcon} />
          <img
            className={styles.imgLogo}
            alt="memberImg"
            src="https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className={styles.profileWrapper}>
            <ArrowDropDown className={styles.navIcon} />
            <div className={styles.optionsWrapper}>
              <span className={styles.option}>Settings</span>
              <span className={styles.option}>Logout</span>
            </div>
          </div>
          <div className={styles.mobile}>
            <button
              className={styles.burger}
              onClick={() => setBurger(!burger)}
            >
              {burger ? (
                <Close className={styles.burgerMenuIcon} />
              ) : (
                <MenuOpen className={styles.burgerMenuIcon} />
              )}
            </button>
            {burger ? <MobileNavbar /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
