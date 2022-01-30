import React, { useState, useEffect } from "react";
import styles from "./projects.module.css";

const Projects = ({ projectsService }) => {
  const [inPage, setInpage] = useState(false);
  const [tapTitles, setTapTitles] = useState(null); //tap

  useEffect(() => {
    console.log("컴포넌트 시작");
    setInpage(true);
    return () => {
      setInpage(false);
      console.log("컴포넌트 종료 ");
    };
  }, []);

  useEffect(() => {
    if (!projectsService) {
      return;
    }
    setTapTitles(() => {
      const titleSet = new Set();
      titleSet.add("all");
      projectsService.data.map((item) => titleSet.add(item.category));
      return titleSet;
    });
  }, [projectsService]);
  console.log(tapTitles);
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
