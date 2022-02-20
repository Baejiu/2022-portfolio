import React from 'react';
import { useRef, useEffect, useState } from 'react';
import styles from './projectItem.module.css';
import useScrollClipPath from '../../../../../components/useScrollClipPath/useScrollClipPath';
import { Link } from 'react-router-dom';

const ProjectItem = ({ winInnerHeight, scrollIndex, item, flex }) => {
  const itemRef = useRef();

  const [itemWidth, setItemWidth] = useState(0);
  const [itemTranslate, setItemTranslate] = useState(0);

  const yScrollEvent = () => {
    const top = itemRef.current.getBoundingClientRect().top;
    const num = ((winInnerHeight - top) / winInnerHeight) * 2;
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
    <li ref={itemRef} className={styles.container}>
      <Link to={item.url}>
        <div
          className={
            flex === 'row'
              ? `${styles.item} ${styles.row}`
              : `${styles.item} ${styles.rowReverse}`
          }
          style={{ flexDirection: `${flex && flex}` }}
        >
          <div className={styles.banner} {...useScrollClipPath('down', 1, 0)}>
            <img
              src={item.bannerUrl}
              alt={`${item.title} 배너이미지`}
              className={styles.img}
            />
          </div>
          <div className={styles.contents} {...useScrollClipPath('down', 1, 0)}>
            <div className={styles.textBox}>
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
            {/* <ul className={styles.itembtns}>
            <li className={styles.itemBtn}>
              <button>git</button>
            </li>
            <li className={styles.itemBtn}>
              <button>detail page</button>
            </li>
            <li className={styles.itemBtn}>
              <button>home Page</button>
            </li>
          </ul> */}
            <div>
              <button className={styles.link}>go</button>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;
