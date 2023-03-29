import React, { useRef, useState } from "react";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../../redux/usersSlice";
import { auth } from "../../firebaseConfig/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = (event) => {
    event.preventDefault();

    if (!email || !password || email.length === 0 || password.length === 0) {
      alert("Wpisz poprawnie dane");
      return window.location.reload();
    }

    let newUserObj = {
      email: email,
      password: password,
      isAuth: true,
    };

    dispatch(registerNewUser(newUserObj));
    navigate("/home");
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <img
          className={styles.imgLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt="logoNetflix"
        />
        <button className={styles.loginBtn} onClick={() => navigate("/login")}>
          Sign In
        </button>
      </div>
      <div className={styles.registerDesc}>
        <p className={styles.regTitle}>Unlimited movies, TV shows, and more.</p>
        <p className={styles.regSubTitle}>Watch anywhere. Cancel anytine.</p>
        <p className={styles.regQuest}>
          Ready to watch? Enter your email to create resterat your membership
        </p>
        {!email ? (
          <div className={styles.registerInputContainer}>
            <input
              type="email"
              ref={emailRef}
              className={styles.regiserInput}
              placeholder="Email adress"
            />
            <button
              onClick={() => handleStart()}
              className={styles.registerBtn}
            >
              Get Started
            </button>
          </div>
        ) : (
          <form className={styles.registerInputContainer}>
            <input
              type="password"
              className={styles.regiserInput}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={(e) => handleFinish(e)}
              className={styles.registerBtn}
            >
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
