import React from 'react';

type Props = {
  tag: string;
  href?: string;
};

export const Tag: React.FC<Props> = ({ tag, href }) => {
  return <a className='mt-2 px-3 text-sm border-solid border border-gray-300 inline-block rounded-full'>{tag}</a>;
};
