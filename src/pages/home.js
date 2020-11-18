import React from "react";
import styles from "./css/home.module.scss";
import Logo from "./logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.nav}>
        <img src={Logo} alt="logo" />
        <button>My Designs</button>
      </div>
      <div className={styles.heroContainer}>
        <h1>Design your tees and your identity.</h1>

        <p>
          Ready to design? click design and choose from our vast collection of
          products.
        </p>
        <Link to="/products" className={styles.button}>
          Design Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
