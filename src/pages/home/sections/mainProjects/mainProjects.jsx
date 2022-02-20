import ProjectItem from './components/projectItem.jsx';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './mainProjects.module.css';
import SectionTitle from '../../../../components/sectionTItle/sectionTitle';

const MainProjects = ({ scrollIndex, winScroll, projectsService }) => {
  const [winInnerHeight, setWinInnerHeight] = useState(null);

  useEffect(() => {
    setWinInnerHeight(window.innerHeight);
  }, [window.innerHeight]);

  return (
    <div className={styles.container}>
      <SectionTitle first="latest" second="projects" />
      <ul className={styles.list}>
        {projectsService.data.map((item, index) => {
          return (
            <ProjectItem
              key={index}
              winInnerHeight={winInnerHeight}
              scrollIndex={scrollIndex}
              item={item}
              flex={index % 2 === 0 ? 'row' : 'row-reverse'}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MainProjects;
