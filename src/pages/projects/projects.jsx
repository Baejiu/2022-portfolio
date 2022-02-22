import React, { useState, useEffect } from 'react';
import ProjectList from './projectList/projectList';
import styles from './projects.module.css';

const Projects = ({ projectsService }) => {
  const [inPage, setInpage] = useState(false);
  const [tapTitles, setTapTitles] = useState(null); //tap
  const [activeTap, setActiveTap] = useState(null);
  useEffect(() => {
    setInpage(true);
    return () => {
      setInpage(false);
    };
  }, []);

  useEffect(() => {
    if (!projectsService) {
      return;
    }
    setTapTitles(() => {
      const titleSet = new Set();
      titleSet.add('all');
      projectsService.data.map((item) => titleSet.add(item.category));
      return titleSet;
    });
    setActiveTap('all');
  }, [projectsService]);

  const tapBtnClick = (e) => {
    if (e.target.innerText == activeTap) {
      return;
    }
    setActiveTap(e.target.innerText);
  };
  return (
    <div
      className={
        inPage
          ? `${styles.container} ${styles.openContainer}`
          : styles.container
      }
    >
      <ul className={styles.tapList}>
        {tapTitles &&
          Array.from(tapTitles).map((item, index) => {
            return (
              <li key={index}>
                <button
                  onClick={(e) => tapBtnClick(e)}
                  className={
                    activeTap === item
                      ? `${styles.activeTapItem} ${styles.tapItem}`
                      : styles.tapItem
                  }
                >
                  {item}
                </button>
              </li>
            );
          })}
      </ul>
      <div className={styles.box}>
        <ProjectList data={projectsService.data} activeTap={activeTap} />
      </div>
    </div>
  );
};

export default Projects;
