import React, { useEffect, useState } from "react";
import styles from "./loading.module.css";
import TypingText from "../../components/typingText/typingText";

const Loading = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.textBox}>
          <TypingText
            text="Thank you for visiting."
            speed={40}
            fontSize={"2rem"}
            color="#202020"
          />
          <span className={styles.point}>|</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
