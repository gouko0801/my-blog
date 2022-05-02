import React from 'react';

type Props = {
  content: string;
};

export const ItemContent: React.FC<Props> = ({ content }) => {
  return <p className='my-4 truncate ...'>{content}</p>;
};
