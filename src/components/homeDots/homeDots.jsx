import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import styles from './homeDots.module.css';

const Dot = ({ num, scrollIndex, duration, sectionName, onControlsClick }) => {
  const [bgColor, setBgColor] = useState(null);
  const [activeNum, setActiveNum] = useState(null);
  const [borderColor, setBorderColor] = useState(null);

  const changeDotColor = useCallback(() => {
    if (scrollIndex > num) {
      setBgColor('#4CAF50');
      setBorderColor('#4CAF50');
    } else if (scrollIndex < num) {
      setBgColor('#e7e7e7');
      setBorderColor('#e7e7e7');
    } else {
      setBgColor('white');
      setBorderColor('white');
    }
  });
  useEffect(() => {
    if (!scrollIndex) {
      return;
    }
    activeNum !== scrollIndex && setActiveNum(scrollIndex);
    changeDotColor();
  }, [changeDotColor, scrollIndex, activeNum]);

  return (
    <div
      className={
        sectionName ? `${styles.dotBox} ${styles.openDotBox}` : styles.dotBox
      }
      style={{ animationDuration: `${duration * 0.1 + 0.4}s` }}
    >
      <div
        style={{
          backgroundColor: bgColor && bgColor,
          borderColor: borderColor && borderColor,
        }}
        className={
          scrollIndex == num ? `${styles.dot} ${styles.active}` : styles.dot
        }
        id={`${num}`}
        onClick={onControlsClick}
      ></div>
      <span
        className={
          scrollIndex == num ? `${styles.tag} ${styles.active}` : styles.tag
        }
      >
        {sectionName}
      </span>
    </div>
  );
};

const Dots = ({ scrollIndex, onControlsClick, sections }) => {
  const [dotList, setDotList] = useState(null);

  useEffect(() => {
    if (!sections) {
      return;
    }
    let list = [];
    sections.forEach((item) => {
      list.push(item.id);
    });
    setDotList(list);
  }, [sections]);

  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        {dotList &&
          dotList.map((item, index) => {
            return (
              <Dot
                num={index}
                key={index}
                duration={index * 2}
                sectionName={item}
                scrollIndex={scrollIndex}
                onControlsClick={onControlsClick}
              ></Dot>
            );
          })}
      </div>
    </div>
  );
};

export default Dots;
