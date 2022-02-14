import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProjectItem from "../projectItem/projectItem";
import styles from "./projectList.module.css";

const ProjectList = ({ data, activeTap }) => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!activeTap || !data) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setProjects(() => {
        if (activeTap == "all") {
          return data;
        }
        const filter = data.filter((item) => item.category.includes(activeTap));
        console.log(filter);
        return filter;
      });

      setLoading(false);
    }, 250);
  }, [activeTap]);
  return (
    <div
      className={
        loading
          ? styles.container
          : `${styles.container} ${styles.openContainer}`
      }
    >
      <ul className={styles.list}>
        {projects &&
          projects.map((item, index) => {
            return <ProjectItem key={index} item={item} />;
          })}
      </ul>
    </div>
  );
};

export default ProjectList;
