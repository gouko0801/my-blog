import styles from '../../styles/Home.module.css';
import { IconList } from '../molecule/icon-list';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <IconList />
      <p>2022 raiku All rights reserved.</p>
    </footer>
  );
};
