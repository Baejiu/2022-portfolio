import React from 'react';
import styles from './blogItem.module.css';
import useScrollClipPath from 'components/useScrollClipPath/useScrollClipPath';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

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
    // console.log(`url(../../../../../../public${item.bannerUrl})`);
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
    <li
      className={styles.container}
      ref={itemRef}
      onMouseMove={showBlogImg}
      data-url={item.bannerUrl}
    >
      <h4 {...useScrollClipPath('left', 1, 0)} className={styles.title}>
        {item.title}
      </h4>
      {/* <span
        className={styles.img}
        ref={imgRef}
        style={{
          transform: `translate(${MousePosition.x - 100}px, ${
            MousePosition.y - 100
          }px)`,
          backgroundImage: `url(../../../../../../public${item.bannerUrl})`,
        }}
      ></span> */}
    </li>
  );
};

export default BlogItem;
