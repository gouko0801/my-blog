import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';
import { MainTitle } from '../atoms/main-title';
import { TabButtonList } from './tab-button-list';

type Props = {
  path?: string;
};

export const Header: React.FC<Props> = ({ path }) => {
  return (
    <header className={styles.header}>
      <div className='w-3/4 m-0 m-auto'>
        <Link href='/'>
          <a>
            <MainTitle title='portrait timer blog' />
          </a>
        </Link>
        <TabButtonList selected={path} />
      </div>
    </header>
  );
};
