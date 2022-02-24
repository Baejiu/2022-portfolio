import React, { useRef, useEffect, useState } from 'react';
import styles from './main.module.css';
import UpDownText from 'components/upDownText/upDownText';
import RollingText from 'components/rollingText/rollingText';

const Main = ({ scrollIndex, winScroll }) => {
  const [inPage, setInpage] = useState(false);
  const imgRef = useRef(null);
  const list = [
    ['BAEJIU', 'Portfolio'],
    ['Front-end', 'Developer'],
    ['JavaScript', 'and React'],
    ['안녕하세요', '배지우입니다'],
  ];

  useEffect(() => {
    setInpage(true);
    return () => {
      setInpage(false);
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
      <div className={styles.visualBox}>
        <div className={styles.textBox}>
          <UpDownText list={list} scrollIndex={scrollIndex} />
        </div>
        <div className={styles.imgBox} ref={imgRef}>
          {scrollIndex === 0 && <RollingText winScroll={winScroll} />}
        </div>
      </div>
    </div>
  );
};

export default Main;
