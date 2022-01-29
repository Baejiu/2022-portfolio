import React, { useRef, useState, useEffect } from "react";
import styles from "./pageProgressBar.module.css";

const PageProgressBar = ({ winScroll, containerHeight }) => {
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    fillProgressBar(winScroll);
  }, [winScroll]);
  function fillProgressBar(winScroll) {
    let scrolled = (winScroll / (containerHeight - window.innerHeight)) * 100;
    setProgressBarWidth(scrolled);
  }
  return (
    <nav className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progressBarWidth}%` }}
      ></div>
    </nav>
  );
};

export default PageProgressBar;
