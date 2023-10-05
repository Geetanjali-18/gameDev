import React from "react";
import styles from "./Body.module.css";

const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Trending Code Snippets</h1>
      </div>
      <div className={styles.main}>
        <h2>
          "Imagine game development with machine learning and artificial
          intelligence, creating a revolution in interactive and dynamic
          gameplay."
        </h2>
        <button className={styles.btn}>Explore...</button>
      </div>
    </div>
  );
};

export default Body;
