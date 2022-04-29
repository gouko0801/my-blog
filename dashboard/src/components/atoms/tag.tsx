import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';

type Props = {
  tag: string;
};

export const Tag: React.FC<Props> = ({ tag }) => {
  return <p>{tag}</p>;
};
