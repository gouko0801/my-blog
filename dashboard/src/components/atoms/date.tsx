import React from 'react';

type Props = {
  date: string;
  className?: string;
};

export const Date: React.FC<Props> = ({ date, className }) => {
  return <p className={className ?? 'text-gray-400 text-sm'}>{date}</p>;
};
