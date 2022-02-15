import ProjectItem from './components/projectItem.jsx';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './mainProjects.module.css';

const MainProjects = ({ scrollIndex, winScroll, projectsService }) => {
  const [winInnerHeight, setWinInnerHeight] = useState(null);

  useEffect(() => {
    setWinInnerHeight(window.innerHeight);
  }, [window.innerHeight]);

  console.log(winInnerHeight);
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>Projects</h2>
      </div>
      <ul className={styles.list}>
        {projectsService.data.map((item, index) => {
          return (
            <ProjectItem
              key={index}
              winInnerHeight={winInnerHeight}
              scrollIndex={scrollIndex}
              item={item}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MainProjects;
