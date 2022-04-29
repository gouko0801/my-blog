import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';

type Props = {
  title: string;
};

export const SubTitle: React.FC<Props> = ({ title }) => {
  return <h2>{title}</h2>;
};
