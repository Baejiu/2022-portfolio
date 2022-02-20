import React from 'react';
import styles from './rollingText.module.css';

const RollingText = ({ winScroll }) => {
  // const list = [
  //   '😄',
  //   '🤭',
  //   '🙌',
  //   '👩‍💻',
  //   '🧚‍♀️',
  //   '🙆‍♀️',
  //   '🌻',
  //   '📚',
  //   '💻',
  //   '🌲',
  //   '🏢',
  //   '⭐️',
  // ];

  const list = [
    '***',
    '***',
    '***',
    '***',
    '***',
    '***',
    '***',
    '***',
    '***',
    '***',
    '***',
    '***',
  ];
  return (
    <div className={styles.container}>
      <ul
        className={styles.list}
        style={{ fontSize: `${winScroll ? winScroll * 0.01 + 2 : 1.6}rem` }}
      >
        {list.map((item, index) => {
          return (
            <li
              className={styles.item}
              key={index}
              style={{
                transform: `translate(-50%, -50%) rotate(${
                  index * 30 + 30
                }deg) translateY(${-(winScroll + 200)}px) rotateX(90deg)`,
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RollingText;
