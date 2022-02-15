import React from 'react';
import { useRef, useEffect, useState } from 'react';
import styles from './projectItem.module.css';
import useScrollClipPath from '../../../../../components/useScrollClipPath/useScrollClipPath';

const ProjectItem = ({ winInnerHeight, scrollIndex, item }) => {
  const itemRef = useRef();

  const animatedItem = useScrollClipPath('left', 1, 0);
  const [itemWidth, setItemWidth] = useState(0);
  const [itemTranslate, setItemTranslate] = useState(0);

  const yScrollEvent = () => {
    const top = itemRef.current.getBoundingClientRect().top;
    const num = ((winInnerHeight - top) / winInnerHeight) * 2;
    console.log(num, winInnerHeight - top);
    if (0 < num < 1) {
      setItemWidth(num);
      setItemTranslate(winInnerHeight - top);
    }
  };
  useEffect(() => {
    if (!itemRef.current || !winInnerHeight) {
      return;
    }
    window.addEventListener('scroll', yScrollEvent);

    return () => {
      window.removeEventListener('scroll', yScrollEvent);
    };
  }, []);
  console.log(winInnerHeight);
  // useEffect(() => {
  //   if (!itemRef.current) {
  //     return;
  //   }
  //   if (scrollIndex >= 2) {
  //     window.removeEventListener("scroll", yScrollEvent);
  //   } else {
  //     window.addEventListener("scroll", yScrollEvent);
  //   }
  // }, [scrollIndex]);
  return (
    <li className={styles.item} ref={itemRef}>
      <div className={styles.banner} {...animatedItem}>
        <img
          src={item.bannerUrl}
          alt={`${item.title} 배너이미지`}
          className={styles.img}
        />
      </div>
      <div className={styles.contents}>
        <div className={styles.textBox}>
          <div className={styles.categoryBox}>
            <span className={styles.icon}>🖥</span>
            <span className={styles.category}>{item.category}</span>
          </div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.subtitle}>{item.subtitle}</p>
          <ul className={styles.tags}>
            {item.tag.map((item, index) => {
              return (
                <li key={index} className={styles.tag}>
                  #{item}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={styles.itembtns}>
          <li className={styles.itemBtn}>
            <button>git</button>
          </li>
          <li className={styles.itemBtn}>
            <button>detail page</button>
          </li>
          <li className={styles.itemBtn}>
            <button>home Page</button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ProjectItem;
