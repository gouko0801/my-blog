import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { MainTitle } from '../atoms/main-title';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <MainTitle title="raiku blog" />
        </a>
      </Link>
    </header>
  );
};
