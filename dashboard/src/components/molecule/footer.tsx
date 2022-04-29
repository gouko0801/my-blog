import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { Icon } from '../atoms/icon';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="absolute inset-x-0 bottom-0 h-8">
        <Icon className="ri-twitter-fill" href="https://twitter.com/portrait_timer" />
        <Icon className="ri-github-fill" href="https://github.com/gouko0801" />
      </div>
      <p>2022 raiku All rights reserved.</p>
    </footer>
  );
};
