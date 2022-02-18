import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BlogItem from './blogItem/blogItem';
import styles from './blog.module.css';
import { useRef } from 'react';

const Blog = ({ blogService }) => {
  const listRef = useRef();
  const imgRef = useRef();
  const [blogs, setBlogs] = useState();

  const [img, setImg] = useState();
  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const showBlogImg = (event) => {
    const target =
      event.target.nodeName === 'LI' ? event.target : event.target.parentNode;

    const x = listRef.current.getBoundingClientRect().x;
    const y = listRef.current.getBoundingClientRect().y;
    if (img !== target.dataset.url) {
      console.log(`??`);
      setImg(target.dataset.url);
    }
    // imgRef.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
    setMousePosition({ x: event.clientX - x, y: event.clientY - y });
  };

  useEffect(() => {
    setBlogs(blogService.data);
  }, []);

  useEffect(() => {
    if (!img) {
      return;
    }
    console.log(`111`);
    imgRef.current.style.backgroundImage = `url('${img}')`;
  }, [img]);

  return (
    <div className={styles.container}>
      <ul className={styles.list} ref={listRef} onMouseMove={showBlogImg}>
        {blogs &&
          blogs.map((item, index) => {
            return <BlogItem key={index} item={item} />;
          })}
      </ul>
      <span
        className={styles.img}
        ref={imgRef}
        style={{
          transform: `translate(${MousePosition.x}px, ${MousePosition.y}px)`,
        }}
      ></span>
    </div>
  );
};

export default Blog;
