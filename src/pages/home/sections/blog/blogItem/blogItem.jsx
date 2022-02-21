import React from 'react';
import styles from './blogItem.module.css';
import useScrollClipPath from 'components/useScrollClipPath/useScrollClipPath';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ item }) => {
  const itemRef = useRef();
  const imgRef = useRef();
  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const showBlogImg = (event) => {
    // if (event.target.nodeName === 'SPAN') {
    //   return;
    // }
    // const x = itemRef.current.getBoundingClientRect().x;
    // const y = itemRef.current.getBoundingClientRect().y;
    // // imgRef.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
    // setMousePosition({ x: event.clientX - x, y: event.clientY - y });
  };

  // useEffect(() => {
  //   if (!itemRef) {
  //     return;
  //   }
  //   itemRef.addEventListener('mousemove', (event) => {
  //     const x = event.clientX;
  //     const y = event.clientY;
  //     imgRef.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
  //   });
  // }, []);
  return (
    <li ref={itemRef} onMouseMove={showBlogImg} data-url={item.img}>
      <a
        href={item.url}
        {...useScrollClipPath('left', 1, 0)}
        target="_blank"
        rel="noreferrer"
        className={styles.container}
      >
        <h4 className={styles.title}>{item.title}</h4>
        <span className={styles.date}>{item.date}</span>
      </a>
    </li>
  );
};

export default BlogItem;
