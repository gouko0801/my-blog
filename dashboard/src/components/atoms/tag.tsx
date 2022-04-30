import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';

type Props = {
  tag: string;
  href?: string;
};

export const Tag: React.FC<Props> = ({ tag, href }) => {
  return (
    <p className='px-2 border-solid border-2 border-gray-200 inline-block bg-gray-200 text-white rounded-full'>tag</p>
  );
};
