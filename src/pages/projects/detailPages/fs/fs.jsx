import React, { useState, useEffect } from 'react';
import styles from './fs.module.css';
import useScrollFadeIn from '../../../../components/useScrollFadeIn/useScrollFadeIn';

const FsPage = (props) => {
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
          <h2 className={styles.mainTitle}>디자이너그룹 3FS 홈페이지</h2>
        </section>
        <section className={styles.section} {...animatedItem}>
          <ul className={styles.info}>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>개발 기간</h3>
              <span className={styles.itemContent}>2020.02</span>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>개발 직무</h3>
              <span className={styles.itemContent}>front-end, 도메인 관리</span>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>팀</h3>
              <ul className={styles.itemContent}>
                <li>designer</li>
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
                src="/images/projects/fs/fs_01.png"
                alt=""
                className={styles.img}
              />
            </div>
            <p className={`${styles.description} ${styles.flex50}`}>
              <b>"하고싶은거 있어. 품고만 있지 말고 한번 해보자"</b>
              <br /> 디자이너 그룹 쓰리포크즈가 전하는 메세지입니다. 쓰리포크즈
              홈페이지는 6개월의 국비지원 학원을 수료하고 얼마 되지 않은
              상태에서 제작해서 단순한 형태로 하드코딩되어있습니다. 그럼에도
              꾸준히 무료호스팅을 연장하고 있습니다. 홈페이지의 그림을 보고
              있으면 하고싶은 것, 꿈을 잊지 않기 위한 다짐, 본업에도 충실하며
              조금씩 자신을 위한 시간을 낼 수 있는 용기를 줍니다.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.contents}>
            <div className={styles.imgBox}>
              <img
                src="/images/projects/fs/fs_02.png"
                alt=""
                className={styles.img}
              />
            </div>
            <div className={styles.imgBox}>
              <img
                src="/images/projects/fs/fs_03.png"
                alt=""
                className={styles.img}
              />
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <p className={styles.description}>
            개발공부를 하며 처음으로 디자이너분과 소통하며 제작했습니다.
            모바일로 디자인된 시안을 전해주셨는데 반응형으로 제작하며 혼자
            작업하던 것처럼 얼추 맞추었다가 여러 수정사항을 들었습니다.
            반응형이기 때문에 폰사이즈마다 전부 비율이 맞기 어렵다 어쩔 수
            없다는 핑계를 대고는 속으로 많이 부끄러워 졌습니다. 내가 맞추기
            어려운 것이지 할 수 없는 것은 아니었을 것입니다. 몇번의 수정과
            조율을 통해 통과되었고, 시안을 받을 때 상대방이 원하는 의도를
            명확하게 파악할 수 있기 위해 이야기를 많이 나누어야한다는 것을
            깨달았습니다.
          </p>
        </section>
        <section className={styles.section}>
          <ul className={styles.list}>
            <li className={styles.listItem}>디자이너 그룹 3fs 홈페이지 구현</li>
            <li className={styles.listItem}>4page 반응형</li>
            <li className={styles.listItem}>반응형</li>
          </ul>
        </section>
        <section className={styles.section}></section>
      </div>
    </>
  );
};

export default FsPage;
