import React, { useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConfig/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { provider } from "../../firebaseConfig/firebase";
import { signIn } from "../../redux/usersSlice";
import { useDispatch } from "react-redux";

const errorMap = {
  "auth/invalid-email": "Invalid email",
  "auth/user-disabled": "User disabled",
  "auth/user-not-found": "User not found",
  "auth/wrong-password": "Wrong password",
};

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((user) => {
        dispatch(signIn(user));
        navigate("/home");
      })
      .catch((error) => {
        setIsLoggedIn(true);
        setUserEmail("");
        console.log(error.code);
        let message = errorMap[error.code];
        setLoginErrorMessage(message);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <button
          className={styles.loginGoogleBtn}
          onClick={() => signInWithGoogle()}
        >
          Sign in with Google
        </button>
      </div>
      <div className={styles.loginDesc}>
        <form className={styles.loginFormWrapper}>
          <p className={styles.signTitle}>Sign In</p>
          <input
            className={
              isLoggedIn ? styles.loginInputNotFound : styles.loginInput
            }
            type="email"
            placeholder={
              isLoggedIn ? loginErrorMessage : "Email or phone number"
            }
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
              setIsLoggedIn(false);
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
