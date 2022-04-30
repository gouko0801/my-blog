import React from 'react';

type Props = {
  title: string;
  className?: string;
};

export const SubTitle: React.FC<Props> = ({ title, className }) => {
  return <h2 className={className ?? 'text-xl font-semibold'}>{title}</h2>;
};
