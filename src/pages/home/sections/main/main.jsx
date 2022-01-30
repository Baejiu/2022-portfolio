import React from "react";
import styles from "./main.module.css";
import UpDownText from "components/upDownText/upDownText";

const Main = ({ scrollIndex }) => {
  const list = [
    ["BAEJIU", "Portfolio"],
    ["Front-end", "Developer"],
    ["JavaScript", "React"],
    ["안녕하세요", "배지우입니다"],
  ];
  return (
    <div className={styles.container}>
      <div className={styles.visualBox}>
        <div className={styles.textBox}>
          <UpDownText list={list} scrollIndex={scrollIndex} />
        </div>
        <div className={styles.imgBox}></div>
      </div>
    </div>
  );
};

export default Main;
