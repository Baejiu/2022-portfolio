import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PageProgressBar from 'components/pageProgressBar/pageProgressBar';
import GsPage from './gs/gs';
import GdPage from './gd/gd';
import RaPage from './ra/ra';
import FsPage from './fs/fs';

const DetailPages = () => {
  const sectionsRef = useRef(null);
  const [winScroll, setWinScroll] = useState(null);
  const [containerHeight, setContainerHeight] = useState(null);
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
    </>
  );
};

export default DetailPages;
