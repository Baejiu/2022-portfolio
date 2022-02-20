import React from 'react';
import styles from './last.module.css';
import useScrollClipPath from 'components/useScrollClipPath/useScrollClipPath';
import useScrollFadeIn from 'components/useScrollFadeIn/useScrollFadeIn';
import SectionTitle from '../../../../components/sectionTItle/sectionTitle';

const Last = () => {
  return (
    <div className={styles.container}>
      <SectionTitle
        first="Don't forget"
        second="code your dream"
        color="rgb(18,18,18)"
      />
      <div className={styles.contents}>
        <p className={styles.description}>
          강의를 눈으로, 귀로 들으며 머릿속에 입력하고자 했습니다.
          <br />
          배운 기능을 응용해 원하는 형태로 구현할 수 있을지 고민했습니다.
          <br />
          어떻게 구현할 수 있을지 단계적으로 작성하고 파악합니다. <br />
          모르는 부분은 공홈과 구글을 검색합니다. <br />
          문제가 생겼을 때, 문제를 인지하고 어떻게 해결할 수 있을지 생각하고
          행동합니다.
          <br />
          독학으로 혼자 공부할 때에는 홀로 배우고 해결하고 어떻게 개선할 수
          있을지에 집중했습니다.
          <br />
          <br />
          <br /> 이제는 사람들과 글을 쓰고 대화를 나누며 서로에게 자극이 되고
          도움이 되는 팀원이 되고 싶습니다.
          <br /> 전 팀과 함께 목표와 개발 지식을 나누고, 일에 집중하며 성과를 낼
          수 있는 회사를 원합니다.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Last;
