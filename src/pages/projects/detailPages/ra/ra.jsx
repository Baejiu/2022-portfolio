import React, { useState, useEffect } from 'react';
import styles from './ra.module.css';
import useScrollFadeIn from '../../../../components/useScrollFadeIn/useScrollFadeIn';

const RaPage = (props) => {
  const [inPage, setInPage] = useState(false);
  useEffect(() => {
    setInPage(true);
    return () => {
      setInPage(false);
    };
  }, []);

  const animatedItem = useScrollFadeIn('up', 0.5, 0);

  return (
    <>
      <div
        className={
          inPage
            ? `${styles.container} ${styles.openContainer}`
            : styles.container
        }
      >
        <section className={styles.mainBanner}>
          <h2 className={styles.mainTitle}>로켓회계 홈페이지</h2>
        </section>
        <section className={styles.section} {...animatedItem}>
          <ul className={styles.info}>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>개발 기간</h3>
              <span className={styles.itemContent}>2020.03 - 2020.05</span>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>개발 직무</h3>
              <span className={styles.itemContent}>
                기획, 디자인, front-end
              </span>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>팀</h3>
              <ul className={styles.itemContent}>
                <li> back-end</li>
                <li>front-end</li>
              </ul>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>기술 스택</h3>
              <ul className={styles.itemContent}>
                <li>javascript</li>
                <li>반응형</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <div className={styles.contents}>
            <div className={styles.imgBox}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}images/projects/ra/ra_01.png`}
                alt=""
                className={styles.img}
              />
            </div>
            <p className={`${styles.description} ${styles.flex50}`}>
              간편하게 가입하고, 비대면 카톡으로 진행되는 회계 프로그램
              홈페이지를 제작했습니다. 젊은 층의 가입을 유도하기 위해 저렴한
              가격과 비대면 시스템을 요청했고, 웹사이트 기획과 디자인, 구현까지
              진행했습니다. 문의게시판의 api와 콘솔창 이후의 데이터 불러오는
              영역은 백엔드가 진행하고, 그 외 작업은 javascript로 진행했습니다.
            </p>
          </div>
          <p className={styles.description}>
            반응형으로 랜딩페이지를 제작했습니다. 애니메이션과 손 쉽게
            회원가입하고 신청 서류를 작성할 수 있도록 유저플로우를 설계했습니다.
            또한 콘솔창의 모바일은 앱 UI와 비슷하게 만듦으로써 손 쉽게 버튼을
            누르고 정보를 확인할 수 있도록 구현했습니다.
          </p>
        </section>
        <section className={styles.section}>
          <div className={styles.contents}>
            <div className={styles.imgBox}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}images/projects/ra/ra_02.png`}
                alt=""
                className={styles.img}
              />
            </div>
            <div className={styles.imgBox}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}images/projects/ra/ra_03.png`}
                alt=""
                className={styles.img}
              />
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.contents}>
            <div className={styles.flex25}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}images/projects/ra/ra_07.png`}
                alt=""
                className={styles.img}
              />
            </div>
            <div className={styles.flex25}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}images/projects/ra/ra_04.png`}
                alt=""
                className={styles.img}
              />
            </div>
            <p className={`${styles.description} ${styles.flex50}`}>
              간편하게 가입하고, 비대면 카톡으로 진행되는 회계 프로그램
              홈페이지를 제작했습니다. 젊은 층의 가입을 유도하기 위해 저렴한
              가격과 비대면 시스템을 요청했고, 웹사이트 기획과 디자인, 구현까지
              진행했습니다. 문의게시판의 api와 콘솔창 이후의 데이터 불러오는
              영역은 백엔드가 진행하고, 그 외 작업은 javascript로 진행했습니다.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.contents}>
            <div className={styles.flex25}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}images/projects/ra/ra_05.png`}
                alt=""
                className={styles.img}
              />
            </div>
            <div className={styles.flex25}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}images/projects/ra/ra_06.png`}
                alt=""
                className={styles.img}
              />
            </div>
            <p className={`${styles.description} ${styles.flex50}`}>
              반응형으로 랜딩페이지를 제작했습니다. 애니메이션과 손 쉽게
              회원가입하고 신청 서류를 작성할 수 있도록 유저플로우를
              설계했습니다. 또한 콘솔창의 모바일은 앱 UI와 비슷하게 만듦으로써
              손 쉽게 버튼을 누르고 정보를 확인할 수 있도록 구현했습니다.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <ul className={styles.list}>
            <li className={styles.listItem}>신규 서비스 웹 기획</li>
            <li className={styles.listItem}>컨셉 구상, 웹디자인, 일러스트</li>
            <li className={styles.listItem}>
              랜딩페이지, 가입신청 페이지, 콘솔 페이지 구현
            </li>
            <li className={styles.listItem}>반응형</li>
          </ul>
        </section>
        <section className={styles.section}>
          <p className={styles.description}></p>
        </section>
      </div>
    </>
  );
};

export default RaPage;
