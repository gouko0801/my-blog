import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';

type Props = {
  date: string;
  className?: string;
};

export const Date: React.FC<Props> = ({ date, className }) => {
  return <p className={className ?? 'text-gray-400 text-sm'}>{date}</p>;
};
