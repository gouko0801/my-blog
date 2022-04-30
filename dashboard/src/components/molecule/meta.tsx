import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

type Props = {
  title?: string;
};

export const Meta: React.FC<Props> = (props) => {
  return (
    <Head>
      <title>{props.title ?? 'raiku blog'}</title>
      <meta name="description" content="konnichiha" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
