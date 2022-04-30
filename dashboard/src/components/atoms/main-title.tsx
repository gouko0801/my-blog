import React from 'react';
import styles from '../../styles/Home.module.css';

type Props = {
  className?: string;
  title: string;
};

export const MainTitle: React.FC<Props> = ({ className, title }) => {
  return <h1 className={className ?? 'text-2xl'}>{title}</h1>;
};
