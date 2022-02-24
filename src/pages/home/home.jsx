import React, { useRef, useState, useEffect } from 'react';
import styles from './home.module.css';
import Dots from '../../components/homeDots/homeDots';
import PageProgressBar from '../../components/pageProgressBar/pageProgressBar';
import Blog from './sections/blog/blog';
import About from './sections/about/about';
import Main from './sections/main/main';
import Last from './sections/last/last';
import Contact from './sections/contact/contact';
import MainProjects from './sections/mainProjects/mainProjects';

const Home = ({ blogService, projectsService }) => {
  const sectionsRef = useRef(null);
  const sectionRef = useRef([]);
  const [sections, setSections] = useState(null);
  const [sectionsHeight, setSectionsHeight] = useState(null);
  const [containerHeight, setContainerHeight] = useState(null);
  const [winScroll, setWinScroll] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    setSections(sectionsRef.current.childNodes);
    setContainerHeight(
      Math.floor(sectionsRef.current.getBoundingClientRect().height)
    );
    setSectionsHeight(() => {
      const nodes = sectionsRef.current.childNodes;
      let list = [];
      nodes.forEach((item, index) => {
        if (list.length === 0) {
          list.push(0);
        } else {
          let innerheight = Math.floor(
            nodes[index - 1].getBoundingClientRect().height + list[index - 1]
          );
          list.push(innerheight - 20 * index);
        }
      });
      return list;
    });
    return () => {
      setContainerHeight(null);
      setSections(null);
      setTimeout(() => {}, 1000);
    };
  }, []);

  function optimizeAnimation(callback) {
    let ticking = false;

    return () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          callback();
          ticking = false;
        });
      }
    };
  }

  useEffect(() => {
    if (!sectionsRef.current) return;
    // window.addEventListener('scroll', optimizeAnimation(yScrollEvent), {
    //   passive: true,
    // });

    window.addEventListener('scroll', yScrollEvent);
    return () => {
      window.removeEventListener('scroll', yScrollEvent);
    };
  }, [sectionsRef.current]);

  const yScrollEvent = () => {
    const scrolled = window.scrollY;
    setWinScroll(scrolled);
    sectionsHeight.forEach((item, index) => {
      if (scrolled + window.innerHeight === containerHeight) {
        setScrollIndex(sectionsHeight.length - 1);
      }
      if (scrolled >= item) {
        setScrollIndex(index);
      }
    });
  };

  const onControlsClick = (e) => {
    sectionRef.current[e.target.id].scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <PageProgressBar
        winScroll={winScroll}
        containerHeight={containerHeight}
      />
      <Dots
        onControlsClick={onControlsClick}
        scrollIndex={scrollIndex}
        sections={sections}
      />
      <div
        className={
          sectionsHeight
            ? `${styles.container} ${styles.openContainer}`
            : styles.container
        }
        ref={sectionsRef}
      >
        <section
          className={`${styles.section} ${styles.mainSection}`}
          id="main"
          ref={(el) => (sectionRef.current[0] = el)}
        >
          <Main scrollIndex={scrollIndex} winScroll={winScroll} />
        </section>
        <section
          className={styles.section}
          id="about"
          ref={(el) => (sectionRef.current[1] = el)}
        >
          <About />
        </section>
        <section
          className={styles.section}
          id="projects"
          ref={(el) => (sectionRef.current[2] = el)}
        >
          <MainProjects
            winScroll={winScroll}
            scrollIndex={scrollIndex}
            projectsService={projectsService}
          />
        </section>
        <section
          className={styles.section}
          id="blog"
          ref={(el) => (sectionRef.current[3] = el)}
        >
          <Blog blogService={blogService} />
        </section>
        <section
          className={styles.section}
          id="dream"
          ref={(el) => (sectionRef.current[4] = el)}
        >
          <Last />
        </section>
        <section
          className={styles.section}
          id="contact"
          ref={(el) => (sectionRef.current[5] = el)}
        >
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
