import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
const Header = ({}) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.home}>
            <Link to="/">
              <img
                src={`${process.env.REACT_APP_BASE_URL}images/favicon.png`}
                alt="홈으로 이동"
                className={styles.logo}
              />
            </Link>
          </li>
          <li className={styles.project}>
            <Link to="/projects">projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
