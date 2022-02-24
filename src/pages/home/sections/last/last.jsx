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
          저는 매해의 목표를 상기시킬 수 있는 키워드를 선택합니다.
          <br />
          올해는 <b>"제대로 깊이 있게"</b>라는 키워드를 선택했습니다.
          <br />
          <br />
          독학으로 혼자 공부하며 진행할 때는 홀로 배우고 해결하고 어떻게 구현할
          수 있을지, 문제를 해결할 수 있을지에 집중했습니다.
          <br />
          <br />
          올해는
          <br />
          제게 주어진 JavaScript, React를 이용해 기능을 구현함이 끝이 아니라
          <br />
          더 효율적이고 최적화된 코드를 구현하겠다는 목표를 달성하기 위해 제대로
          깊이있게 코드를 살펴보는 것이 목표입니다.
          <br />
          이제는 사람들과 글을 쓰고 대화를 나누며 서로에게 자극이 되고 도움이
          되는 팀원이 되고 싶습니다.
          <br />
          전 팀과 함께 목표와 개발 지식을 나누고, 일에 집중하며 성과를 낼 수
          있는 회사를 원합니다.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Last;
