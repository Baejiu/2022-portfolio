import React, { useState, useEffect } from "react";
import styles from "./projects.module.css";

const Projects = (props) => {
  const [inPage, setInpage] = useState(false);
  useEffect(() => {
    console.log("컴포넌트 시작");
    setInpage(true);
    return () => {
      setInpage(false);
      console.log("컴포넌트 종료 ");
    };
  }, []);
  return (
    <div
      className={
        inPage
          ? `${styles.container} ${styles.openContainer}`
          : styles.container
      }
    >
      <div className={styles.box}>
        <h2 className={styles.title}>projects</h2>
      </div>
    </div>
  );
};

export default Projects;
