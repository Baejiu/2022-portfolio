import React from 'react';
import styles from './contact.module.css';
import SectionTitle from '../../../../components/sectionTItle/sectionTitle';

const Contact = () => {
  return (
    <div className={styles.container}>
      <SectionTitle first=":)" second="Contact" color="black" />
      <div className={styles.contents}>
        <ul className={styles.info}>
          <li className={styles.infoItem}>
            <h3 className={styles.itemTitle}>Mail</h3>
            <span className={styles.itemContent}>
              <a
                href="
                  jiumaker@naver.com"
                target="_blank"
                rel="noreferrer"
                className={styles.orangeColor}
              >
                jiumaker@naver.com
              </a>
            </span>
          </li>
          <li className={styles.infoItem}>
            <h3 className={styles.itemTitle}>Blog</h3>
            <span className={styles.itemContent}>
              <a
                href="
                  https://ji-u.tistory.com/"
                target="_blank"
                rel="noreferrer"
                className={styles.orangeColor}
              >
                https://ji-u.tistory.com/
              </a>
            </span>
          </li>
          <li className={styles.infoItem}>
            <h3 className={styles.itemTitle}>이력서</h3>
            <span className={styles.itemContent}>
              <a
                href="
                https://classic-script-a3e.notion.site/d3fadbcbb57f40c9be4788963f831a28"
                target="_blank"
                rel="noreferrer"
                className={styles.orangeColor}
              >
                Notion 이력서
              </a>
            </span>
          </li>
          <li className={styles.infoItem}>
            <h3 className={styles.itemTitle}>KaKao</h3>
            <ul className={styles.itemContent}>
              <li>아이디: jiumaker</li>
              <li>
                오픈채팅:{' '}
                <a
                  href="https://open.kakao.com/o/s8Usjc1d"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.orangeColor}
                >
                  방문하기
                </a>
              </li>
            </ul>
            <span className={styles.itemContent}></span>
          </li>
          <li className={styles.infoItem}>
            <h3 className={styles.itemTitle}>기술 스택</h3>
            <ul className={styles.itemContent}>
              <li>Javascript</li>
              <li>반응형</li>
              <li>React</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
