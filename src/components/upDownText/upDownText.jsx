import React, { useEffect, useRef, useState } from 'react';
import styles from './upDownText.module.css';

const UpDownText = ({ list, scrollIndex }) => {
  const [open, setOpen] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeText, setActiveText] = useState(null);
  const [delay, setDelay] = useState(4000);
  const [isRunning, setIsRunning] = useState(false);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(
    () => {
      setOpen(false);
      setTimeout(() => {
        let updated = activeIndex;
        if (3 === updated || updated == null) {
          updated = 0;
        } else {
          updated++;
        }
        setActiveIndex(updated);
        setActiveText(list[updated]);
        setOpen(true);
      }, 800);
    },
    isRunning ? delay : null
  );

  useEffect(() => {
    if (!list) {
      return;
    }
    if (scrollIndex === 0) {
      setOpen(true);
      setActiveIndex(0);
      setActiveText(list[0]);
      setIsRunning(true);
    } else if (scrollIndex > 0) {
      setIsRunning(false);
    }
  }, []);

  return (
    <ul className={open ? `${styles.open} ${styles.list}` : styles.list}>
      <li className={styles.item}>
        <div className={styles.firstLine}>
          <span className={styles.text}>{activeText && activeText[0]}</span>
        </div>
        <div className={styles.secondLine}>
          <span className={styles.text}>{activeText && activeText[1]}</span>
        </div>
      </li>
    </ul>
  );
};

export default UpDownText;
