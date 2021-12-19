import { NextComponentType } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/scss/Header.module.scss";

const Header: NextComponentType = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode)
      return document.querySelector("body").classList.add("darkMode");
    return document.querySelector("body").classList.remove("darkMode");
  }, [darkMode]);

  return (
    <div className={styles.header}>
      <div className={styles.createdBy}>
        created by <a href="https://github.com/SANDAY-JS">SANDAY-JS</a>
      </div>

      <h2 className={styles.pageTitle}>MCU Reccomendation For You</h2>

      <div className={`${styles.switchArea} ${darkMode && styles.darkMode}`}>
        <input
          id="switch"
          type="checkbox"
          className={styles.switch}
          onClick={() => setDarkMode(!darkMode)}
        />
        <label htmlFor="switch">
          <span />
        </label>
        <div className={styles.swImg} />
      </div>
    </div>
  );
};

export default Header;
