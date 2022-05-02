import Head from 'next/head';
import React from 'react';

type Props = {
  title?: string;
};

export const Meta: React.FC<Props> = (props) => {
  return (
    <Head>
      <title>{props.title ?? 'portrait timer blog'}</title>
      <meta name='description' content='hello!' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'></meta>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
