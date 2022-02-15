import React from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './projectItem.module.css';

const ProjectItem = ({ item }) => {
  const itemRef = useRef();
  const [visible, setVisible] = useState(false);

  return (
    <li
      className={styles.container}
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
    >
      <Link to={item.url}>
        <div className={styles.contents}>
          {/* {!visible ? (
          <>
          <h2>{item.title}</h2>
          <p>{item.subtitle}</p>
          <ul>
          {item.tag.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
          </ul>
          </>
          ) : (
          )} */}
          <>
            <div className={styles.categoryBox}>
              <span className={styles.icon}>🖥</span>
              <span className={styles.category}>{item.category}</span>
            </div>
            <h2 className={styles.title}>{item.title}</h2>
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
          </>
        </div>
        <div className={styles.imgBox}>
          <img
            src={item.bannerUrl}
            alt={`${item.title} 배너이미지`}
            className={styles.img}
          />
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;
