import React, { useState, useEffect } from 'react';
import styles from './gd.module.css';
import useScrollFadeIn from '../../../../components/useScrollFadeIn/useScrollFadeIn';

const GdPage = (props) => {
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
          <h2 className={styles.mainTitle}>굿케어 홈페이지 리뉴얼 </h2>
        </section>
        <section className={styles.section} {...animatedItem}>
          <ul className={styles.info}>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>개발 기간</h3>
              <span className={styles.itemContent}>2020.04 - 2020.12</span>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>개발 직무</h3>
              <span className={styles.itemContent}>기획, front-end</span>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>팀</h3>
              <ul className={styles.itemContent}>
                <li> back-end * 2</li>
                <li>front-end</li>
                <li>desiner </li>
              </ul>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>기술 스택</h3>
              <ul className={styles.itemContent}>
                <li>기획</li>
                <li>디자인</li>
                <li>프로젝트 구축</li>
                <li>javascript</li>
                <li>반응형</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <p className={styles.description}>
            입사 당시 홈페이지는 4개의 개별적인 홈페이지가 연결되어 있는
            형태였습니다. 각각의 홈페이지는 역활과 메뉴가 달랐고 우측 상단의
            로고를 클릭하면 메인페이지로 복귀되는 형태였습니다. 또한 일러스트가
            강조되어 회사의 수상, 활동, 업무, 세미나 등 다양한 현물 사진이
            있음에도 노출되고 있지 않았습니다. 프로그램은 꾸준히 수정 보완되고,
            영업, 내부직원 교육이 진행되고 있으나 내부적으로만 공유될 뿐 외부에
            비추어지지 않았습니다.
          </p>
          <p className={styles.description}>
            "굿케어의 강점을 추가해야 한다!" 비영리 회계, 세무, 컨설팅, 개발,
            영상, 디자인 다양한 인력을 보유하고 있고, 직원ㄷㄹ의 내부 교육이
            꾸준히 진행되며 프로그램이 수정,보완되는 내용과 다양한 수상, 활동,
            업무, 세미나 사진을 추가해야한다고 생각했습니다. 또한 4개의 개별적인
            홈페이지를 한 눈에 파악할 수 있도록 통합시켜야 한다고 생각되었고
            리뉴얼 기획서를 제작해 임원분들에게 어필했습니다.
          </p>
          <p className={styles.description}>
            다들 각자의 업무로 인해 시간을 뺄 수 없었습니다. 혼자 진행해보겠냐,
            필요한 내용을 요청하라는 답변에 기획부터 혼자 먼저 진행하게
            되었습니다. 경쟁사와 중견기업의 홈페이지를 레퍼런스로 기획했습니다.
            홍보메일 업무와 매거진, 블로그, 유튜브 썸네일 작업, 타사 홈페이지
            제작 등을 병행하며 진행했습니다.
          </p>
        </section>
        <section className={styles.section}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              기존 홈페이지의 보완과 새로운 사업 추가를 위한 전체 리뉴얼
            </li>
            <li className={styles.listItem}>
              업무와 병행하며 기획, 스토리보드, 디자인, 프론트엔드 1인 진행{' '}
            </li>
            <li className={styles.listItem}>
              마무리 단계에서 백엔드 투입 = 공지사항, youtube api, 문의게시판
              작업
            </li>
            <li className={styles.listItem}>
              마무리 단계에서 디자이너 투입 = 아이콘, 배너, 레이아웃, 로고 작업
            </li>
            <li className={styles.listItem}>
              마무리 단계에서 임원진에게 컨텐츠 스토리 작성 요청{' '}
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <p className={styles.description}>
            여러 페이지를 혼자 작업하다보니 중간에 포기하지 않기 위해
            마인드컨트롤과 초기의 방향성을 잃지 않기 위한 성찰이 중요했습니다.
            노션에 진행내역을 정리하고, 큰 그림부터 그린 뒤 차근차근 한페이지씩
            진행했습니다. 프로젝트의 시작부터 끝까지 함께 진행하고, 바닐라
            자바스크립트에 욕심을 내서 진행해서 다시 보면 부족한 부분이
            많습니다. 네이버 부스트코스 웹 UI 개발, 엘리의 드림코딩 아카데미의
            포트폴리오 웹사이트 클론코딩을 수강하고 제작했습니다. 감사합니다.
          </p>
        </section>
        <section className={styles.section}>
          <p>next project 굿케어 솔루션 프로그램 보기</p>
        </section>
      </div>
    </>
  );
};

export default GdPage;
