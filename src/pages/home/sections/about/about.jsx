import React from 'react';
import styles from './about.module.css';
import useScrollClipPath from 'components/useScrollClipPath/useScrollClipPath';
import useScrollFadeIn from 'components/useScrollFadeIn/useScrollFadeIn';
import SectionTitle from '../../../../components/sectionTItle/sectionTitle';

const About = () => {
  return (
    <div className={styles.container}>
      <SectionTitle first="About" second="Me" />
      <div className={styles.contents}>
        <div className={styles.profile}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}images/profile.jpg`}
            alt="프로필사진"
            className={styles.img}
            {...useScrollClipPath('left', 1, 0)}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.contentTitle} {...useScrollFadeIn('up', 1, 0)}>
            처음 뵙겠습니다.
          </h3>
          <p className={styles.description} {...useScrollFadeIn('up', 1, 0.5)}>
            안녕하세요. 사용자를 배려하는 개발자 배지우입니다. <br />
            저는 개발할 때 개발하기 쉬운 방향보다는 사용자가 어떻게 인지하고
            사용할지, 기업의 이미지가 더 친절하게 다가갈 수 있을지를 고려해
            선택합니다. 기존 회사의 홈페이지가{' '}
            <b>
              대분류마다 다른 메뉴바를 가지고 있어서 사용자가 답답함을 느낄 것을
              고려, 하나의 메뉴로 통합하고 각 메뉴에 맞게 분류해 홈페이지를 전체
              리뉴얼
            </b>
            했습니다. 최근의 예로는 '예산통괄표 출력'을 예산관리와 출력관리
            어디에 위치하는게 좋겠냐는 질문에{' '}
            <span className={styles.orangeColor}>
              사용자가 처음 인지한 목적에 따라 다른 메뉴를 선택할 수 있기 때문에
              양쪽 모두에 위치하는 것이 좋겠다
            </span>
            는 의견을 냈습니다. 사용자의 입장과 개발자의 입장 모두를 고려해
            소통합니다.
          </p>
          <p className={styles.description} {...useScrollFadeIn('up', 1, 0.75)}>
            2021년에는 회사의 신규 프로젝트에 <b>리액트</b>를 도입하기를{' '}
            <span className={styles.orangeColor}>적극 권유</span>했습니다.
            그리고 리액트를 이용해 회계프로그램{' '}
            <span className={styles.orangeColor}>개발</span>을 진행 했습니다.
            기존 홈페이지는 php로 개발되어 있었고, 메인 페이지 방문시
            3000ms가량의 속도를 갖고 있었습니다. 또한 다른페이지로 이동시
            리로드되면서 번쩍거리는 현상이 있었습니다. 리액트로 개발한 신규
            회계프로그램은{' '}
            <b>
              메인 페이지 방문시 550ms가량의 속도를 가져 눈에 띄게
              체감되었습니다. 리액트의 특징을 이용해 페이지를 이동하면 헤더는
              고정된 채 하단만 리로드될 수 있도록 구현
            </b>
            되었습니다.{' '}
            <span className={styles.orangeColor}>
              베타기간 중 월등한 속도면에서 모든 사용자가 만족했습니다.
            </span>{' '}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
