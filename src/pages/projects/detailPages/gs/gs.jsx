import React, { useState, useEffect } from 'react';
import styles from './gs.module.css';
import useScrollFadeIn from '../../../../components/useScrollFadeIn/useScrollFadeIn';

const GsPage = (props) => {
  const [inPage, setInPage] = useState(false);
  useEffect(() => {
    console.log('컴포넌트 시작');
    setInPage(true);
    return () => {
      setInPage(false);
      console.log('컴포넌트 종료 ');
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
          <h2 className={styles.mainTitle}>
            굿케어 솔루션 사회서비스 웹프로그램
          </h2>
        </section>
        <section className={styles.section} {...animatedItem}>
          <ul className={styles.info}>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>개발 기간</h3>
              <span className={styles.itemContent}>2021.02 - 2022.02</span>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>개발 직무</h3>
              <span className={styles.itemContent}>front-end</span>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>팀</h3>
              <ul className={styles.itemContent}>
                <li> back-end * 2</li>
                <li>front-end</li>
                <li>desiner </li>
                <li>app-developer </li>
              </ul>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>기술 스택</h3>
              <ul className={styles.itemContent}>
                <li>react</li>
                <li>javascript</li>
                <li>반응형</li>
                <li>api</li>
                <li>spl</li>
              </ul>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>프론트엔드 관련 라이브러리</h3>
              <ul className={styles.itemContent}>
                <li>reuter</li>
                <li>redux</li>
                <li>ant-design</li>
                <li>ckeditor5</li>
                <li>apexcharts</li>
                <li>slick</li>
                <li>rnd</li>
                <li>post-css</li>
                <li>classnames</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <p className={styles.description}>
            여러분. 리액트로 갑시다. 2020년 하반기 드림코딩 엘리를 수강하고
            리액트의 매력에 빠져있던 상태였습니다. 신규 프로그램을 구현하기 위해
            언어를 선택해야했습니다. 저는 리액트를 도입할 것을 강력하게
            추천했습니다. 이유는 명확합니다. 기존 프로그램은 하드코딩되어있었고
            재사용성이 떨어졌습니다. 또한 유지보수가 용이하지 않았고, 하나의
            페이지에 많은 veiw와 data에 관련된 함수들, 정보들이 나열되어
            있었습니다.
          </p>
          <p className={styles.description}>
            react의 컴포넌트 단위의 구조와 재사용성, 상태관리의 용이성을
            강조하였고, 데이터는 서버에서 관리하고 view역할에 충실하게 작성할 수
            있음을 강조했습니다. 또한 엄청나게 큰 생태계로 이미 많은
            라이브러리들이 존재하고, Virtual DOM으로 변화가 필요한 곳만
            렌더링되어 웹프로그램에 더욱 알맞다고 생각했습니다.
          </p>
          <p className={styles.description}>
            첫 react-app생성, 폴더 구축, 로그인부터 프로그램의 베타까지 함께
            진행했습니다. 팀원 모두 프로젝트를 협업으로 진행해본 것이 처음이기
            때문에 소통에 어려움이 있었지만, 각자의 맡은 역할에 충실할 수 있도록
            배려하며 프로젝트가 진행되었습니다.
          </p>
        </section>
        <section className={styles.section}>
          <ul className={styles.list}>
            <li className={styles.listItem}>react, git 적극 도입</li>
            <li className={styles.listItem}>
              폴더 구축, router, redux 구축 기여
            </li>
            <li className={styles.listItem}>레이아웃, 사이드바 구현</li>

            <li className={styles.listItem}>
              login, main, 각각 page front-end 구현
            </li>
            <li className={styles.listItem}>
              데이터 핸들링(상태관리, 서버로 전달할 데이터 핸들링)
            </li>
            <li className={styles.listItem}>
              매뉴얼, 1:1문의, 회원정보수정, 이미지등록, 에디터 구현
            </li>
            <li className={styles.listItem}>
              공지, 매뉴얼, 1:1문의, 회원정보 db설계, api 구현
            </li>
            <li className={styles.listItem}>
              page url에 맞게 출력되는 매뉴얼, cascader 구현
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <p className={styles.description}>
            후반부 db설계와 spl문, api 구현을 해볼 수 있는 기회가 있었습니다.
            매뉴얼, 공지사항, 1:1문의, 도장관리(이미지업로드 등)을 진행했습니다.
          </p>
        </section>
        <section className={styles.section}>
          <p>next project </p>
        </section>
      </div>
    </>
  );
};

export default GsPage;
