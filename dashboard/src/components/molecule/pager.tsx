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
          content={'次の記事'}
          href={next!}
        />
      )}
      {prev && (
        <LinkButton
          content={'前の記事'}
          href={prev!}
        />
      )}
    </ul>
  );
};
