import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';

type Props = {
  date: string;
};

export const Date: React.FC<Props> = ({ date }) => {
  return <p>{date}</p>;
};
