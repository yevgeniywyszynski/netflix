import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authentication, setNotFound } from "../../redux/usersSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const notFound = useSelector((state) => state.users.notFound);

  const handleLogin = (event) => {
    event.preventDefault();

    let newUserObj = {
      userEmail: userEmail,
      userPassword: userPassword,
    };
    dispatch(authentication(newUserObj));
    navigate("/home");
  };

  useEffect(() => {}, [userEmail, userPassword]);

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <Link to="/home">
          <img
            className={styles.imgLogo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="logoNetflix"
          />
        </Link>
      </div>
      <div className={styles.loginDesc}>
        <form className={styles.loginFormWrapper}>
          <p className={styles.signTitle}>Sign In</p>
          <input
            className={notFound ? styles.loginInputNotFound : styles.loginInput}
            type="email"
            placeholder={notFound ? "USER NOT FOUND" : "Email or phone number"}
            onChange={(e) => {
              setUserEmail(e.target.value);
              dispatch(setNotFound(false));
            }}
          ></input>
          <input
            className={styles.loginInput}
            type="password"
            placeholder="Password"
            onChange={(e) => setUserPassword(e.target.value)}
          ></input>
          <button onClick={(e) => handleLogin(e)} className={styles.loginBtn}>
            Sign In
          </button>
          <span>
            New to Netflix? <b onClick={() => navigate("/")}>Sign up now</b>
          </span>
          <small>
            This page is protected by Yevgeniy to ensure you're not a bot.
            <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}
