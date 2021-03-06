import React from 'react';
import styles from '../../styles/Home.module.css';
import { Meta } from '../molecule/meta';
import { Header } from '../molecule/header';
import { Footer } from '../molecule/footer';

type Props = {
  children: React.ReactNode;
  title?: string;
  path?: string;
};

export const Layout: React.FC<Props> = ({ children, title, path }) => {
  return (
    <div className='bg-gray-50'>
      <Meta title={title} />
      <Header path={path} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
