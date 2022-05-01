import React from 'react';
import { LinkButton } from '../atoms/link-button';

type Props = {
  prev: string | null;
  next: string | null;
}


export const Pager: React.FC<Props> = ({ prev, next }) => {
  return (
    <ul className='flex p-0 mt-8 mb-4 justify-center'>
      {next && (
        <LinkButton
          content={'<<'}
          href={next!}
        />
      )}
      {prev && (
        <LinkButton
          content={'>>'}
          href={prev!}
        />
      )}
    </ul>
  );
};
