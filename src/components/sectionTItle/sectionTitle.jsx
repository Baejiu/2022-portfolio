import React from 'react';
import styles from './sectionTitle.module.css';
import useScrollMove from 'components/useScrollmove/useScrollmove';

const SectionTitle = ({ first, second, color = 'white' }) => (
  <h2
    className={
      color === 'white' ? styles.titleBox : `${styles.titleBox} ${styles.black}`
    }
  >
    <span className={styles.title} {...useScrollMove('left')}>
      {first}
    </span>
    <span className={styles.title} {...useScrollMove('right')}>
      {second}
    </span>
  </h2>
);

export default SectionTitle;
