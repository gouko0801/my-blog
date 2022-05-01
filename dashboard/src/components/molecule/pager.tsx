import React from 'react';
import { PagerButtonItem } from '../../interface/pager-button-item';
import { PagerButton } from '../atoms/pager-button';

type Props = {
  prev: string | null;
  next: string | null;
}


export const Pager: React.FC<Props> = ({ prev, next }) => {
  return (
    <ul className='flex p-0 mt-8 mb-4 justify-center'>
      {next && (
        <PagerButton
          content={'<<'}
          href={next!}
        />
      )}
      {prev && (
        <PagerButton
          content={'>>'}
          href={prev!}
        />
      )}
    </ul>
  );
};
