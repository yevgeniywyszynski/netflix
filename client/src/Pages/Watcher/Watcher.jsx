import { ArrowBackOutlined } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import styles from "./Watcher.module.scss";

export default function Watcher() {
  const navigate = useNavigate();
  const location = useLocation();

  let film = location.state.film;

  const backHome = () => {
    navigate("/home");
  };

  return (
    <div className={styles.watcher}>
      <div className={styles.backBtn} onClick={backHome}>
        <ArrowBackOutlined className={styles.watcherBackIcon} />
        Back
      </div>
      <video
        className={styles.videoWatcher}
        autoPlay
        progress
        controls
        src={film.preview}
      />
    </div>
  );
}
