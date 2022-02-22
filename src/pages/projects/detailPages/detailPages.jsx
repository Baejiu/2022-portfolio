import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PageProgressBar from 'components/pageProgressBar/pageProgressBar';
import GsPage from './gs/gs';
import GdPage from './gd/gd';
import RaPage from './ra/ra';
import FsPage from './fs/fs';
import styles from './detailPages.module.css';

const DetailPages = ({ projectsService }) => {
  const sectionsRef = useRef(null);
  const [winScroll, setWinScroll] = useState(null);
  const [containerHeight, setContainerHeight] = useState(null);
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    setContainerHeight(
      Math.floor(sectionsRef.current.getBoundingClientRect().height)
    );
    return () => {
      setContainerHeight(null);
      setTimeout(() => {}, 1000);
    };
  }, []);
  useEffect(() => {
    if (!sectionsRef.current) return;
    window.addEventListener('scroll', yScrollEvent);
    return () => {
      window.removeEventListener('scroll', yScrollEvent);
    };
  }, [sectionsRef]);
  const yScrollEvent = () => {
    const scrolled = window.scrollY;
    setWinScroll(scrolled);
  };

  useEffect(() => {
    if (!projectsService) {
      return;
    }
    setItem(projectsService.data.filter((item) => item.id === id)[0]);
  }, [projectsService, id]);

  console.log(item);
  return (
    <>
      <PageProgressBar
        winScroll={winScroll}
        containerHeight={containerHeight}
      />
      <div ref={sectionsRef}>
        {id === 'gs' && <GsPage />}
        {id === 'gd' && <GdPage />}
        {id === 'fs' && <FsPage />}
        {id === 'ra' && <RaPage />}
      </div>
      {item ? (
        <a href={item.link} target="_blank" rel="noreferrer">
          <button className={styles.btn}>
            홈페이지
            <br />
            보러가기
          </button>
        </a>
      ) : null}
    </>
  );
};

export default DetailPages;
