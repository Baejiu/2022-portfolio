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
            src="images/profile.jpg"
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
            안녕하세요. 프론트엔드 개발자 배지우입니다. <br /> 저는 국비지원
            웹디자인 & 퍼블리셔 과정을 수료 후 개발에 흥미를 가지게 되었습니다.
            사수가 없는 상황이어서 퇴근 후 독학으로 네이버 <b>부스트코스</b>와{' '}
            <b>드림코딩</b>에서{' '}
            <span className={styles.orangeColor}>웹, 자바스크립트, 리액트</span>
            를 수강 했습니다.
          </p>
          <p className={styles.description} {...useScrollFadeIn('up', 1, 0.75)}>
            2021년에는 회사의 신규 프로젝트에 <b>리액트</b>를 도입하기를{' '}
            <span className={styles.orangeColor}>적극 권유</span>, 리액트를
            이용해 회계프로그램 <span className={styles.orangeColor}>개발</span>
            을 진행 했습니다. 또한 부족한 전공지식을 채우고자 컴퓨터공학 과정의
            야간대를 병행하고, 현재는 JavaScript와 자료구조 스터디에 참여하여
            역량을 키우기 위해 노력하고 있습니다.
          </p>
          <p className={styles.description} {...useScrollFadeIn('up', 1, 1)}>
            저는 매 해의 목표를 상기시킬 수 있는 키워드를 선택합니다.
            <br />
            올해는 <b>"제대로 깊이있게 공부"</b>라는 키워드를 선택했습니다. 지금
            제게 주어진 JavaScript, React를 이용해 기능을 구현함이 끝이 아니라{' '}
            <span className={styles.orangeColor}>
              더 효율적이고 최적화된 코드를 구현하겠다는 목표를 달성
            </span>
            하기 위함입니다. 성장함에 감사하고, 배울 수 있음에 설레입니다.
            변화하고 있는 세상에 발 맞춰 늘 배우는 자세로 성장하는 것이 제가
            희망하는 제 미래의 모습입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
